// Play scary beep sound repeatedly
function playBeep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  setTimeout(() => oscillator.stop(), 200);
}

// Keep repeating every 1 second
setInterval(playBeep, 1000);


