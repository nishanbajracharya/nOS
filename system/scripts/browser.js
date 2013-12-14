var userAgent = navigator.userAgent.toLowerCase(),
    browser   = '',
    version   = 0;

$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

// Is this a version of IE?
if ($.browser.msie) {
  userAgent = $.browser.version;
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));	
  version = userAgent;
  browser = "IE";
}

// Is this a version of Chrome?
if ($.browser.chrome) {
  userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));	
  version = userAgent;
  // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
  $.browser.safari = false;
  browser = "Chrome";

}

// Is this a version of Safari?
if ($.browser.safari) {
  userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);	
  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
  version = userAgent;	
  browser = "Safari";
}

// Is this a version of Mozilla?
if ($.browser.mozilla) {
	//Is it Firefox?
	if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
		userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		version = userAgent;
		browser = "Firefox"

	}
	// If not then it must be another Mozilla
	else {
	  browser = "Mozilla"
	}
}

// Is this a version of Opera?
if ($.browser.opera) {
	userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
	userAgent = userAgent.substring(0,userAgent.indexOf('.'));
	version = userAgent;
	browser = "Opera";
}