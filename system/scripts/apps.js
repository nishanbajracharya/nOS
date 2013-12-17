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
	$(".app .app-title .close-btn").click(function(){
		//$(".app").fadeOut('fast');
		$(".app").animate({
			left:"+=40%",
			width:"-=90%",
			height:"-=90%",
			opacity:"0"
		},250);
		$(".app").fadeOut();
	})

})