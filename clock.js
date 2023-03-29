var pst = new Date()


var hour = pst.getHours();
if (hour > 12) {
    hour -= 12;
} else if (hour === 0) {
    hour = 12;
}

var min = pst.getMinutes();
var sec = pst.getSeconds();
 



document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;


setInterval (function () {

    var pst = new Date()


    var hour = pst.getHours();
    if (hour > 12) {
        hour -= 12;
    } else if (hours === 0) {
        hour = 12;
    }
    
    var min = pst.getMinutes();
    var sec = pst.getSeconds();
    
    
    
    
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    
        

}, 1000);