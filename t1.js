window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
  });
  