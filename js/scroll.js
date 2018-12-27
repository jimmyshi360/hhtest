window.addEventListener("scroll", function (event) {
    var scrollPos = this.scrollY;
    var fadeElem = $('.overlay');
    
    fadeElem.each(function() {
        var $this=$(this), scrollThreshold=500, scrollSpeed=300;
        if(scrollPos>scrollThreshold)  {
            $(this).animate({'opacity':'0'},1200);
            var elements=document.getElementsByClassName("firefly");
            for (var i = 0; i < elements.length; i++) 
                elements[i].classList.remove("firefly");
        }

        
    
    })
});

function hover() {
    document.getElementById("main_image").setAttribute('src', 'img/background.png');
    //document.getElementById("registration_button").style.display = "hidden";
  }




