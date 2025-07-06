const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open');
});

document.addEventListener('click', function(e) {
  if (mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)) {
        
    mobileMenu.classList.remove('open');
    menuBtn.classList.remove('open');
  }
});

