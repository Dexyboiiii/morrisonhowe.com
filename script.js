// Once everything has loaded, fade in the main image and ensure the navbar title is invisible

function runOnLoad() {
    revealHeader();
    const footer = document.getElementById("about-title");
    footer.textContent = getRandomHelloWorld();
    footer.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--monospace-font');
    console.log("Welcome to morrisonhowe.com");
}

function getRandomHelloWorld() {
    const helloWorlds = ["System.out.println(\"Hello World!\");",
        "console.log(\"Hello World!\")",
        "println(\"Hello World!\");",
        "print(\"Hello World!\")",
        "echo \" Hello World! \"",
        "JLabel helloWorld = new JLabel(\"Hello World!\");",
        "Text(\"Hello World!\")",
        "<h1 id=\"about-title\">Hello, World!</h1>",
    ];
    return helloWorlds[Math.floor(Math.random() * helloWorlds.length)];
}

// goTo____() scroll to a specific element when activated

function goToFooter() {
    document.getElementById('footer').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function goToPlacement() {
    document.getElementById('work').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function goToThings() {
    document.getElementById('things').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

function revealHeader() {
    const expandingImages = document.getElementsByClassName("expanding-image");
    for (const element of expandingImages) {
        element.classList.add("expanded");
    }
}

function makeOpaqueByClassName(elementClass) {
    for (let element of document.getElementsByClassName(elementClass)) {
        element.style.opacity = "1";
    }
}

// This stuff controls my name disappearing and reappearing in the title bar when it's not visible on the main section

window.onscroll = function() {
    scrollFunction("navbar");
};

function scrollFunction(elementID) {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById(elementID).style.opacity = "1";
        document.getElementById(elementID).onclick = null;
        document.getElementById(elementID).style.cursor = "pointer";
        console.log("Displaying");
    } else {
        document.getElementById(elementID).style.opacity = "0";
        document.getElementById(elementID).onclick = () => scrollToTop();
        document.getElementById(elementID).style.cursor = "default";
        console.log("Hidden");
    }
}