function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('logo-id').style.width = '70px';
    } else {
        document.getElementById('logo-id').style.width = '130px';
    }
}

window.onscroll = function () { scrollFunction() };
