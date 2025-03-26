document.addEventListener('DOMContentLoaded', function() {
    // ===== Typewriter Effect =====
    const typewriter = document.querySelector('.content h3');
    if (typewriter) {
      const words = ["3D Model Creator", "Photographer", "Graphics Designer" ];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
  
      const type = () => {
        const currentWord = words[wordIndex];
        const currentText = currentWord.substring(0, charIndex);
        typewriter.textContent = currentText;
        typewriter.style.borderRight = '2px solid #136b66'; // Add cursor without CSS
  
        if (!isDeleting && charIndex < currentWord.length) {
          charIndex++;
          typingSpeed = 100;
        } else if (isDeleting && charIndex > 0) {
          charIndex--;
          typingSpeed = 50;
        } else {
          isDeleting = !isDeleting;
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          typingSpeed = isDeleting ? 1500 : 500;
        }
  
        setTimeout(type, typingSpeed);
      };
      setTimeout(type, 1000);
    }
  
    // ===== Smooth Scrolling with Active Link Highlight =====
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active nav link
        document.querySelectorAll('nav ul li a').forEach(link => {
          link.style.color = 'white';
          link.style.fontWeight = 'normal';
        });
        this.style.color = '#136b66';
        this.style.fontWeight = 'bold';
      });
    });
  
    // ===== Project Card Modal Popups =====
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function() {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.zIndex = '1000';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        
        // Create modal content
        const modal = document.createElement('div');
        modal.style.backgroundColor = '#191919';
        modal.style.padding = '30px';
        modal.style.borderRadius = '10px';
        modal.style.maxWidth = '500px';
        modal.style.position = 'relative';
        
        // Add close button
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#136b66';
        
        // Add project details
        const title = this.querySelector('h3').cloneNode(true);
        const description = this.querySelector('p').cloneNode(true);
        
        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(description);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Close functionality
        closeBtn.addEventListener('click', function() {
          document.body.removeChild(overlay);
        });
      });
    });
  
    // ===== Floating Particles Background =====
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(19, 107, 102, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        // Animation
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        const keyframes = `
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
        `;
        
        const styleEl = document.createElement('style');
        styleEl.innerHTML = keyframes;
        document.head.appendChild(styleEl);
        
        heroSection.appendChild(particle);
      }
    }
  
    // ===== Scroll Animations =====
    const animateElements = () => {
      document.querySelectorAll('.edu-card, .project-card, .skill-card, .card').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Initialize
    document.querySelectorAll('.edu-card, .project-card, .skill-card, .card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 0.6s ease';
    });
  
    window.addEventListener('scroll', animateElements);
    animateElements();
  
    // ===== Dynamic Copyright Year =====
    const yearElement = document.querySelector('.end');
    if (yearElement) {
      yearElement.textContent = yearElement.textContent.replace('2023', new Date().getFullYear());
    }
  
    // ===== Interactive Cursor =====
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(19, 107, 102, 0.3)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.2s, width 0.3s, height 0.3s';
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(19, 107, 102, 0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(19, 107, 102, 0.3)';
      });
    });
  });