var div = $('#kepka');
        var start = $(div).offset().top;

        $.event.add(window, "scroll", function() {
            var p = $(window).scrollTop();
            $(div).css('position',((p)>start) ? 'fixed' : 'static');
            $(div).css('margin-left','-5px');
            $(div).css('top',((p)>start) ? '0px' : '');
        });