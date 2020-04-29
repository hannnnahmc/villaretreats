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
});

function imageModal(src) {
    $('body').find('.image').attr('src', src);
}

function goToContent() {
    var top = document.getElementById('targetContent').offsetTop;
    top = top - 65;
    window.scrollTo(0, top);
}