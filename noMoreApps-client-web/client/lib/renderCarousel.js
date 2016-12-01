/*<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img src="..." alt="Third slide">
    </div>
  </div>
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>*/

var selectorRender = "#render";

renderCarousel = function(noMoreResponse,apiResponse) {

    var itemsJSON = apiResponse.body.items;

    $(selectorRender).append("<h2>"+apiResponse.title+"</h2>");

    $(selectorRender).append("<div id=\"carousel-example-generic\" class=\"carousel slide\">");

    renderCarouselIndicators(itemsJSON);
    renderCarouselInner(itemsJSON);

    $(selectorRender).append("<a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">");
    $(selectorRender).append("<span class=\"icon-prev\" aria-hidden=\"true\"></span>");
    $(selectorRender).append("<span class=\"sr-only\">Previous</span>");
    $(selectorRender).append("</a>");

    $(selectorRender).append("<a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">");
    $(selectorRender).append("<span class=\"icon-next\" aria-hidden=\"true\"></span>");
    $(selectorRender).append("<span class=\"sr-only\">Next</span>");
    $(selectorRender).append("</a>");

    $(selectorRender).append("</div>");

    $('.carousel').carousel();
}

renderCarouselIndicators = function(itemsJSON){

    $(selectorRender).append("<ol class=\"carousel-indicators\">");
    
    $(itemsJSON).each(function(index,item){
        var id = "carousel_slide_"+index;
        if(index>0){
          $(selectorRender).append("<li data-target=\"#carousel-example-generic\" data-slide-to=\""+index+"\" class=\"active\"></li>");
        }else{
          $(selectorRender).append("<li data-target=\"#carousel-example-generic\" data-slide-to=\""+index+"\"></li>");
        }
    });
    
    $(selectorRender).append("</ol>");
}

renderCarouselInner = function(itemsJSON){

    $(selectorRender).append("<div class=\"carousel-inner\" role=\"listbox\">");
    
    $(itemsJSON).each(function(index,item){
        var id = "carousel_item_"+index;
        $(selectorRender).append("<div class=\"carousel-item active\">");
        if(item.type=="IMAGE"){
          $(selectorRender).append("<img src="+item.body.url+">");
          $(selectorRender).append("<p>"+item.body.text+"</p>");
        }
        $(selectorRender).append("</div>");
    });
    
    $(selectorRender).append("</div>");
}