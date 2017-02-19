processCarousel = function(container,componentInfo){
    var components = componentInfo.components;
    var options = componentInfo.options;
    var mainElement = $("<div></div>").addClass("component-carousel");

    $(mainElement).uniqueId();

    if(options){
    }
    
    if(components){
        $(components).each(function(index,childrenComponentInfo){
            var itemElement = $("<div></div>").addClass("component-carousel-item");
            $(mainElement).append(itemElement);
            $(itemElement).uniqueId();
            processComponent(itemElement,childrenComponentInfo);
        });
    }

  $(document).ready(function() {
    $(mainElement).slick({
      
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(window).trigger('resize');
    
  });
 
  return mainElement;
}