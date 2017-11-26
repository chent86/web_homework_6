// 个人信息在README.md
var begin = 0;

window.onload = function() {
	_.times(60, function(){
		var tmp = document.createElement("div");
		tmp.addEventListener('click', find);              //画地鼠洞
		tmp.className = "hole";
		$("#ground").append(tmp);
	}); 
	$("#go").bind('click', start_or_stop);
}

function start_or_stop() {
	if(begin == 0)
		start();
	else
		end();
}

function start() {
	begin = 1;
	$("input")[2].value = "0";
	$("#mode")[0].value = "Playing";
	$("input")[0].value = "31";
	time();
	lift();
}

function end() {
	$("#mode")[0].value = "Game Over";
	begin = 0;
	for(var i = 0; i < 60; i++)
		if($("#ground")[0].children[i].className == "mouse") {
			$("#ground")[0].children[i].className = "hole"      //清理留下的蓝色			
		}
	alert("Game Over\nYou score is: "+$("input")[2].value);
}

function time() {
	if(begin == 0)
		return;
	var current = $("input")[0];
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
		var tmp = $("input")[2].value;
		if(this.className == "mouse") {
			$("input")[2].value = (parseInt(tmp)+1).toString();
			this.className = "hole";
			lift();
		}
		else
			$("input")[2].value = (parseInt(tmp)-1).toString();
	}
}

function lift() {
	var ran = $("#ground")[0].children[_.random(59)];
	ran.className = "mouse";
}