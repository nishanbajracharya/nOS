$(function() {
	$(".win-draggable").draggable({
		handle: '.title'
	});
	$(".icon-draggable li").draggable();
	$("#apps").click(function(){
		$("#app-menu").fadeIn();
	})
	$("#documents").dblclick(function(){

	})
	$(document).keyup(function(e) {
		if (e.keyCode == 18) {
			e.preventDefault();
			$("#app-menu").fadeToggle();
		}   
	});
});