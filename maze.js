var start = 0, check = 0;

window.onload = function() {
	var mouse = document.getElementById('maze');
	mouse.addEventListener('mouseenter', change);

	var wall = document.getElementsByClassName('wall');
	for(var x = 0; x < 7; x++) 
		wall[x].addEventListener('mouseenter', lose);

	var clear = document.getElementById('start');
	clear.addEventListener('mouseenter', clean);

	document.getElementById('start').addEventListener('mouseenter', through_start);
	document.getElementById('check').addEventListener('mouseenter', through_check);
	document.getElementById('end').addEventListener('mouseenter', through_end);

}

function change() {
	this.style.cursor = 'pointer';
}

function lose() {
	text = document.getElementById('three');
	if(text.style.opacity == "")
		text.style.opacity = 0;
	text.innerText = "You Lose";
	start = 0;
	check = 0;
	end = 0;
	this.style.backgroundColor = "#ff0000";
	fadein();
}

function fadein() {
	text = document.getElementById('three');
	if(parseFloat(text.style.opacity) < 1)
		text.style.opacity = (parseFloat(text.style.opacity)+0.25).toString();
	if(parseFloat(text.style.opacity) >= 1) {
		clearTimeout(t);
		return;
	}
	t = setTimeout("fadein()", 50);
}

function clean() {
	var wall = document.getElementsByClassName('wall');
	for(var x = 0; x < 7; x++)
		wall[x].style.backgroundColor = "#e0dede";
	fadeout();
}

function fadeout() {
	text = document.getElementById('three');
	if(parseFloat(text.style.opacity) > 0)
	text.style.opacity = (parseFloat(text.style.opacity)-0.25).toString();
	if(parseFloat(text.style.opacity) == 0) {
		clearTimeout(t);
		return;
	}
	t = setTimeout("fadeout()", 50);
}

function through_start() {
	start = 1;
	check = 0;
	end = 0;
}

function through_check() {
	check = 1;
	end = 0;
}

function win() {
	text = document.getElementById('three');
	text.innerText = "You Win";
	start = 0;
	check = 0;
	end = 0;
	fadein();	
}

function cheat() {
	text = document.getElementById('three');
	text.innerText = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
	start = 0;
	check = 0;
	end = 0;
	fadein();	
}

function through_end() {
	if(start == 1 && check == 1)
		win();
	else if(start == 1 && check == 0)
		cheat();
}