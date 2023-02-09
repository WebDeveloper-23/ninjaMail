var burgerBtn = document.getElementById('burger');
var navLinks = document.querySelector('.links');
burgerBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});
