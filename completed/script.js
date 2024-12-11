const button = document.getElementById("magic-button");
const surprise = document.getElementById("surprise");
const audio = new Audio("../public/audio/retro-music.mp3");

button.addEventListener("click", () => {
  audio.play();
  if (surprise.style.display === "none") {
    surprise.style.display = "block";
    button.textContent = "Hide Surprise";
  } else {
    surprise.style.display = "none";
    button.textContent = "Click Me!";
  }
});
