$(function(){
	firstrun = true;
	$("#browser").dblclick(function(){
		//$(".browser-main").delay(250).fadeIn('fast');
		$(".browser-main").css({"display":"block"});
		$(".browser-main").animate({
			left:"-=40%",
			width:"+=90%",
			height:"+=90%",
			opacity:"1"
		},250);
		if(firstrun){
			$("#loader-circle").fadeIn();
			loadIframe("frame","http://www.duckduckgo.com");
		}
		console.log("Browser App On. Status:Running;");
	})
	$("#documents").dblclick(function(){
		//$(".browser-main").delay(250).fadeIn('fast');
		$(".document-main").css({"display":"block"});
		$(".document-main").animate({
			left:"-=40%",
			width:"+=90%",
			height:"+=90%",
			opacity:"1"
		},250);
		console.log("Documents App On. Status:Running;");
	})
	$("#settings").dblclick(function(){
		//$(".browser-main").delay(250).fadeIn('fast');
		$(".settings-main").css({"display":"block"});
		$(".settings-main").animate({
			left:"-=40%",
			width:"+=90%",
			height:"+=90%",
			opacity:"1"
		},250);
		console.log("Settings App On. Status:Running;");
	})
	$('#browser-url').click(function(){
		if($(this).val()==""){
			$(this).val("http://")
		}
	})
	function loadIframe(iframeName, url) {
		var $iframe = $('#' + iframeName);
		if ( $iframe.length ) {
			$iframe.attr('src',url);   
			return false;
		}
		return true;
		console.log("Browser: "+$iframe.attr('src')+";")
	}
	function isUrl(s) {
		var regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
		return regexp.test(s);
	}
	$('#browser-url').keyup(function(e){
		if (e.keyCode == 13) {
			$("#loader-circle").fadeIn();
			url=$('#browser-url').val()
			if(url.substr(0,7)!="file://"){
				if(!isUrl(url)){
					url="http://www.duckduckgo.com/?q="+url;
					$('#browser-url').val(url)
				}else{
					if(url.substr(0,7)!="http://"){
						url="http://"+url;
						$('#browser-url').val(url)
					}
				}
			}
			e.preventDefault();
			loadIframe("frame",url);
			console.log("Browser: "+url+";")
		}   
	})
	$('#frame').load(function() {
		url=$('#frame').attr('src')
		ifrm = $('#frame');
		//alert(url);
		$('#browser-url').val(url)
		$("#loader-circle").fadeOut();
		firstrun=false;
	});
	$(".document-main .app-title .close-btn").click(function(){
		//$(".app").fadeOut('fast');

		$(".document-main").animate({
			left:"+=40%",
			width:"-=90%",
			height:"-=90%",
			opacity:"0"
		},250);
		$(".document-main").fadeOut();
		console.log("Documents App Off;");
	})
	$(".settings-main .app-title .close-btn").click(function(){
		//$(".app").fadeOut('fast');

		$(".settings-main").animate({
			left:"+=40%",
			width:"-=90%",
			height:"-=90%",
			opacity:"0"
		},250);
		$(".settings-main").fadeOut();
		console.log("Settings App Off;");
	})
	$(".browser-main .app-title .close-btn").click(function(){
		//$(".app").fadeOut('fast');
		$(".browser-main").animate({
			left:"+=40%",
			width:"-=90%",
			height:"-=90%",
			opacity:"0"
		},250);
		$(".browser-main").fadeOut();
		console.log("Browser App Off;");
	})
	$("#apps-grid-icons ul li ul li img").click(function(){
		$(document).appbar();
		src=($(this).attr('src'));
		var pattern = /[0-9]+/g;
		var matches = src.match(pattern)-1;
		console.log("App Initialization : "+appArray[matches]);
		$(".app-general").css({"display":"block"});
		$(".app-general").animate({
			left:"-=40%",
			width:"+=90%",
			height:"+=90%",
			opacity:"1"
		},250);
		$(".app-general #app-bar").text(appArray[matches]);
		//alert(appURL[matches])
		//if (window.top != window.self) {window.top.location = window.self.location;}
		loadIframe("app-frame",appURL[matches]);
		//$("#app-frame").attr("data",appURL[matches]);
		//$("#app-frame").load(appURL[matches]);

	})
	$(".app-general .app-title .close-btn").click(function(){
		loadIframe("app-frame","system/html/empty.htm");
		$(".app-general").delay(10).animate({
			left:"+=40%",
			width:"-=90%",
			height:"-=90%",
			opacity:"0"
		},250);
		video.pause();
		localMediaStream.stop()
		$(".app-general").fadeOut();
		console.log("App Off : "+appArray[matches]);
	})
})