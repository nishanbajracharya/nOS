$(function() {
	$(".win-draggable").draggable({
		handle: '.title'
	});
	$(".icon-draggable li").draggable();
	toggled = false;
	$.fn.appbar = function () {
		if(!toggled){
				$(".icon-draggable").removeClass("moveUpClass")
				$(".icon-draggable").addClass("moveDownClass",'fast')
				$(".app-menu-grid").delay(500).fadeIn();
				toggled=true;
			}else{
				$(".app-menu-grid").fadeOut();
				$(".icon-draggable").addClass("moveUpClass",'normal')
				$(".icon-draggable").delay(500).removeClass("moveDownClass")
				toggled=false;
			}
	};
	$("#apps").click(function(){
		$("#app-menu").fadeToggle();
		$(document).appbar();
	})
	$(document).keyup(function(e) {
		if (e.keyCode == 18) {
			e.preventDefault();
			$("#app-menu").fadeToggle();
			$(document).appbar();
		}   
	});
});