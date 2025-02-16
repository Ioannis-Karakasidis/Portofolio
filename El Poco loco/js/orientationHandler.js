/**
 * Checks if the window size has changed and calls the emulator adjustment logic.
 */
function checkorientation() {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;
  if (currentWidth && currentHeight) {
    checkemulator(currentWidth, currentHeight);
    lastWidth = currentWidth;
    lastHeight = currentHeight;
  } else {
    checkemulator(currentWidth, currentHeight);
  }
}

/**
 * Handles layout adjustments based on emulator mode and orientation.
 * @param {number} currentWidth - The current window width.
 * @param {number} currentHeight - The current window height.
 */
async function checkemulator(currentWidth, currentHeight) {
  if (isMobileDevice()) {
    if (currentWidth > currentHeight) {
      await landscapemode();
    } else {
      await portraitmode();
    }
  } else {
    await nonmobilemode();
  }
}

/**
 * Adjusts the layout for non-mobile mode.
 */
async function nonmobilemode() {
  mobilestart = false;
  document.querySelector(".mobilealign").style.justifyContent = "center";
  document.querySelector("body").style = "";
  document.querySelector(".box").style.height = "calc(100vh - 41px)";
  document.querySelector(".box h1").classList.remove("d-none");
  document.getElementById("impressum").classList.remove("d-none");
  document.querySelector(".Instructions").style.display = "none";
  document.getElementById("introimg").classList.remove("rotatepic");
  document.querySelector(".usefulllinks").style.justifyContent =
    "space-between";
  document.getElementById("help").classList.remove("d-none");
  document.getElementById("introimg").src =
    "img/9_intro_outro_screens/start/startscreen_2.png";
}

/**
 * Adjusts the layout for landscape mode.
 */
async function landscapemode() {
  if (
    document.querySelector(".Instructions") &&
    document.getElementById("content")
  ) {
    mobilestart = true;
    document.getElementById("content").style = "height: 100%;width: 85vw;";
    document.querySelector("body").style = "";
    document.querySelector("body").style.justifyContent = "flex-start";
    document.querySelector(".mobilealign").style.justifyContent = "unset";
    document.querySelector(".mobilealign").style.height = "inherit";
    document.querySelector(".usefulllinks").style.justifyContent = "center";
    document.getElementById("help").classList.add("d-none");
    document.querySelector("body").style.height = "100vh";
    adjustIntroLayoutForSecondPart();
  }
}

/**
 * Adjusts the layout and styles for the second part of the game intro.
 */
function adjustIntroLayoutForSecondPart() {
  const canvas = document.querySelector("canvas");
  canvas.style.width = "height: 59vh;";
  document.querySelector(".boxalign").style.height = "94%";
  document.querySelector(".box").style.height = "90%";
  document.querySelector(".box h1").classList.add("d-none");
  document.getElementById("impressum").classList.add("d-none");
  document.getElementById("introimg").src =
    "img/9_intro_outro_screens/start/startscreen_2.png";
  document.getElementById("introimg").classList.remove("rotatepic");
}

/**
 * Adjusts the layout for portrait mode.
 */
async function portraitmode() {
  mobilestart = false;
  document.querySelector(".box h1").style.display = "none";
  document.getElementById("content").style = "height: 97%";
  document.querySelector(".Instructions").style.display = "none";
  const calculatedHeight = (window.innerHeight / window.screen.height) * 100;
  document.querySelector("body").style =
    "height: 100vh;position: fixed;background: black;width: 100vw;margin: 0;";
  document.getElementById("impressum").classList.add("d-none");
  document.getElementById("introimg").src = "img/rotate.png";
  document.getElementById("introimg").classList.add("rotatepic");
}

/**
 * Adds an event listener to the window resize event to call the `checkorientation` function.
 * This function will be triggered whenever the window is resized, allowing for any
 * necessary adjustments based on the new window size or orientation.
 */
window.addEventListener("resize", checkorientation);
window.addEventListener("orientationchange", () => {
  setTimeout(checkorientation, 200); // Small delay for better accuracy
});

/**
 * Displays the game over screen.
 */
function gameover() {
  world.background_audio.pause();
  world.character.snooring_sound.pause();
  if(!mute) {
    gameover_audio.play();
  }
  document.getElementById("outroimg").src =
    "img/9_intro_outro_screens/game_over/game_over.png";
  document.querySelector(".outro").style.zIndex = "99";
  document.querySelector(".outro").style.position = "absolute";
  document.getElementById("outroimg").classList.remove("d-none");
  setTimeout(() => {
    document.querySelector(".outro").classList.remove("d-none");
    world.clearAllIntervals();
  }, 0);
  document.querySelector(".gameovercontainer").classList.remove("d-none");
}
