const path = require('path')
const fs = require('fs')
const fss = require('fs-extra')

exports.readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      return err ? reject(err) : resolve(data)
    })
  })
}

exports.readdirAsync = (dir, mapToObject) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, data) => {
      return err ? reject(err) : resolve(mapToObject ? data.map((it) => {
        return {
          fileName: it,
          filePath: path.resolve(dir, it)
        }
      }): data)
    })
  })
}

exports.copyFileAsync = fss.copy

exports.fileExistsAsync = (file) => {
  return new Promise((resolve) => fs.exists(file, resolve))
}

exports.writeFileAsync = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      return err ? reject(err) : resolve(file)
    })
  })
}

function mkdirs (dirpath, mode, callback) {
  fs.exists(dirpath, (exists) => {
    if (exists) {
      if (callback) {
        callback(null, dirpath)
      }
    } else {
      mkdirs(path.dirname(dirpath), mode, () => {
        fs.mkdir(dirpath, mode, callback)
      })
    }
  })
}

let mkdirp = exports.mkdirp = (dirpath, mode, callback) => {
  dirpath = path.resolve(dirpath)
  if (!callback) {
    callback = mode
    mode = parseInt('0777', 8) & (~process.umask())
  }
  return mkdirs(dirpath, mode, (err, data) => {
    if (typeof callback !== 'function') {
      return
    }
    if ((!err) || (err && err.code === 'EEXIST')) {
      return callback(null, data)
    }
    return callback(err)
  })
}

exports.mkdirAsync = (dir) => {
  return new Promise((resolve, reject) => {
    mkdirp(dir, (err) => {
      return err ? reject(err) : resolve(dir)
    })
  })
}
