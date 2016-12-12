processModal = function(container,componentInfo){
	var options = componentInfo.options;
	var components = componentInfo.components;
	var mainElement = $("<div></div>").addClass("component-modal modal fade"); 
	var modalDialogElement = $("<div></div>").addClass("modal-dialog").attr("role","document"); 
	var modalContentElement = $("<div></div>").addClass("modal-content"); 
	var modalHeaderElement = $("<div></div>").addClass("modal-header"); 
	var btnCloseElement = $("<button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>").addClass("close");
	var modalTitleElement = $("<h4></h4>").addClass("modal-title"); 
	var modalBodyElement = $("<div></div>").addClass("modal-body"); 
	
	$(mainElement).append(modalDialogElement);
	$(modalDialogElement).append(modalContentElement);
	$(modalContentElement).append(modalHeaderElement);
	$(modalHeaderElement).append(btnCloseElement);
	$(modalHeaderElement).append(modalTitleElement);
	$(modalContentElement).append(modalBodyElement);

	$(mainElement).uniqueId();
	$(modalDialogElement).uniqueId();
	$(modalContentElement).uniqueId();
	$(modalHeaderElement).uniqueId();
	$(btnCloseElement).uniqueId();
	$(modalTitleElement).uniqueId();
	$(modalBodyElement).uniqueId();
	
	if(options){
		var title = options.title;
		if(title){
			$(modalTitleElement).html(title);
		}
	}

	 if(components){
        $(components).each(function(index,childrenComponentInfo){
            processComponent(modalBodyElement,childrenComponentInfo);
        });
    }
	return mainElement;
}

getModalBody = function(modalElement){
	return $(modalElement).find(".modal-body");
}