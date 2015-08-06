
$('#container').on('click', function(e) {
    $('#intro').toggleClass('hidden');
});

$('#intro').on('click', function(e) {

    // start the css transitions
    $('#logo').addClass('zoomed');

    // start a timer
    setTimeout(function() {
        $('#intro').css('opacity', '0');
        $('#container').css('opacity', '1');
    }, 1200);

    // if ($(this).hasClass('zoomed')) {
    // } else {
    //     $(this).addClass('zoomed');
    // }


});
