const burgerBtn = document.getElementById('burger') as HTMLElement;
const navLinks = document.querySelector('.links') as HTMLElement;

burgerBtn.addEventListener('click' ,() => {
    navLinks.classList.toggle('active')
});



