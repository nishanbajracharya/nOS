var log_time=""
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var date     = now.getDate();
    var day     = now.getDay()+1;
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    switch(month){
        case 1:
        month="January";
        break;
        case 2:
        month="February";
        break;
        case 3:
        month="March";
        break;
        case 4:
        month="April";
        break;
        case 5:
        month="May";
        break;
        case 6:
        month="June";
        break;
        case 7:
        month="July";
        break;
        case 8:
        month="August";
        break;
        case 9:
        month="September";
        break;
        case 10:
        month="October";
        break;
        case 11:
        month="November";
        break;
        case 12:
        month="December";
        break;
        default:
    }
    switch(day){
        case 1:
        day="Sunday"
        break;
        case 2:
        day="Monday"
        break;
        case 3:
        day="Tuesday"
        break;
        case 4:
        day="Wednesday"
        break;
        case 5:
        day="Thursday"
        break;
        case 6:
        day="Friday"
        break;
        case 7:
        day="Saturday"
        break;
        default:
    }  
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = day+' '+month+' '+date+' '+year+'  '+hour+':'+minute;   
    document.getElementById("datetime").innerHTML = dateTime;
    log_time=hour+':'+minute+":"+second;
}
setInterval(getDateTime,1000);

function launchFullScreen() {
    element=document.getElementById("kernel")
    if(element.requestFullScreen) {
        element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}
function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
} else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
} else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
}
}
function disableFunctionKeys(e) {
    var functionKeys = new Array(112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123);
    if (functionKeys.indexOf(e.keyCode) > -1 || functionKeys.indexOf(e.which) > -1) {
        e.preventDefault();
    }
};

var isChrome = window.chrome;
var themeFolder = 'basic';
function checkBattery(){
    if(isChrome){
        $('#battery').text("Battery Status Not Available In Webkit-based Browser");
    }else{
        var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
        battery_lvl=Math.round(battery.level*100);
        if(battery.charging){
            if(battery_lvl==100){
                $('#battery').text("Charged "+battery_lvl+"%");
            }else{
                $('#battery').text("Charging "+battery_lvl+"%");
            }
            $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery.png)",
                "background-size":"20px",
                "background-position": "2px",
                "background-repeat":"no-repeat"});
        }else{
            if(battery_lvl<20){
                $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery-20.png)",
                    "background-size":"20px",
                    "background-position": "2px",
                    "background-repeat":"no-repeat"});
            }else if(battery_lvl<40){
                $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery-40.png)",
                    "background-size":"20px",
                    "background-position": "2px",
                    "background-repeat":"no-repeat"});
            }else if(battery_lvl<60){
                $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery-60.png)",
                    "background-size":"20px",
                    "background-position": "2px",
                    "background-repeat":"no-repeat"});
            }else if(battery_lvl<80){
                $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery-80.png)",
                    "background-size":"20px",
                    "background-position": "2px",
                    "background-repeat":"no-repeat"});
            }else{
                $('#batterybtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/battery-100.png)",
                    "background-size":"20px",
                    "background-position": "2px",
                    "background-repeat":"no-repeat"});
            }
            $('#battery').text("Battery Remaining "+Math.round(battery.level*100)+"%");
            //alert("url(../../../system/images/toolbar/"+themeFolder+"/battery-100.png)")
        }
    }
}
setInterval(checkBattery,1000);

function checkConnection() {
    status=navigator.onLine
    if(status){
        $('#wifi').text("Connected");
        if(!isChrome){
            $('#wifibtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/wifi.png)",
                "background-size":"20px",
                "background-position": "2px",
                "background-repeat":"no-repeat"});
        }
    }else{
        $('#wifi').text("Not Connected");
        $('#wifibtn').css({"background":"url(system/images/toolbar/"+themeFolder+"/wifi-fail.png)",
            "background-size":"20px",
            "background-position": "2px",
            "background-repeat":"no-repeat"});
    }
}
setInterval(checkConnection,1000);

$(document).ready(function(){
    $(document).on('keydown', disableFunctionKeys);
    $('#fullscreen').text("Enter Fullscreen");
    $("#fullscreenbtn").click(function(){
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            launchFullScreen()
            console.log("Fullscreen On;")
            $('#fullscreen').text("Exit Fullscreen");
        }else{
            cancelFullscreen()
            console.log("Fullscreen Off;")
            $('#fullscreen').text("Enter Fullscreen");
        }
    });
    $("#reloadbtn").click(function(){
        location.reload();
    });
    $('#fullscreenbtn').hover(function(){
        $('#fullscreen').animate({"opacity": "1"}, "slow");
    },function(){
        $('#fullscreen').animate({"opacity": "0"}, "slow");
    });
    $('#batterybtn').hover(function(){
        $('#battery').animate({"opacity": "1"}, "slow");
    },function(){
        $('#battery').animate({"opacity": "0"}, "slow");
    });
    $('#wifibtn').hover(function(){
        $('#wifi').animate({"opacity": "1"}, "slow");
    },function(){
        $('#wifi').animate({"opacity": "0"}, "slow");
    });
    $('#reloadbtn').hover(function(){
        $('#reload').animate({"opacity": "1"}, "slow");
        
    },function(){
        $('#reload').animate({"opacity": "0"}, "slow");
    });
    cal_tog=false;
    $('#datetime').click(function(){
        if(cal_tog){
            $("#calendar").animate({
                top:"-=20px",
                opacity:"0"
            },250);
            $("#calendar").fadeOut();
            cal_tog=false;
            console.log("Calendar Off;")
        }else{
            $("#calendar").css({"display":"block"});
            $("#calendar").animate({
                top:"+=20px",
                opacity:"1"
            },250);
            cal_tog=true;
            console.log("Calendar On;")
        }
    });
});