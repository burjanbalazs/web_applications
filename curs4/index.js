console.log("Hello World!");
console.log($);

$(document).ready(function() {
    //$("#lower-all").click(function(e) {});
    $("body").on("click", "#lower-all", function(e) {
        e.preventDefault();
        $(".item").css({ "text-transform": "lowercase", "text-decoration": "underline" });
        setTimeout(function() {
            $(".item").each(function(index) {
                $(this).text(index);
                $(this).css({
                    "text-decoration": "none"
                });
            });
        }, 1000);
    });

    $("body").on("click", "#animate-all", function(e) {
        e.preventDefault();
        var firstElement = $(".item").first()
        firstElement.hide(500).show(500);
        firstElement.next().slideUp(1000).slideDown(1000);
        firstElement.next().next().fadeOut(1500).fadeIn(1500);
        $(".item").last().animate({
            "margin-top": "100px",
        }, 3000);
        setTimeout(function(e) {
            $(".item").stop(true);
        }, 700)
    });
});