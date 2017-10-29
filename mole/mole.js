var begin = 0;

window.onload = function() {
	var get_div = document.createElement("div");
	var ground=document.getElementById("ground");            //画地鼠洞
	for(var i = 0; i < 60; i++) {
		var tmp = document.createElement("div");
		tmp.addEventListener('click', find);
		ground.append(tmp);
	}
	document.getElementById('record').children[0].addEventListener('click', start_or_stop);
}

function start_or_stop() {
	if(begin == 0)
		start();
	else
		end();
}

function start() {
	begin = 1;
	document.getElementsByTagName("input")[2].value = "0";
	for(var i = 0; i < 60; i++)
		if(document.getElementById('ground').children[i].style.borderColor == "rgb(2, 242, 242)") {
			document.getElementById('ground').children[i].style.borderColor = "grey";
			document.getElementById('ground').children[i].style.borderWidth = "thin";      //清理留下的蓝色
			document.getElementById('ground').children[i].style.width = "15px";
			document.getElementById('ground').children[i].style.height = "15px";			
		}
	document.getElementById('mode').value = "Playing";
	document.getElementsByTagName("input")[0].value = "31";
	time();
	lift();
}

function end() {
	document.getElementById('mode').value = "Game Over";
	begin = 0;
	alert("Game Over\nYou score is: "+document.getElementsByTagName("input")[2].value);
}

function time() {
	if(begin == 0)
		return;
	var current = document.getElementsByTagName("input")[0];
	if(parseInt(current.value) > 0)
		current.value = (parseInt(current.value)-1).toString();
	if(parseInt(current.value) <= 0) {
		clearTimeout(t);
		end();
		return;
	}
	t = setTimeout("time()", 1000);
}

function find() {
	var tmp = document.getElementsByTagName("input")[2].value;
	if(this.style.borderColor == "rgb(2, 242, 242)") {
		document.getElementsByTagName("input")[2].value = (parseInt(tmp)+1).toString();
		this.style.borderColor = "grey";
		this.style.borderWidth = "thin";
		this.style.width = "15px";
		this.style.height = "15px";
		lift();
	}
	else
		document.getElementsByTagName("input")[2].value = (parseInt(tmp)-1).toString();

}

function lift() {
	var ran = document.getElementById("ground").children[Math.round(Math.random()*59)].style;
	ran.borderColor = "#02f2f2"; 
	ran.borderWidth = "thick";
	ran.width = "8px";
	ran.height = "8px";
}