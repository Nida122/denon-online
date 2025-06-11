document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".play-icon");
  const audios = document.querySelectorAll(".hidden-audio");

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const audio = audios[i];

      if (audio.paused) {
        // 他のすべて停止
        audios.forEach(a => { a.pause(); a.currentTime = 0; });
        buttons.forEach(b => b.classList.remove("playing"));

        // 再生
        audio.play();
        btn.classList.add("playing");
      } else {
        // 停止
        audio.pause();
        btn.classList.remove("playing");
      }
    });
  });
});
