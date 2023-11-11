document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;
  let touchStartY;

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

  document.addEventListener('touchstart', function (event) {
    touchStartY = event.touches[0].clientY;
  });

  document.addEventListener('touchend', function (event) {
    const touchEndY = event.changedTouches[0].clientY;
    const delta = touchEndY - touchStartY;

    if (delta > 50 && currentSectionIndex > 0) {
      currentSectionIndex--;
    } else if (delta < -50 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }

    showCurrentSection();
  });

  showCurrentSection();
});
