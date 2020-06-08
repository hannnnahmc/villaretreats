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
    var carouselText = document.querySelector('.text-carousel');
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

        var carouselTexts = carouselText.querySelectorAll('.crsl-text');
        var idTextArr = [];
        for (var i = 0; i < carouselTexts.length; i++) {
            var id = i + 1;
            carouselTexts[i].setAttribute("id", id);
            idTextArr.push(id);

            if (i == 1) {
                carouselTexts[i].setAttribute("class", "crsl-text active col-6");
            }
            else if (i == 0 || i == 2) {
                carouselTexts[i].setAttribute("class", "crsl-text visibility-hidden col-3");
            }
            else {
                carouselTexts[i].setAttribute("class", "crsl-text hidden");
            }
        }

        var carouselNext = $('.image-carousel').parent().parent().find('.fa-arrow-right');
        carouselNext.click(function(){
            // get id of main active item
            var activeImgId = $('.image-carousel').find('.crsl-img.active.main').attr('id');
            $('.image-carousel').find('.crsl-img#' + activeImgId).prev().attr("class", "crsl-img hidden");
            $('.image-carousel').find('.crsl-img#' + activeImgId).attr("class", "crsl-img bg-to-main col-3");
            $('.text-carousel').find('.crsl-text#' + activeImgId).prev().attr("class", "crsl-text hidden");
            $('.text-carousel').find('.crsl-text#' + activeImgId).attr('class', 'crsl-text visibility-hidden col-3');
            if ($('.image-carousel').find('.crsl-img#' + activeImgId).next().length != 0) {
                $('.image-carousel').find('.crsl-img#' + activeImgId).next().attr("class", "crsl-img active main col-6");
                $('.text-carousel').find('.crsl-text#' + activeImgId).next().attr('class', 'crsl-text active col-6');
            }
            else {
                $('.image-carousel').find('.crsl-img').prevAll().last().attr("class", "crsl-img active main col-6");
                $('.text-carousel').find('.crsl-text').prevAll().last().attr('class', 'crsl-text active col-6');
            }

            if ($('.image-carousel').find('.crsl-img#' + activeImgId).next().next().length != 0) {
                $('.image-carousel').find('.crsl-img#' + activeImgId).next().next().attr("class", "crsl-img bg-to-main col-3");
                $('.text-carousel').find('.crsl-text#' + activeImgId).next().next().attr('class', 'crsl-text visibility-hidden col-3');
            }
            else {
                $('.image-carousel').find('.crsl-img').prevAll().last().attr("class", "crsl-img bg-to-main col-3");
                $('.image-carousel').find('.crsl-img').prevAll().last().appendTo('.image-carousel');
                $('.text-carousel').find('.crsl-text').prevAll().last().attr('class', 'crsl-text visibility-hidden col-3');
                $('.text-carousel').find('.crsl-text').prevAll().last().appendTo('.text-carousel');
            }
            
        });

        var carouselPrev = $('.image-carousel').parent().parent().find('.fa-arrow-left');
        carouselPrev.click(function(){
            // get id of main active item
            var activeImgId = $('.image-carousel').find('.crsl-img.active.main').attr('id');
            $('.image-carousel').find('.crsl-img#' + activeImgId).next().attr("class", "crsl-img hidden");
            $('.image-carousel').find('.crsl-img#' + activeImgId).attr("class", "crsl-img active bg-to-main col-3");
            $('.text-carousel').find('.crsl-text#' + activeImgId).next().attr("class", "crsl-text hidden");
            $('.text-carousel').find('.crsl-text#' + activeImgId).attr('class', 'crsl-text visibility-hidden col-3');
            if ($('.image-carousel').find('.crsl-img#' + activeImgId).prev().length != 0) {
                $('.image-carousel').find('.crsl-img#' + activeImgId).prev().attr("class", "crsl-img active main col-6");
                $('.text-carousel').find('.crsl-text#' + activeImgId).prev().attr('class', 'crsl-text active col-6');
            }
            else {
                $('.image-carousel').find('.crsl-img').nextAll().last().attr("class", "crsl-img active main col-6");
                $('.text-carousel').find('.crsl-text').nextAll().last().attr('class', 'crsl-text active col-6');
            }

            if ($('.image-carousel').find('.crsl-img#' + activeImgId).prev().prev().length != 0) {
                $('.image-carousel').find('.crsl-img#' + activeImgId).prev().prev().attr("class", "crsl-img active bg-to-main col-3");
                $('.text-carousel').find('.crsl-text#' + activeImgId).prev().prev().attr('class', 'crsl-text visibility-hidden col-3');
            }
            else {
                $('.image-carousel').find('.crsl-img').nextAll().last().attr("class", "crsl-img active bg-to-main col-3");
                $('.image-carousel').find('.crsl-img').nextAll().last().prependTo('.image-carousel');
                $('.text-carousel').find('.crsl-text').nextAll().last().attr('class', 'crsl-text visibility-hidden col-3');
                $('.text-carousel').find('.crsl-text').nextAll().last().prependTo('.text-carousel');
            }
        });
    }

    var galleryCarousel = $('.image-gallery');
    if (galleryCarousel != null) {
        var galleryItems = galleryCarousel.find('div > img');
        for (var i = 0; i < galleryItems.length; i++) {
            var id = i + 1;
            galleryItems[i].setAttribute("id", id);
        }

        var fullScreenImgs = $('.full-screen-gallery').find('img');
        for (var h = 0; h < fullScreenImgs.length; h++) {
            var imageId = h + 1;
            fullScreenImgs[h].setAttribute("id", imageId);
        }
    }

    $('.full-screen-gallery').hide();

    var fullScreenGallery = $('.full-screen-gallery .gallery-images');
    
    var fullScreenPrev = $('.full-screen-gallery i.fa-arrow-left');
    fullScreenPrev.click(function() {
        var imgFullScreenId = fullScreenGallery.find('img.active').attr('id');
        fullScreenGallery.find('img#' + imgFullScreenId).removeClass('active');

        if (fullScreenGallery.find('img#' + imgFullScreenId).prev().length != 0) {
            fullScreenGallery.find('img#' + imgFullScreenId).prev().attr('class', 'active');
        }
        else {
            fullScreenGallery.find('img').nextAll().last().attr('class', 'active');
            fullScreenGallery.find('img').nextAll().last().prependTo('.full-screen-gallery .gallery-images');
        }
    });

    var fullScreenNext = $('.full-screen-gallery i.fa-arrow-right');
    fullScreenNext.click(function() {
        var imgFullScreenId = fullScreenGallery.find('img.active').attr('id');
        fullScreenGallery.find('img#' + imgFullScreenId).removeClass('active');

        if (fullScreenGallery.find('img#' + imgFullScreenId).next().length != 0) {
            fullScreenGallery.find('img#' + imgFullScreenId).next().attr('class', 'active');
        }
        else {
            fullScreenGallery.find('img').prevAll().last().attr('class', 'active');
            fullScreenGallery.find('img').prevAll().last().appendTo('.full-screen-gallery .gallery-images');
        }
    });
});

function enlargeImage(imgClick) {
    var currId = imgClick.parent().parent().prev().attr('id');
    console.log(currId);

    var allItems = $('.full-screen-gallery').find('img');
    for (var img = 0; img < allItems.length; img++) {
        if (allItems[img].getAttribute("id") == currId) {
            allItems[img].setAttribute("class", "active");
        }
    }

    $('.full-screen-gallery').show();
}

function closeModal() {
    $('.full-screen-gallery').hide();
    $('.full-screen-gallery').find('img.active').removeClass('active');
}