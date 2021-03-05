$('.kazuma_pic').hover(function () {
    $(this).attr('src', $(this).attr('alt-data-src'));
}, function() {
    $(this).attr('src', $(this).attr('alt-orig-src'));
});