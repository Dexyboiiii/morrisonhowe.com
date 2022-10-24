// Once everything has loaded, fade in the main image and ensure the navbar title is invisible

function runOnLoad() {
    makeOpaqueByID("fullspan-image-1");
    document.getElementById("navbar-title-link").style.opacity = 0;
    console.log("Welcome to morrisonhowe.com");
}

// goTo____() scroll to a specific element when activated

function goToFooter() {
    document.getElementById('footer').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function goToPlacement() {
    document.getElementById('placement').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function goToThings() {
    document.getElementById('things').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

// makeOpaqueBy____() make the parsed element/elements in a class opaque

function makeOpaqueByID(elementID) {
    document.getElementById(elementID).style.opacity=1;
}

function makeOpaqueByClassName(elementClass) {
    document.getElementByClassName(elementClass).style.opacity=1;
}

// This stuff controls my name disappearing and reappearing in the title bar when it's not visible on the main section

window.onscroll = function() {scrollFunction("navbar", "fullspan-name");};

function scrollFunction(elementID, elementToHide) {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById(elementID).style.opacity = 1;
        document.getElementById(elementID).onclick = "";
        document.getElementById(elementID).style.cursor = "pointer";
        console.log("Displaying");
    } else {
        document.getElementById(elementID).style.opacity = 0;
        document.getElementById(elementID).onclick = "scrollToTop()";
        document.getElementById(elementID).style.cursor = "default";
        console.log("Hidden");
    }
}