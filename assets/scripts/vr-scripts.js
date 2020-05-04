﻿$(document).ready(function () {
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
                if (i == 1) {
                    carouselImgs[i].setAttribute("class", "crsl-img active main col-6");
                }
                else if (i == 0 || i == 2) {
                    carouselImgs[i].setAttribute("class", "crsl-img active bg-to-main col-3");
                }
            }
            else {
                carouselImgs[i].setAttribute("class", "crsl-img hidden");
            }
        }

        var carouselNext = $('.image-carousel').parent().parent().find('.fa-arrow-right');
        carouselNext.click(function(){
            // get id of main active item
            var activeImgId = $('.image-carousel').find('.crsl-img.active.main').attr('id');
            $('.image-carousel').find('.crsl-img#' + activeImgId).prev().attr("class", "crsl-img hidden");
            $('.image-carousel').find('.crsl-img#' + activeImgId).next().attr("class", "crsl-img active main col-6");
            $('.image-carousel').find('.crsl-img#' + activeImgId).next().next().attr("class", "crsl-img active bg-to-main col-3");
            $('.image-carousel').find('.crsl-img#' + activeImgId).attr("class", "crsl-img active bg-to-main col-3");

            //var oldBgImg = activeImgId - 1;
            //$('.image-carousel').find('.crsl-img.active.bg-to-main#' + oldBgImg).setAttribute("class", "crsl-img hidden");
            // need solution for restart

            // + 1 to get next main active item
            //var nextImg = activeImgId + 1;
            //$('.image-carousel').find('.crsl-img#' + nextImg).setAttribute("class", "crsl-img active main col-6");
            // need solution for restart

            // + 1 to get next bg-to-main active item
            //var nextBgImg = nextImg + 1;
            //$('.image-carousel').find('.crsl-img#' + nextBgImg).setAttribute("class", "crsl-img active bg-to-main col-3");
            // need solution for restart
        });
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