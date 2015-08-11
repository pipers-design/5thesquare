
$(document).ready(function() {

    setTimeout(function() {

        // start the css transitions
        $('#logo').addClass('zoomed');

        // start a timer
        setTimeout(function() {
            $('#intro').css('opacity', '0');
            $('#container').css('opacity', '1');

            setTimeout(function() {
                $('#intro').hide();
            }, 1000);

        }, 1500);

    }, 1500);

});
