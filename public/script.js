document.addEventListener('DOMContentLoaded', function() {
  const observerConfig = {
    root: null,
    threshold: 0.5 
  };

  function fadeInElement(element) {
    element.classList.add('animation-fade-in');
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fadeInElement(entry.target);
        observer.unobserve(entry.target); 
      }
    });
  }

  function setupObserver(targetSelector) {
    const targetElements = document.querySelectorAll(targetSelector);

    const observer = new IntersectionObserver((entries, observer) => {
      handleIntersection(entries, observer);
    }, observerConfig);

    targetElements.forEach(element => {
      observer.observe(element);
    });
  }

  setupObserver('.home-container');
  setupObserver('.projects-container');
  setupObserver('.about-container');
  setupObserver('.container-contact');
  setupObserver('.skills-container');
  const navbarLinks = document.querySelectorAll('.navbar-nav a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId); 

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      }
    });
  });

  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    carousel.addEventListener('slide.bs.carousel', function() {
      const observedElements = document.querySelectorAll('.animation-fade-in');
      observedElements.forEach(element => {
        observer.unobserve(element);
      });

      setupObserver('.home-container');
      setupObserver('.projects-container');
      setupObserver('.about-container');
      setupObserver('.container-contact');
      setupObserver('.skills-container');

    });
  });
});
