import nativeNetwork from '@system.network'

const util = {
	/**
   * 判断网络
   * @param options
   * @return {Promise}
   */
	getType(options) {
		const p1 = new Promise((resolve, reject) => {
			options.success = function(data) {
				resolve({data})
			}
			options.fail = function(data) {
				reject({data})
			}

			nativeNetwork.getType(options)
		})

		return p1
		
	},
	/**
   * 时间格式化
   * @param options
   * @return {Promise}
   */
	timeFormat(tmp){
        let mydate = new Date(tmp),
        curdate = new Date(),
        week = ['星期日 ', '星期一 ', '星期二 ', '星期三 ', '星期四 ', '星期五 ', '星期六 '],                                       
        Y = mydate.getFullYear(),
        M = mydate.getMonth(),
        D = mydate.getDate(),
        H = mydate.getHours(),
        MM = mydate.getMinutes(),
        y = curdate.getFullYear(),
        m = curdate.getMonth(),
        d = curdate.getDate(),
        disdate = (dayStamp(y,m,d) - dayStamp(Y,M,D))/86400000,
        timeFormat = '';

        //console.log(disdate)
        if(disdate === 0) { //今天
            timeFormat = timZero(H) + ':' + timZero(MM);
        } else if (disdate === 1) { // 昨天
            timeFormat = '昨天 ' + timZero(H) + ':' + timZero(MM);
        } else if (1 < disdate && disdate<7 ) { // 一周之内
            timeFormat = weeks(tmp) + timZero(H) + ':' + timZero(MM);
        } else { //一周之外
            timeFormat = Y +'年'+ (M+1) +'月'+ D +'日 '+ timZero(H) + ':' + timZero(MM);
        }

        function dayStamp(year, month, day){ //整天时间戳
            let d = new Date(year, month, day);
            return d.getTime();
        }

        function weeks( tmp ){
            let d = new Date(tmp).getDay();
            return week[d];
        }

        function timZero(num) {
            return num > 9 ? num : '0' + num;
        }

        return timeFormat;
    }
}


export default util