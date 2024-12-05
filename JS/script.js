

/*-----------------------------Codigo de carrusel aqui-----------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const diapositivas = document.querySelectorAll('.diapositiva');
    let diapositivaActual = 0;

    function siguienteDiapositiva() {
        diapositivaActual = (diapositivaActual + 1) % diapositivas.length;
        actualizarCarrusel();
    }

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(-${diapositivaActual * 33.33}%)`;
    }

    setInterval(siguienteDiapositiva, 8000); // Cambia de imagen cada 8 segundos
});

/*-----------------------------Termina aqui-----------------------------*/

/*----------------------------Codigo de menu responsive aqui-----------------------------------*/

    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.getElementById('menu-icon');
        const nav = document.getElementById('main-nav');

        menuIcon.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });

        const menuItems = document.querySelectorAll('.menu > li > a');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    const submenu = this.nextElementSibling;
                    if (submenu && submenu.classList.contains('submenu')) {
                        e.preventDefault();
                        submenu.classList.toggle('active');
                    }
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menuIcon.classList.remove('active');
                nav.classList.remove('active');
                document.querySelectorAll('.submenu').forEach(submenu => {
                    submenu.classList.remove('active');
                });
            }
        });
    });

/*----------------------------Termina aqui codigo de menu responsive--------------------------*/
