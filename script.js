// source -> Chatgpt


    // Intersection Observer for Fade-In Animations
    
    const animateElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    animateElements.forEach(el => observer.observe(el));


    // Slider Code

    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    function showSlide(index) {
      currentSlide = (index + slideCount) % slideCount;
      slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
    }
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    setInterval(nextSlide, 3000);


    // Smooth Scroll Function

    function smoothScroll(targetId) {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }


    // Hamburger Menu Toggle

    function toggleMenu() {
      document.getElementById('nav-menu').classList.toggle('active');
    }
    function closeMenu() {
      if (window.innerWidth <= 768) {
        document.getElementById('nav-menu').classList.remove('active');
      }
    }


    // FAQ Toggle

    function toggleFaq(element) {
      const answer = element.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }


    //  Counter Animation for Wall of Impact
    
    function animateCounter(id, start, end, duration) {
      let current = start;
      const increment = (end - start) / (duration / 50);
      const obj = document.getElementById(id);
      const counter = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end;
          clearInterval(counter);
        }
        obj.textContent = Math.floor(current) + (id === 'stat1' ? '+' : '');
      }, 50);
    }
    window.onload = function() {
      animateCounter('stat1', 0, 90, 2000);
      animateCounter('stat2', 0, 15, 2000);
      animateCounter('stat3', 0, 20, 2000);
      animateCounter('stat4', 0, 30, 2000);
    }