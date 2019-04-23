function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
<<<<<<< HEAD
        document.getElementById('logo-id').style.width = '90px';
=======
        document.getElementById('logo-id').style.width = '70px';
>>>>>>> d1c0a07d2d1774497a22e77b89c15316aaf70528
    } else {
        document.getElementById('logo-id').style.width = '130px';
    }
}

window.onscroll = function () { scrollFunction() };
