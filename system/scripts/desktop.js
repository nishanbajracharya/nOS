$(function() {
	$(".win-draggable").draggable({
		handle: '.title'
	});
	$(".icon-draggable li").draggable();
	$(".draggable").draggable();
	toggled = false;
	$.fn.appbar = function () {
		$("#app-menu").fadeToggle();
		if(!toggled){
				$(".icon-draggable").removeClass("moveUpClass")
				$(".icon-draggable").addClass("moveDownClass",'fast')
				$(".app-menu-grid").delay(500).fadeIn();
				$(".running-apps").delay(800).fadeIn();
				toggled=true;
			}else{
				$(".running-apps").fadeOut();
				$(".app-menu-grid").fadeOut();
				$(".icon-draggable").addClass("moveUpClass",'normal')
				$(".icon-draggable").delay(500).removeClass("moveDownClass")
				toggled=false;
			}
	};
	$("#apps").click(function(){
		$(document).appbar();
	})
	$(document).keyup(function(e) {
		if (e.keyCode == 18) {
			e.preventDefault();
			$(document).appbar();
		}   
	});
});