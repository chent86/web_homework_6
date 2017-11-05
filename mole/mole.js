// 个人信息在README.md
var begin = 0;

window.onload = function() {
	var get_div = document.createElement("div");
	var ground=document.getElementById("ground");            //画地鼠洞
	for(var i = 0; i < 60; i++) {
		var tmp = document.createElement("div");
		tmp.addEventListener('click', find);
		tmp.className = "hole";
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
	document.getElementById('mode').value = "Playing";
	document.getElementsByTagName("input")[0].value = "31";
	time();
	lift();
}

function end() {
	document.getElementById('mode').value = "Game Over";
	begin = 0;
	for(var i = 0; i < 60; i++)
		if(document.getElementById('ground').children[i].className == "mouse") {
			document.getElementById('ground').children[i].className = "hole"      //清理留下的蓝色			
		}
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
	if(begin == 1) {
		var tmp = document.getElementsByTagName("input")[2].value;
		if(this.className == "mouse") {
			document.getElementsByTagName("input")[2].value = (parseInt(tmp)+1).toString();
			this.className = "hole";
			lift();
		}
		else
			document.getElementsByTagName("input")[2].value = (parseInt(tmp)-1).toString();
	}
}

function lift() {
	var ran = document.getElementById("ground").children[Math.round(Math.random()*59)];
	ran.className = "mouse";
}