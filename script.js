// Mobile navigation toggle
  (function(){
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('mobileNav');
    if(!toggle || !nav) return;

    function closeMenu(){
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function openMenu(){
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    toggle.addEventListener('click', function(){
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true'){
        closeMenu();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function(){
      if(window.innerWidth > 920) closeMenu();
    });
  })();

  (function(){
    var els = document.querySelectorAll('.reveal-up, .reveal-scale');
    if(!els.length) return;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced){
      els.forEach(function(el){ el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el){ observer.observe(el); });
  })();

  (function(){
    var header = document.getElementById('siteHeader');
    if(!header) return;
    function update(){
      header.style.boxShadow = window.scrollY > 12 ? '0 8px 24px rgba(27,23,20,0.06)' : 'none';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  })();


  (function(){
    var el = document.getElementById('year');
    if(el) el.textContent = new Date().getFullYear();
  })();