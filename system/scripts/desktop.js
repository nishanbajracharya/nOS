$(function() {
	wid=$(document).width();
	hei=$(document).height();
	//alert(wid+"  "+hei)
	$(".win-draggable").draggable({
		handle: '.title',
		containment:[ 125, 22, wid-$(".window").width()-6, hei-$(".window").height()-6 ]
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
			console.log("App Board On;");
			$(".icon-draggable").removeClass("moveUpClass")
			$(".icon-draggable").addClass("moveDownClass",'fast')
			$(".app-menu-grid").delay(500).fadeIn();
			//$(".running-apps").delay(800).fadeIn();
			toggled=true;
		}else{
			//$(".running-apps").fadeOut();
			console.log("App Board Off;");
			$(".app-menu-grid").fadeOut();
			$(".icon-draggable").addClass("moveUpClass",'normal')
			$(".icon-draggable").delay(500).removeClass("moveDownClass")
			toggled=false;
		}
	};
	$("#apps").dblclick(function(){
		$(document).appbar();
	})
	$(document).keyup(function(e) {
		if (e.keyCode == 18) {

			e.preventDefault();
			$(document).appbar();
		}   
	});
	$("#pc").dblclick(function(){
		$("#pc-main").fadeToggle(250);
		console.log("My PC Toggle;");
	})
	$(".pc-main .title .close-btn").click(function(){
		$("#pc-main").fadeOut(250);
	})
	$(".nano").nanoScroller();
	$("#sidebar ul li ul li").click(function(){
		$("#sidebar ul li ul li").removeClass('selected');
		if($(this).text()=="Display"){
			$("li#dis").addClass('selected');
		}
		if($(this).text()=="Devices"){
			$("li#dev").addClass('selected');
		}
		if($(this).text()=="System"){
			$("li#sys").addClass('selected');
		}
		if($(this).text()=="Security"){
			$("li#sec").addClass('selected');
		}
		if($(this).text()=="Networks"){
			$("li#net").addClass('selected');
		}
		if($(this).text()=="User Account"){
			$("li#usr").addClass('selected');
		}
	})
	$("#settings-body ul li").click(function(){
		$("#sidebar ul li ul li").removeClass('selected');
		if($(this).text()=="Display"){
			$("li#dis").addClass('selected');
		}
		if($(this).text()=="Devices"){
			$("li#dev").addClass('selected');
		}
		if($(this).text()=="System"){
			$("li#sys").addClass('selected');
		}
		if($(this).text()=="Security"){
			$("li#sec").addClass('selected');
		}
		if($(this).text()=="Networks"){
			$("li#net").addClass('selected');
		}
		if($(this).text()=="User Account"){
			$("li#usr").addClass('selected');
		}
	})
});