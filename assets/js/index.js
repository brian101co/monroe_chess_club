document.addEventListener('DOMContentLoaded', function () {
    var navElems = document.querySelectorAll('.sidenav');
    var carouselElems = document.querySelectorAll('.carousel');
    var FAQelems = document.querySelectorAll('.collapsible');
    var copyright = document.querySelector(".copyright");
    var year = new Date().getFullYear();

    M.Collapsible.init(FAQelems);
    M.Carousel.init(carouselElems);
    M.Sidenav.init(navElems);

    copyright.innerHTML = "Copyright " + year + " Monroe Chess Club";
});