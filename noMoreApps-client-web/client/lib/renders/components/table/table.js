processTable = function(container,componentInfo){
	var options = componentInfo.options;
	var mainElement = $("<table></table>").addClass("component-table table");

	$(mainElement).uniqueId();

	if(options){
		var matrix = options.matrix;
		var hasHeader = options.hasHeader;
		var margin = options.margin;
		if(matrix){

			var subContainer = null
			
			var headElement = $("<thead></thead>").addClass("component-table-head");
			$(headElement).uniqueId();
			$(mainElement).append(headElement);	

			var bodyElement = $("<tbody></tbody>").addClass("component-table-body");
			$(bodyElement).uniqueId();
			$(mainElement).append(bodyElement);

			matrix.forEach(function(row,indexRow){
				if(indexRow==0 && hasHeader){
					subContainer = headElement;
				}else{
					subContainer = bodyElement;
				}

				var trElement = $("<tr></tr>").addClass("component-table-tr");
				$(trElement).uniqueId();
				$(subContainer).append(trElement);
				row.forEach(function(collumn,indexCollumn){
					if(indexRow==0 && hasHeader){
						var thElement = $("<th></th>").addClass("component-table-th");
						$(thElement).uniqueId();
						$(trElement).append(thElement);
						$(thElement).html(collumn);
					}else{
						var tdElement = $("<td></td>").addClass("component-table-td");
						$(tdElement).uniqueId();
						$(trElement).append(tdElement);
						$(tdElement).html(collumn);
					}
				});
			});

			if(margin){
				$(mainElement).css("margin",margin);
			}
		}

	}
	
	processComponents(container,componentInfo.components);
	return mainElement;
}