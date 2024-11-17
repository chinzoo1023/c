var time = document.getElementsByTagName('h1')[0];
var  doil=0, second=0, minute=0, hour=0;
var ol = document.getElementsByTagName('ol')[0];
// start time

function watch(){
	doil++;
	if(doil>=99){
		second++;
		doil=0;
		if(second>=59){
			minute++;
			second=0;
			if(minute>59){
				hour++;
				minute=0;
			}
		}
	}
	
	var d = doil<10 ? "0"+doil : doil;
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText = h+":"+m+":"+s+":"+d
}
var s;
function start(){
	watch();
	s = setInterval(watch, 10)
	document.getElementsByTagName('button')[0].disabled = true;
	document.getElementsByTagName('button')[1].disabled = false;
}
function stop(){
	clearTimeout(s);
	document.getElementsByTagName('button')[0].disabled = false;
	document.getElementsByTagName('button')[1].disabled = true;	
}
function restart(){
	ol.innerText="";
	second=0
	minute=0
	hour=0
	time.innerText = "00:00:00:00";	
	clearInterval(s);
	document.getElementsByTagName('button')[0].disabled = false;	
}
function lap(){
	var li = document.createElement('li');
	li.innerText=time.innerText;
	console.log(li)
	ol.append(li);	
}	