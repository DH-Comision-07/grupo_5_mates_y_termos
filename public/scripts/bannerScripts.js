const images = ['/images/slides/slide1.jpg', '/images/slides/slide2.jpg', '/images/slides/slide3.jpg']; // Agrega aquí el nombre de tus imágenes
            let currentIndex = 0;
        
            setInterval(() => {
              currentIndex = (currentIndex + 1) % images.length;
              document.getElementById('slider').src = images[currentIndex];
            }, 1500); // Cambiar de imagen cada 1,5 segundos