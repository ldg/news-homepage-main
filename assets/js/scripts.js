// Mobile Menu toggle
const modalBg = document.getElementById('modal-bkg');
const mobileMenu = document.getElementById('mobile-menu');
const mobileIcon = document.getElementById('mobile-icon');

function openMenu(){
    mobileIcon.classList.toggle('close');
    modalBg.classList.toggle('open');
    mobileMenu.classList.toggle('open');
}

mobileIcon.addEventListener('click', openMenu);
