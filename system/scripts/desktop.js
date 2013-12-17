$(function() {
	$(".win-draggable").draggable({
		handle: '.title'
	});
	$(".icon-draggable ul").draggable();
	$(".draggable").draggable();
	toggled = false;
	$.fn.appbar = function () {
		if(cal_tog){
            $("#calendar").animate({
                top:"-=20px",
                opacity:"0"
            },250);
            $("#calendar").fadeOut();
            cal_tog=false;
        }
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