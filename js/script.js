$(function () {

    $(".navbar a, footer a").click(function (e) {
        e.preventDefault();
        var hash = this.hash;

        $('body,html').animate({ scrollTop: $(hash).offset().top }, 900, function () {
            window.location.hash = hash;
        })
    })
})