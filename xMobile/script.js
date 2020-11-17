function doDateStuff() {
    var weekdays = ["open-sun", "open-mon", "open-tue", "open-wed", "open-thu", "open-fri", "open-sat"];
    var d = new Date();
    var dayOfWeek = d.getDay();
    if (dayOfWeek == 0) {
        for (var i = 0; i < document.getElementsByClassName("opening-time-adaptive").length; i++) {
            document.getElementsByClassName("opening-time-adaptive")[i].innerHTML = "10am-5pm";
            console.log("It is sunday my dudes");
        }
    } else {
        for (var j = 0; j < document.getElementsByClassName("opening-time-adaptive").length; j++) {
            document.getElementsByClassName("opening-time-adaptive")[j].innerHTML = "9am-6pm";
            console.log("It is not sunday my not dudes");
        }
    }
    document.getElementById(weekdays[dayOfWeek]).style.fontWeight = "bold";
}