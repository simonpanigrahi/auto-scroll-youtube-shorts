// Function to scroll to the next short video
function scrollToNextShort() {
    let nextButton = document.querySelector('a[aria-label="Next"]');
    if (nextButton) {
        nextButton.click();
    } else {
        console.log("Next button not found.");
    }
}

// Function to check if the short video has ended
function checkIfVideoEnded() {
    let video = document.querySelector('video');
    if (video) {
        video.addEventListener('ended', scrollToNextShort);
    } else {
        console.log("Video element not found.");
    }
}

// Run the check when the script is loaded
checkIfVideoEnded();
