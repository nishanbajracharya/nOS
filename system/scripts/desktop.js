$(function() {
	$(".win-draggable").draggable({
		handle: '.title'
	});
	$(".icon-draggable li").draggable();
	$("#apps").click(function(){
		$("#app-menu").fadeIn();
		$(".icon-draggable").addClass("moveDownClass",'normal')
		toggled=true;
	})
	$("#documents").dblclick(function(){

	})
	toggled = false;
	$(document).keyup(function(e) {
		if (e.keyCode == 18) {
			e.preventDefault();
			$("#app-menu").fadeToggle();
			if(!toggled){
				$(".icon-draggable").removeClass("moveUpClass")
				$(".icon-draggable").addClass("moveDownClass",'fast')
				toggled=true;
			}else{
				$(".icon-draggable").addClass("moveUpClass",'normal')
				$(".icon-draggable").delay(500).removeClass("moveDownClass")
				toggled=false;
			}
		}   
	});
});