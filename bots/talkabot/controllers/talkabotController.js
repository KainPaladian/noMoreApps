exports.connect =function (req,res){
	var connectTemplate = JSON.parse(JSON.stringify(require('../templates/talkabot/response/connect').template));
	res.json(connectTemplate.template);
}