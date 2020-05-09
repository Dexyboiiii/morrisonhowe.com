// Word counter that doesn't use regex because Elliott said I should use regex
// Johnny Morrison-Howe, morrisonhowe.com

function setSplittingChars() {
    let splittingCharsBox = document.getElementById("splittingChars").value;
    console.log(splittingCharsBox);
    let splittingCharsArray = splittingCharsBox.split(", ");
    console.log(splittingCharsArray);
    for (let i=0; i<=splittingCharsArray.length; i++) {

    }
}

function wordCount() {
    let splittingChars = [' ', '/', '\\', '&', '\n', '\t'];
    let textBoxInput = document.getElementById("wordsToBeCounted").value;
    let words = 0;
    // For each character in the string, queries if it's a word splitting charater
    for (let i = 0; i<=textBoxInput.length; i++) {
        for (let j = 0; j<=splittingChars.length; j++) {
            // Repeated spaces don't count as words. Otherwise, increment amount of words by one.
            if (textBoxInput[i-1] == splittingChars[j]) {break;} 
            else if (textBoxInput[i] == splittingChars[j]) {words++;}
        }
    }
    // Includes the last word
    for (let j = 0; j<=splittingChars.length; j++) {
        if (textBoxInput[-1] == splittingChars[j]) {
            words++;
        }
    }
    return words;
}

function main() {
    // setSplittingChars();
    let words = wordCount();
    document.getElementById("wordsCounted").style.color = "mediumseagreen";
    // If there's no word limit, show the amount of words.
    if (document.getElementById("wordLimit").value == false) {
        document.getElementById("wordsCounted").textContent = "Words counted: "+(words-1);
    } else { // If there is a word limit, show the words remaining or over the limit.
        if ((document.getElementById("wordLimit").value-(words-1) < 0)) {
            document.getElementById("wordsCounted").style.color = "#b00020";
        }
        document.getElementById("wordsCounted").textContent = ("Words to go: "+(document.getElementById("wordLimit").value-(words-1)));
    }
}

document.getElementById("wordsToBeCounted").addEventListener("input", main);
document.getElementById("wordLimit").addEventListener("input", main);