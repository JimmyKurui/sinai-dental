document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        function onScroll() {
            if (window.scrollY >= window.innerHeight) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    
        window.addEventListener('scroll', onScroll);
    });