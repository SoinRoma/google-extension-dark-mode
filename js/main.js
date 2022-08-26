const button = document.querySelector(".button");
const circle = document.querySelector(".circle");
let buttonOn = false;
let tabId = '';

// Get current tab id
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    tabId = tabs[0].id;
});


button.addEventListener("click", () => {
    if (!buttonOn) {
        buttonOn = true;

        button.style.animation = "transformToBlue 1s ease-in-out 0s forwards";
        circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";
        chrome.scripting.executeScript ({
            target: {tabId: tabId, allFrames: true},
            files: ['js/turn_on.js']
        });
    } else {
        buttonOn = false;

        button.style.animation = "transformToYellow 1s ease-in-out 0s forwards";
        circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";
        chrome.scripting.executeScript ({
            target: {tabId: tabId, allFrames: true},
            files: ['js/turn_off.js']
        });
    }
})
