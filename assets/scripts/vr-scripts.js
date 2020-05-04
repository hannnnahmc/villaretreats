$(document).ready(function () {
    var isMobile = "";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (isMobile !== true) {
        $('ul.navbar-nav li.dropdown').hover(function () {
            $(this).addClass('open');
            $(this).find('.dropdown-menu').addClass('show');
        }, function () {
            $(this).removeClass('open');
            $(this).find('.dropdown-menu').removeClass('show');
        });
    }
    else {
        $('ul.navbar-nav > li.dropdown').click(function (e) {
            if (e.delegateTarget.className === "nav-item dropdown mega-dropdown") {
                e.preventDefault();
                $(this).toggleClass('show');
                $(this).find('.nav-link').addClass('dropdown-toggle');
                $(this).find('.nav-link').attr('data-toggle', 'dropdown');
            }

        });
    }

    var currWidth = $(window).width();
    if (currWidth > 767 && currWidth < 1025) {
        $('body').addClass('ipad');
    }

    var carouselImg = document.querySelector('.image-carousel');
    if (carouselImg !== null) {
        var carouselImgs = carouselImg.querySelectorAll('.crsl-img');
        var idArr = [];
        for (var i = 0; i < carouselImgs.length; i++) {
            var id = i + 1;
            carouselImgs[i].setAttribute("id", id);
            idArr.push(id);

            if (i <= 2) {
                carouselImgs[i].setAttribute("class", "active");

                if (id == 0) {
                    carouselImgs[i].setAttribute("class", "main").setAttribute("class", "col-6");
                }
                else if (id == 1 || id == 2) {
                    carouselImgs[i].setAttribute("class", "bg-to-main").setAttribute("class", "col-3");
                }
            }
            else {
                carouselImgs[i].setAttribute("class", "hidden");
            }
        }
    }
});

function imageModal(src) {
    $('body').find('.image').attr('src', src);
}

function goToContent() {
    var top = document.getElementById('targetContent').offsetTop;
    top = top - 65;
    window.scrollTo(0, top);
}