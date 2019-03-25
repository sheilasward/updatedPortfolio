

$(".btn-work").on("click", function() {
    var current = $(".active");
    console.log("current: " + current);
    current.removeClass("active");
    $(this).addClass("active");
    var categoryToFilter = $(this).attr("data-filter");
    console.log("category to filter: " + categoryToFilter);
    $(".reference-item").each(function() {
        if (categoryToFilter === "all") {
            $(this).show();
        } else {
            var categories = $(this).data("category").split(" ");
            $(this).hide();
            for (var i=0; i<categories.length; i++) {
                console.log("category: " + categories[i]);
                if (categories[i] === categoryToFilter) {
                    $(this).show();
                }
            }
        }
    });
});

$(".nav-link").on("click", function() {
    var curLink = $(".active");
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




