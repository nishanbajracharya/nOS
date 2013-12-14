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
}
setInterval(getDateTime,1000);

function launchFullScreen() {
    element=document.getElementById("kernel")
    if(element.requestFullScreen) {
        element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
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
            $('#batterybtn img').attr("src","system/images/toolbar/battery.png");
        }else{
            if(battery_lvl<20){
                $('#batterybtn img').attr("src","system/images/toolbar/battery-20.png");
            }else if(battery_lvl<40){
                $('#batterybtn img').attr("src","system/images/toolbar/battery-40.png");
            }else if(battery_lvl<60){
                $('#batterybtn img').attr("src","system/images/toolbar/battery-60.png");
            }else if(battery_lvl<80){
                $('#batterybtn img').attr("src","system/images/toolbar/battery-80.png");
            }else{
                $('#batterybtn img').attr("src","system/images/toolbar/battery-100.png");
            }
            $('#battery').text("Battery Remaining "+Math.round(battery.level*100)+"%");
        }
    }
}
setInterval(checkBattery,1000);

function checkConnection() {
    status=navigator.onLine
    if(status){
        $('#wifi').text("Connected");
        $('#wifibtn img').attr("src","system/images/toolbar/wifi.png");
    }else{
        $('#wifi').text("Not Connected");
        $('#wifibtn img').attr("src","system/images/toolbar/wifi-fail.png");

    }
}
setInterval(checkConnection,1000);

$(document).ready(function(){
    $(document).on('keydown', disableFunctionKeys);
    $('#fullscreen').text("Enter Fullscreen");
    $("#fullscreenbtn").click(function(){
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            launchFullScreen()
            $('#fullscreen').text("Exit Fullscreen");
        }else{
            cancelFullscreen()
            $('#fullscreen').text("Enter Fullscreen");
        }
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
});