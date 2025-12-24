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

document.addEventListener('mousemove', function(e) {
    
    let spark = document.createElement('div');
    spark.className = 'spark'; 

    spark.style.left = e.pageX + 'px';
    spark.style.top = e.pageY + 'px';

    if (Math.random() > 0.5) {
        spark.style.backgroundColor = '#dc2626'; 
        spark.style.boxShadow = '0 0 10px #dc2626'; 
    } else {
        spark.style.backgroundColor = '#2563eb'; 
        spark.style.boxShadow = '0 0 10px #2563eb'; 
    }

    document.body.appendChild(spark);

    setTimeout(function() {
        spark.remove();
    }, 800);
});