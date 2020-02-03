$(document).ready(function () {

    $('body').on('keyup', function (e) {
        if (e.which === 9 && e.target.firstElementChild.innerText === "About Us") {
            $('body').find('.skip-to-content').show();
        }
        else if (e.which === 9 && e.target.className === "button banner-button") {
            $('body').find('.skip-to-content').hide();
        }
    });

    var isMobile = "";
    var isTablet = "";

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
                //$(this).find('.dropdown-menu').toggleClass('show');
            }

        });
    }

    var currWidth = $(window).width();
    if (currWidth > 767 && currWidth < 1025) {
        $('body').addClass('ipad');
    }

    $('.tick-list').parent().css('list-style', 'none');

    if ($('.carousel--wrapper').hasClass('owl-carousel')) {
        carousel();
    }

    $('.team-carousel').owlCarousel({
        loop: true,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    //buttons
    $('.overview').ready(function () {
        var overview = document.querySelector('.overview');
        if (overview !== null) {
            var overItems = overview.querySelectorAll('h3, p, div');
            var limit = 0;
            for (var i = 0; i < overItems.length; i++) {
                limit = limit + overItems[i].scrollHeight;
                if (limit < 500) { overItems[i].setAttribute("style", "display:block"); } else { overItems[i].setAttribute("style", "display:none"); overItems[i].classList.add("hiddenOver"); }
            }

            for (var j = 0; j < overItems.length; j++) {
                var isHidden = overItems[j].getAttribute('style');
                if (isHidden === "display:none") { $('.view-overview').show(); } else { $('.view-overview').hide(); }
            }

            $('.view-overview').click(function () {
                var count = false;
                for (var k = 0; k < overItems.length; k++) {
                    if (overItems[k].className === 'hiddenOver') { if (overItems[k].getAttribute('style') !== '') { count = true; } else { count = false; } }
                }
                if (count) {
                    $('.hiddenOver').show();
                    $('.view-overview').text('View Less').append('<i class="far fa-angle-up">');
                } else {
                    $('.hiddenOver').hide();
                    $('.view-overview').text('View More').append('<i class="far fa-angle-down">');
                }
            });
        }
    });

    $('.hotels-wrap').ready(function () {
        var hotels = document.querySelector('.hotels-wrap');
        if (hotels !== null) {
            var hotelItems = hotels.querySelectorAll('.accommodation');
            var limit = 0;
            for (var i = 0; i < hotelItems.length; i++) {
                limit = limit + hotelItems[i].scrollHeight;
                if (limit < 500) { hotelItems[i].setAttribute("style", "display:block"); } else { hotelItems[i].setAttribute("style", "display:none"); hotelItems[i].setAttribute("class", "hiddenHotel"); }
            }

            for (var j = 0; j < hotelItems.length; j++) {
                var isHidden = hotelItems[j].getAttribute('style');
                if (isHidden === "display: none;" || isHidden === "display:none") { $('.view-accommodation').show(); } else { $('.view-accommodation').hide(); }
            }

            $('.view-accommodation').click(function () {
                var count = false;
                for (var k = 0; k < hotelItems.length; k++) {
                    console.log("classname =" + hotelItems[k].className);
                    if (hotelItems[k].className === 'hiddenHotel') { if (hotelItems[k].getAttribute('style') !== '') { count = true; } else { count = false; } }
                }

                if (count) {
                    $('.hiddenHotel').show();
                    $('.hiddenHotel').addClass("col-12 tile accommodation");
                    $('.view-accommodation').text('View Less').append('<i class="far fa-angle-up">');
                } else {
                    $('.hiddenHotel').hide();
                    $('.view-accommodation').text('View More').append('<i class="far fa-angle-down">');
                }
            });
        }
    });

    $('.itin-wrap').ready(function () {
        var itinerary = document.querySelector('.itin-wrap');
        if (itinerary !== null) {
            var itinItems = itinerary.querySelectorAll('.itinerary-card');
            var limit = 0;
            for (var i = 0; i < itinItems.length; i++) {
                limit = limit + itinItems[i].scrollHeight;
                if (limit < 500) { itinItems[i].setAttribute("style", "display:block"); } else { itinItems[i].setAttribute("style", "display:none"); itinItems[i].setAttribute("class", "hiddenItin"); }
            }

            for (var j = 0; j < itinItems.length; j++) {
                var isHidden = itinItems[j].getAttribute('style');
                if (isHidden === "display: none;" || isHidden === "display:none") { $('.view-itinerary').show(); } else { $('.view-itinerary').hide(); }
            }

            $('.view-itinerary').click(function () {
                var count = false;
                for (var k = 0; k < itinItems.length; k++) {
                    if (itinItems[k].className === 'hiddenItin') { if (itinItems[k].getAttribute('style') !== '') { count = true; } else { count = false; } }
                }
                if (count) {
                    $('.hiddenItin').show();
                    $('.view-itinerary').text('View Less').append('<i class="far fa-angle-up">');
                } else {
                    $('.hiddenItin').hide();
                    $('.view-itinerary').text('View More').append('<i class="far fa-angle-down">');
                }
            });
        }
    });

    $('.ticket-wrap').ready(function () {
        var tickets = document.querySelector('.ticket-wrap');
        if (tickets !== null) {
            var ticketItems = tickets.querySelectorAll('.ticket-card');
            var limit = 0;
            for (var i = 0; i < ticketItems.length; i++) {
                limit = limit + ticketItems[i].scrollHeight;
                if (limit < 500) { ticketItems[i].setAttribute("style", "display:block"); } else { ticketItems[i].setAttribute("style", "display:none"); ticketItems[i].setAttribute("class", "hiddenTicket"); }
            }

            for (var j = 0; j < ticketItems.length; j++) {
                var isHidden = ticketItems[j].getAttribute('style');
                if (isHidden === "display: none;" || isHidden === "display:none") { $('.view-tickets').show(); } else { $('.view-tickets').hide(); }
            }

            $('.view-tickets').click(function () {
                var count = false;
                for (var k = 0; k < ticketItems.length; k++) {
                    if (ticketItems[k].className === 'hiddenTicket') { if (ticketItems[k].getAttribute('style') !== '') { count = true; } else { count = false; } }
                }
                if (count) {
                    $('.hiddenTicket').show();
                    $('.view-tickets').text('View Less').append('<i class="far fa-angle-up">');
                } else {
                    $('.hiddenTicket').hide();
                    $('.view-tickets').text('View More').append('<i class="far fa-angle-down">');
                }
            });
        }
    });

    //open brand popup
    $('#whoWeAre').modal();

});

function AcknowledgePopup() {
    $.ajax({
        url: "/GeneralPage/AcknowledgePopup",
        type: "POST",
        dataType: "json",
        traditional: true,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#whoWeAre').modal('hide');
        },
        error: function () {
            $('#whoWeAre').modal('hide');
        }
    });
}

// Timeline Scroll
$(function () {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });
});

function imageModal(src) {
    $('body').find('.image').attr('src', src);
}

function goToContent() {
    var top = document.getElementById('targetContent').offsetTop;
    top = top - 65;
    window.scrollTo(0, top);
}

function carousel() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}