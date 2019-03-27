

$(".btn-work").on("click", function() {
    var current = $(".onActive");
    console.log("current: " + current.text());
    current.removeClass("onActive");
    $(this).addClass("onActive");
    var categoryToFilter = $(this).attr("data-filter");
    console.log("category to filter: " + categoryToFilter);
    $(".reference-item").each(function() {
        if (categoryToFilter === "all") {
            $(this).show();
        } else {
            var categories = $(this).data("category").split(" ");
            $(this).hide();
            for (var i=0; i<categories.length; i++) {
                if (categories[i] === categoryToFilter) {
                    console.log("category: " + categories[i]);
                    $(this).show();
                }
            }
        }
    });
});

$("#mainNavbar a").on("click", function() {
    var curLink = $(".active");
    console.log("curLink = " + curLink.text());
    console.log("this = " + $(this).text());
    curLink.removeClass("active");
    $(this).addClass("active");
});

/*
$('#filter button').click(function (e) {
    e.preventDefault();

    var categoryToFilter = $(this).attr('data-filter');

    $('.reference-item').each(function () {

        if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
            $(this).show();
        } else {
            $(this).hide();
        }
    });

});

btns.addEventListener("click", function() {
    var current = document.querySelector(".active");
    console.log(current);
    for (var i=0; i<btns.length; i++) {
        current.classList.remove("active");
        btns[i].classList.add("active");
        
    }
})



$(".btn-work").on("click", function() {
    console.log("You just clicked a button");
    var current = $(".active");
    console.log(current.textContent);
});
*/




