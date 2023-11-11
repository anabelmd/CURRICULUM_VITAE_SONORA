document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const datosPersonalesSection = document.getElementById('datos-personales');
  let datosPersonalesVisible = false;
  let currentSectionIndex = 0;

  let startY;

  function handleTouchStart(event) {
    startY = event.touches[0].clientY;
  }

  function handleTouchEnd() {
    // Detecta la dirección del desplazamiento y actualiza el índice de la sección actual
    const deltaY = event.changedTouches[0].clientY - startY;
    if (deltaY > 50 && currentSectionIndex > 0) {
      currentSectionIndex--;
    } else if (deltaY < -50 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }
  }
  function handleTouchMove(event) {
    const deltaY = event.touches[0].clientY - startY;

    if (deltaY > 50 && currentSectionIndex > 0) {
      currentSectionIndex--;
    } else if (deltaY < -50 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }

    showCurrentSection();
  }

  function showCurrentSection() {
    sections.forEach((section, index) => {
      const opacity = index === currentSectionIndex ? 1 : 0;
      section.style.opacity = opacity;
    });
  }

  document.addEventListener('wheel', function (event) {
    const delta = Math.sign(event.deltaY);

    if (delta === 1 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (delta === -1 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    showCurrentSection();
  });
  document.addEventListener('touchend', handleTouchEnd);
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);

  showCurrentSection();
});
