$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
