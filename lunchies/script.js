function doDateStuff() {
    var weekdays = ["open-sun", "open-mon", "open-tue", "open-wed", "open-thu", "open-fri", "open-sat"];
    var d = new Date();
    var dayOfWeek = d.getDay();
    if (dayOfWeek == 0 || dayOfWeek == 6) {
        for (var i = 0; i < document.getElementsByClassName("opening-time-adaptive").length; i++) {
            document.getElementsByClassName("opening-time-adaptive")[i].innerHTML = "it is the weeknd m8";
            console.log("It is the weekend my dudes");
        }
    } else {
        for (var j = 0; j < document.getElementsByClassName("opening-time-adaptive").length; j++) {
            document.getElementsByClassName("opening-time-adaptive")[j].innerHTML = "Open";
            console.log("It is not the weekend my not dudes");
        }
    }
    document.getElementById(weekdays[dayOfWeek]).style.fontWeight = "bold";
}