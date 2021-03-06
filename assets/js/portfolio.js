// When site is first loaded, go to top of site
$('html, body').animate({
    scrollTop: $("#cover").offset().top
  }, 800, function(){
    window.location.hash = $("#cover");
  });

 // In 'My Work' section, allow button clicks to show active state, and also filter categories 
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

// On the Navbar, allow button clicks to show active state
$("#mainNavbar a").on("click", function(e) {
    var curLink = $(".active");
    console.log("curLink = " + curLink.text());
    console.log("this = " + $(this).text());
    curLink.removeClass("active");
    $(this).addClass("active");
});

