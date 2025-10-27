function waitForVideo() {
  const video = document.querySelector("video");
  if (video) {
    addFullscreenButton(video);
  } else {
    setTimeout(waitForVideo, 1000);
  }
}

function addFullscreenButton(video) {
  if (document.getElementById("stoiximan-fullscreen-btn")) return;

  const btn = document.createElement("button");
  btn.id = "stoiximan-fullscreen-btn";
  btn.textContent = "⛶ Fullscreen";
  btn.style.position = "absolute";
  btn.style.bottom = "10px";
  btn.style.right = "10px";
  btn.style.padding = "6px 10px";
  btn.style.background = "rgba(0, 0, 0, 0.6)";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "9999";
  btn.style.fontSize = "14px";

  // When clicked — go fullscreen
  btn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  });

  // Try to insert inside the player container
  const container = video.parentElement || document.body;
  container.style.position = "relative";
  container.appendChild(btn);

  console.log("✅ Stoiximan fullscreen button added!");
}

waitForVideo();
