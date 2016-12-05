/*<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>*/

var selectorRender = "#render";

renderCarousel = function(noMoreResponse,apiResponse) {

    var itemsJSON = apiResponse.body.items;

    $(selectorRender).append("<h2>"+apiResponse.title+"</h2>");

    var idCarousel = "carousel-example-generic";
    var selectorCarousel = "#"+idCarousel;

    $(selectorRender).append("<div id=\""+idCarousel+"\"></div>");

    $(itemsJSON).each(function(index,itemJSON){
        var itemJSON = itemJSON.apiResponse;
        var body = itemJSON.body;
        console.log(itemJSON);
        if(itemJSON.type=="IMAGE"){
          $(selectorCarousel).append("<div><img src=\""+body.url+"\" class=\"img-responsive\"></img></div>");
        }
    });

    $(selectorCarousel).slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.slick-prev:after').html("<span class=\"glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span>");
}