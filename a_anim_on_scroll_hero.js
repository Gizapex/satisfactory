window.addEventListener("scroll", function() {
    var element = document.querySelector(".hero");
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var elementHeight = element.offsetHeight;
    var borderHeight = windowHeight - elementHeight;
    var offset = (scrollPosition / borderHeight) * 100;
    
    if (offset > 50) {
        offset = 50;
    }
    
    var transformValue = "translate(" + (50 - offset) + "%, " + (50 - offset) + "%)";
    element.style.transform = transformValue;
});
