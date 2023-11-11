document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const datosPersonalesSection = document.getElementById('datos-personales');
  let datosPersonalesVisible = false;
  let currentSectionIndex = 0;

  function showCurrentSection() {
    sections.forEach((section, index) => {
      const opacity = index === currentSectionIndex ? 1 : 0;
      section.style.opacity = opacity;
    });
  }

  document.addEventListener('wheel', function(event) {
    const delta = Math.sign(event.deltaY);

    if (delta === 1 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (delta === -1 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    showCurrentSection();
  });

  showCurrentSection();
});
