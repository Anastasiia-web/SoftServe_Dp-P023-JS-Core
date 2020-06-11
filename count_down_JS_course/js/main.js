document.addEventListener('DOMContentLoaded', () => {                     //https://github.com/PButcher/flipdown#flipdown
  let ZeroDaysFromNow = (new Date().getTime() / 1000) + (60050) + 1;      // 86400 sec/day

  let flipdown = new FlipDown(ZeroDaysFromNow)
    .start()
    .ifEnded(() => {
      alert('A new couse starts in ... days!?');
    });

  let interval = setInterval(() => {      // Toggle theme
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);
});
