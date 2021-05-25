document.addEventListener('DOMContentLoaded', function () {
    var navElems = document.querySelector('.sidenav');
    var carouselElems = document.querySelectorAll('.carousel');
    var FAQelems = document.querySelectorAll('.collapsible');
    var copyright = document.querySelector(".copyright");
    var year = new Date().getFullYear();
    var sidenav = M.Sidenav.init(navElems);
    
    M.Collapsible.init(FAQelems);
    M.Carousel.init(carouselElems);

    for (var child of navElems.children) {
        child.addEventListener("click", function(){
            sidenav.close();
        });
    }

    copyright.innerHTML = "Copyright " + year + " Monroe Chess Club";
});