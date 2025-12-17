const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        
        body.classList.toggle('water-mode');

        if (body.classList.contains('water-mode')) {
            themeIcon.classList.remove('fa-fire', 'text-red-600');
            themeIcon.classList.add('fa-water', 'text-blue-600');
        } else {
            themeIcon.classList.remove('fa-water', 'text-blue-600');
            themeIcon.classList.add('fa-fire', 'text-red-600');
        }
    });
}