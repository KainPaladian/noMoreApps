var replaceall = require("replaceall");

var horoscopoTemplate = require('../templates/talkabot/components/horoscopo');
var horoscopoService     = require('../services/horoscopoService');
var Horoscopos = require('../models/horoscopos');
var signos = 
[
{name:"Áries",id:"aries",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/teste.png"},
{name:"Touro",id:"touro",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/touro1.png"},
{name:"Gêmeos",id:"gemeos",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/gemeos.png"},
{name:"Câncer",id:"cancer",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/cancer3.png"},
{name:"Leão",id:"leao",img:"http://www.joaobidu.com.br/jb/content/uploads/2014/01/leao.png"},
{name:"Virgem",id:"virgem",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/virgem.png"},
{name:"Libra",id:"libra",img:"http://www.joaobidu.com.br/jb/content/uploads/2014/01/libra.png"},
{name:"Escorpião",id:"escorpiao",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/escorpiao.png"},
{name:"Sargitário",id:"sagitario",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/sagitario1.png"},
{name:"Capricórnio",id:"capricornio",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/capricornio.png"},
{name:"Aquário",id:"aquario",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/aquario3.png"},
{name:"Peixes",id:"peixes",img:"http://www.joaobidu.com.br/jb/content/uploads/2012/03/peixes1.png"},
];

exports.connect =function (req,res){
	var signoProcessed = 0;
	var connectTemplate = JSON.parse(JSON.stringify(require('../templates/talkabot/response/connect').template));

	for (var i = 0, len = signos.length; i < len; i++) {
		horoscopoService.findByRefHoroscopo(signos[i],'last',function(err,signoSeached,horoscopos){
			if(horoscopos){
				var horoscopo = horoscopos[0];
				var horoscopoFormatted = JSON.stringify(horoscopoTemplate.template);
				horoscopoFormatted = replaceall("@description",horoscopo.description,horoscopoFormatted);
				horoscopoFormatted = replaceall("@signo",signoSeached.name,horoscopoFormatted);
				horoscopoFormatted = replaceall("@img",signoSeached.img,horoscopoFormatted);
				horoscopoFormatted = replaceall("@dateSigno",horoscopo.dateSigno,horoscopoFormatted);
				connectTemplate.body.layout.containerComponent.components.push(JSON.parse(horoscopoFormatted));
				signoProcessed++;
				if(signoProcessed==signos.length){
					res.json(connectTemplate);
				}
			}
		});
	}
}

exports.findByRefHoroscopo =function (refHoroscopo,when,req,res){
	
}