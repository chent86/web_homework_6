// 个人信息在README.md
var begin = 0, check = 0;
window.onload = function() {
	var mouse = document.getElementById('maze');
	mouse.addEventListener('mouseenter', change);
	mouse.addEventListener('mouseleave', clean);

	var wall = document.getElementsByClassName('wall');
	for(var x = 0; x < 7; x++) 
		wall[x].addEventListener('mouseenter', lose);

	var clear = document.getElementById('start');
	clear.addEventListener('mouseenter', fadeout);

	document.getElementById('start').addEventListener('mouseenter', through_begin);
	document.getElementById('check').addEventListener('mouseenter', through_check);
	document.getElementById('end').addEventListener('mouseenter', through_end);

}

function change() {
	this.style.cursor = 'pointer';
}

function lose() {
	if(begin == 1) {
		text = document.getElementById('three');
		if(text.style.opacity == "")
			text.style.opacity = 0;
		text.innerText = "You Lose";
		begin = 0;
		check = 0;
		end = 0;
		this.className = "red";
		fadein();
	}
}

function fadein() {
	text = document.getElementById('three');
	if(parseFloat(text.style.opacity) < 1)
		text.style.opacity = (parseFloat(text.style.opacity)+0.25).toString();
	if(parseFloat(text.style.opacity) >= 1) {
		clearTimeout(t);
		return;
	}
	var t = setTimeout("fadein()", 50);
}

function clean() {
	var wall = document.getElementsByClassName('red');
	wall[0].className = "wall";
}

function fadeout() {
	text = document.getElementById('three');
	if(parseFloat(text.style.opacity) > 0)
	text.style.opacity = (parseFloat(text.style.opacity)-0.25).toString();
	if(parseFloat(text.style.opacity) == 0) {
		clearTimeout(k);
		return;
	}
	var k = setTimeout("fadeout()", 50);
}

function through_begin() {
	begin = 1;
	check = 0;
}

function through_check() {
	check = 1;
}

function win() {
	text = document.getElementById('three');
	text.innerText = "You Win";
	begin = 0;
	check = 0;
	if(text.style.opacity == "")
		text.style.opacity = 0;
	fadein();	
}

function cheat() {
	text = document.getElementById('three');
	text.innerText = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
	begin = 0;
	check = 0;
	if(text.style.opacity == "")
		text.style.opacity = 0;
	fadein();	
}

function through_end() {
	if(begin == 1 && check == 1)
		win();
	else if((begin == 1 && check == 0) || begin == 0)
		cheat();

}