const hamburger = document.getElementById('hamburger-icon');
const cross = document.getElementById('cross-icon');
const mobileNav = document.getElementById('mobile-nav');
const dropdownBtns = document.querySelectorAll('#dropdown-btn');
const dropdownMenus = document.querySelectorAll('#dropdown-menu');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-x-full');
    hamburger.classList.add('hidden');
    cross.classList.remove('hidden');
})
cross.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-x-full');
    cross.classList.add('hidden');
    hamburger.classList.remove('hidden');
})

dropdownBtns.forEach(dropdownBtn => {
    dropdownBtn.addEventListener('click', () => {
        dropdownMenus.forEach(dropdownMenu => {
            dropdownMenu.classList.toggle('hidden');
            dropdownMenu.classList.toggle('flex');
        })
    })
})