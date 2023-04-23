const navLinks = document.querySelectorAll('.nav-links ul li a, .nav-links ul li i');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');
  });
});