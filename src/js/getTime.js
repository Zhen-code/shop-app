function getHoursMinutesSecondsByMS(time){
	 time = + time;
  time < 0 ? time = -1 * time : time; // 兼容负数的问题
  if( time < 0 ) {
    return null;
  }
	var hours=parseInt(time/(1000*60*60))%24
	// console.log(hours)
	var minutes=parseInt(time/(1000*60))%60
	// console.log(minutes)
	var seconds=parseInt(time/1000)%60
	// console.log(seconds)
	hours='0'+hours
	// console.log(hours)
	minutes='0'+minutes
	// console.log(minutes)
	seconds='0'+seconds
	// console.log(seconds)
    var newTime=hours.substr(-2)+minutes.substr(-2)+seconds.substr(-2)
    var timeArr=newTime.split('')
    return timeArr
}