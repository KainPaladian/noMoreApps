processCarouselBoostrap = function(container,componentInfo){
    var components = componentInfo.components;
    var options = componentInfo.options;
    var mainElement = $("<div></div>").addClass("component-carousel carousel slide").data("ride","carousel");
    var carouselInnerElement = $("<div></div>").addClass("carousel-inner").attr("role","listbox");
    
    $(container).append(mainElement);
    $(mainElement).append(carouselInnerElement);
    
    $(mainElement).uniqueId();
    $(carouselInnerElement).uniqueId();
    
    if(options){
    }
    
    if(components){
        $(components).each(function(index,childrenComponentInfo){
            var itemElement = $("<div></div>").addClass("item");
            if(index==1){
               $(itemElement).addClass("active");
            }
            $(carouselInnerElement).append(itemElement);
            $(itemElement).uniqueId();
            processComponent(itemElement,childrenComponentInfo);
        });
    }

    $(mainElement).carousel()
}