<template>
    <div class="sav-datetime-picker" :style="{ width: width }">
        
        <sav-input 
            :value="trueValue"
            @click.native="show = !show" :size="size"></sav-input>
            
        <div class="picker-wrap" v-show="show">
            <table class="date-picker">
                <thead>
                    <tr class="date-head">
                        <th colspan="7">
                            <span class="btn-prev" @click="yearClick(-1)">&lt;&lt;</span>
                            <span class="btn-prev" @click="monthClick(-1)">&lt;</span>
                            <span class="show-year">{{now.getFullYear()}}年</span>
                            <span class="show-month">{{months[now.getMonth()]}}</span>
                            <span class="btn-next" @click="monthClick(1)">&gt;</span>
                            <span class="btn-next" @click="yearClick(1)">&gt;&gt;</span>
                        </th>
                    </tr>
                    <tr class="date-days">
                        <th v-for="day in days">{{day}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 6">
                        <td v-for="j in 7"
                            :class="date[(i-1) * 7 + (j-1)] && date[(i-1) * 7 + (j-1)].status"
                            :date="date[(i-1) * 7 + (j-1)] && date[(i-1) * 7 + (j-1)].date"
                            @click="pickDate((i-1) * 7 + (j-1))">{{date[(i-1) * 7 + (j-1)] && date[(i-1)* 7 + (j-1)].text}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
  import {elements} from '../mixin'
  import SavInput from './SavInput.vue'
    export default {
        mixins: elements,
        props: {
            width: { type: String, default: '238px' },
            readonly: { type: Boolean, default: false },
            value: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' },
            name: { type: String, default: '' },
            size: { type: [String, Boolean], default: '' },
        },
        components:{
            SavInput
        },
        data () {
            return {
                show: false,
                days: ['日', '一', '二', '三', '四', '五', '六'],
                months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                date: [],
                now: new Date(),
                trueValue: this.value || ''
            };
        },
        watch: {
            now () {
                this.update();
            },
            show () {
                this.update();
            }
        },
        methods: {
            close () {
                this.show = false;
            },
            update () {
                var arr = [];
                var time = new Date(this.now);
                time.setMonth(time.getMonth(), 1);           // the first day
                                                         
                var curFirstDay = time.getDay();
               
                curFirstDay == 0 && (curFirstDay = 7);
                time.setDate(0);                             // the last day of last month
                                                             
                var lastDayCount = time.getDate();
                
                for (let i = curFirstDay; i > 0; i--) {
                    arr.push({
                        text: lastDayCount - i + 1,
                        time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
                        status: 'date-pass'
                    });
                }

                time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
                var curDayCount = time.getDate();
                time.setDate(1);                             // fix bug when month change ,the first day of this month
                                                             
                // var value = this.value || this.stringify(new Date());
                var value = this.trueValue || this.stringify(new Date());

                for (let i = 0; i < curDayCount; i++) {
                    let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
                    let status = '';
                    this.stringify(tmpTime) === value && (status = 'date-active');
                    arr.push({
                        text: i + 1,
                        time: tmpTime,
                        status: status
                    });
                }
                var j = 1;
                while (arr.length < 42) {
                    arr.push({
                        text: j,
                        time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                        status: 'date-future'
                    });
                    j++;
                }
                this.date = arr;
                
            },
            
            
            stringify (time = this.now, format = this.format) {
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var date = time.getDate();
                var monthName = this.months[time.getMonth()];
                var map = {
                    YYYY: year,
                    MMM: monthName,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    DD: ('0' + date).slice(-2),
                    D: date
                };
                return format.replace(/Y+|M+|D+/g, function (str) {
                    return map[str];
                });
            },

            pickDate (index) {
                this.show = false;
                this.now = new Date(this.date[index].time);
                // this.value = this.stringify();
                this.trueValue = this.stringify();
                this.$emit('input', this.trueValue)
                
            },
            parse (str) {
                var time = new Date(str);
                return isNaN(time.getTime()) ? null : time;
            },
            yearClick (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag);
                this.now = new Date(this.now);
            },
            monthClick (flag) {
                this.now.setMonth(this.now.getMonth() + flag);
                this.now = new Date(this.now);
            },
            leave (e) {
                if (!this.$el.contains(e.target)) {
                    this.close();
                }
            }
        },
        created () {
            // this.trueValue = this.value
            this.now = this.parse(this.value) || new Date();
            document.addEventListener('click', this.leave, false);
        },
        beforeDestroy () {
            document.removeEventListener('click', this.leave, false);
        }
    };
</script>


