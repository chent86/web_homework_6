// 个人信息在README.md
var begin = 0, check = 0;
window.onload = function() {
	$("#maze").bind("mouseleave",clean);
	$(".wall").bind('mouseenter', lose);
	$("#start").bind('mouseenter', fadeout).bind('mouseenter', through_begin);
	$("#check").bind('mouseenter', through_check);
	$("#end").bind('mouseenter', through_end);
}

function lose() {
	if(begin == 1 && this.id != "sample") {
		$("#three").text("You Lose");
		begin = 0;
		check = 0;
		end = 0;
		this.className = "red";
		$("#three").addClass("show");		
	}
}

function clean() {
	$(".red").removeClass("red").addClass("wall");
}

function fadeout() {
	$("#three").addClass("hide");
}

function through_begin() {
	begin = 1;
	check = 0;
	$("#three").removeClass("show").addClass("hide");
}

function through_check() {
	check = 1;
}

function win() {
	$("#three").text("You Win").addClass("show");
	begin = 0;
	check = 0;
}

function cheat() {
	$("#three").text("Don't cheat, you should start from the 'S' \
		and move to the 'E' inside the maze!").addClass("show");
	begin = 0;
	check = 0;
}

function through_end() {
	if(begin == 1 && check == 1)
		win();
	else if((begin == 1 && check == 0) || begin == 0)
		cheat();
}