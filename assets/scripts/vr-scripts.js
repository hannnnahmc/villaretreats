$(document).ready(function () {
    var isMobile = "";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (isMobile == true) {
        $('.navbar-toggler').click(function() {
            if ($(this).hasClass('collapsed')) {
                $(this).removeClass('collapsed');
                $(this).find('i').removeClass('fa-bars').addClass('fa-times');
                $('#mobileNav').addClass('show');
            }
            else {
                $(this).addClass('collapsed');
                $(this).find('i').removeClass('fa-times').addClass('fa-bars');
                $('#mobileNav').removeClass('show');
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
                    carouselImgs[i].setAttribute("class", "crsl-img active main col-md-6 col-12");
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
                carouselTexts[i].setAttribute("class", "crsl-text active col-12 col-md-6");
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
                $('.image-carousel').find('.crsl-img#' + activeImgId).next().attr("class", "crsl-img active main col-12 col-md-6");
                $('.text-carousel').find('.crsl-text#' + activeImgId).next().attr('class', 'crsl-text active col-12 col-md-6');
            }
            else {
                $('.image-carousel').find('.crsl-img').prevAll().last().attr("class", "crsl-img active main col-12 col-md-6");
                $('.text-carousel').find('.crsl-text').prevAll().last().attr('class', 'crsl-text active col-12 col-md-6');
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
                $('.image-carousel').find('.crsl-img#' + activeImgId).prev().attr("class", "crsl-img active main col-12 col-md-6");
                $('.text-carousel').find('.crsl-text#' + activeImgId).prev().attr('class', 'crsl-text active col-12 col-md-6');
            }
            else {
                $('.image-carousel').find('.crsl-img').nextAll().last().attr("class", "crsl-img active main col-12 col-md-6");
                $('.text-carousel').find('.crsl-text').nextAll().last().attr('class', 'crsl-text active col-12 col-md-6');
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

    $('.photo-gallery-buttons i').hide();
    galleryPage();
});

function enlargeImage(imgClick) {
    var currId = imgClick.parent().parent().prev().attr('id');
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

function localAreaItem(currItem) {
    var itemId = currItem.attr('id');
    var allItems = $('.local-area-information');
    allItems.removeClass('active');
    for (var item = 0; item < allItems.length; item++) {
        if (allItems[item].getAttribute("id") == itemId) {
            allItems[item].setAttribute("class", "local-area-information active");
        }
    }
}

function galleryPage() {
    var pageWrap = $('.gallery-page');

    if (pageWrap.length >= 1) {
        $('.photo-gallery-buttons i').show();
        
        var activePage = $('.gallery-page').parent().find('.active');
        var activePageId = activePage.attr('data-page');
        if (activePageId == 1) {
            $('.photo-gallery-buttons i.fa-arrow-left').prop('disabled', 'true');
        }
    }
}

function galleryPageClick() {
    var pageWrap = $('.gallery-page');
    var activePage = $('.gallery-page').parent().find('.active');
    var nextPageId = "";
    var nextPageItem = "";

    activePage.removeClass('active');

    if (nextPageId < pageWrap.length) {
        $('.photo-gallery-buttons i.fa-arrow-right').prop('disabled', 'true');
    }

    for (var page = 0; page < pageWrap.length; page++) {
        if (page.attr('data-page') === nextPageId) {
            nextPageItem = page;
            nextPageItem.addClass('active');
        }
    }
}