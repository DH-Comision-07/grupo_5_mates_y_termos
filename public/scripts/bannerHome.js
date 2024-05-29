const images = ['/images/slides/slide1.jpg', '/images/slides/slide2.jpg', '/images/slides/slide3.jpg'];
let currentIndex = 0;

// Banner Home inicio
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('slider0').src = images[currentIndex];
}, 1500); // Cambia de imagen cada 1,5 segundos

// Banner promociones
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('slider1').src = images[currentIndex];
}, 1500); // Cambia de imagen cada 1,5 segundos