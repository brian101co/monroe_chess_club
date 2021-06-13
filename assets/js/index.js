document.addEventListener('DOMContentLoaded', function () {
    var navElems = document.querySelector('.sidenav');
    var carouselElems = document.querySelectorAll('.carousel');
    var FAQelems = document.querySelectorAll('.collapsible');
    var copyright = document.querySelector(".copyright");
    var backToTopBtn = document.querySelector(".back-to-top");
    var year = new Date().getFullYear();
    var sidenav = M.Sidenav.init(navElems);

    M.Carousel.init(carouselElems);
    M.Collapsible.init(FAQelems, {
      onOpenStart: function (listElem) {
        listElem.querySelector(".caret").classList.toggle("open");
      },
      onCloseStart: function (listElem) {
        listElem.querySelector(".caret").classList.toggle("open");
      },
    });

    for (var child of navElems.children) {
        child.addEventListener("click", function(){
            sidenav.close();
        });
    }

    document.addEventListener("scroll", function() {
        if ( window.pageYOffset > 400 ) {
            backToTopBtn.classList.remove("hide");
        } 
        
        if ( !backToTopBtn.classList.contains("hide") && window.pageYOffset < 400 ) {
            backToTopBtn.classList.add("hide");
        }
    });
    

    copyright.innerHTML = "Copyright " + year + " Monroe Chess Club";
});