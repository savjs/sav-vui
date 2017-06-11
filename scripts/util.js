
var RE_ICON = /.(?:prefix)([\-\w]+):(?:before|after)(?:[\w\-:\s{]+)(?:'|")([\\\w\d]+)(?:'|")/

function getIconRe (prefix) {
	return new RegExp(RE_ICON.source.replace('prefix', prefix), 'g');
}

function matchIcon(prefix, input) {
	var re = getIconRe(prefix);
	var ret = [];
	var mat = re.exec(input);
	while (mat) {
	    ret.push([mat[1], mat[2]]);
	    mat  = re.exec(input);
	}
	return ret;
}

function replaceIcon(mat, prefix, after) {
	return mat.map(function(it){
    // .fa-glass:before { content: "\f000" }
    // return '.' + prefix + it[0] + ':' + (after ? 'after' : 'before') + ' { content: "' + it[1] +'" }';
    //  .fa-glass:before
    //    content: ""
		return '  .' + prefix + it[0] + '::' + (after ? 'after' : 'before') + "\n    content: '" + it[1] +"'";
	}).join('\n');
}

function replaceHtml (mat, prefix, format) {
	return mat.map(function(it){
		return format.replace(/%name/g, prefix + it[0]).replace(/%content/g, it[1]);
	}).join('\n');
}

// 包括空格和换行
var RE_BLOCK = /(\s{0,}<!--\sstart\s-->)([\s\S]*?)(\s{0,}<!--\send\s-->)/; //匹配 <!-- start --> * <!-- end -->

function replaceHtmlBlock (input, mat, prefix, format) {
	var html = replaceHtml(mat, prefix, format);
	return input.replace(RE_BLOCK, function (all, start, content, end) {
		return start + '\n' + html + end;
	});
}

module.exports = {
	matchIcon : matchIcon,
	replaceIcon : replaceIcon,
	replaceHtml : replaceHtml,
	replaceHtmlBlock : replaceHtmlBlock,
}
