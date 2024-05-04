document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.container');
    var windowHeight = window.innerHeight;

    function checkAndShow() {
        containers.forEach(function(container) {
            var containerTop = container.getBoundingClientRect().top;
            if (containerTop < windowHeight) {
                container.classList.add('show');
            }
        });
    }

    checkAndShow();
    window.addEventListener('scroll', checkAndShow);
});

document.addEventListener("DOMContentLoaded", function() {
    
    function scrollToSection(id) {
        var section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    
    var navbarItems = document.querySelectorAll('nav ul li a');
    navbarItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});
