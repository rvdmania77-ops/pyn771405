// assets/js/hero-rotator.js
(() => {
  const img = document.getElementById("hero-bg");
  if (!img) return;

  const images = [
    "assets/img/hero-01.jpg",
    "assets/img/hero-02.jpg",
    "assets/img/hero-03.jpg",
  ];

  images.forEach((src) => {
    const pre = new Image();
    pre.src = src;
  });

  let i = 0;
  const intervalMs = 2000; // 2초
  const fadeMs = 450;

  setInterval(() => {
    i = (i + 1) % images.length;
    img.classList.add("is-fading");
    setTimeout(() => {
      img.src = images[i];
      img.classList.remove("is-fading");
    }, fadeMs);
  }, intervalMs);
})();