$('.nav-pills a').click(function(event) {
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
});