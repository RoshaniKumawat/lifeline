/*------main-header----------*/
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50) {
                $(".main-header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".main-header").removeClass("active");
            }
        });
    });
    

