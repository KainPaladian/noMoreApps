processCarousel = function(container,componentInfo){
    var components = componentInfo.components;
    var options = componentInfo.options;
    var mainElement = $("<div></div>").addClass("component-carousel");
    
    $(container).append(mainElement);

    if(options){
    }
    
    if(components){
        $(components).each(function(index,childrenComponentInfo){
            var itemElement = $("<div></div>");
            if(index==1){
                $(itemElement).addClass("slick-active");
            }
            $(mainElement).append(itemElement);
            $(itemElement).uniqueId();
            processComponent(itemElement,childrenComponentInfo);
        });
    }

    $(mainElement).slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}