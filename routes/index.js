var projects = require('../projects.json');

/*
 * GET home page.
 */


exports.view = function(req, res){
  	var data = {'viewGrid': false};
  	res.render('index', projects);
  	
};

exports.viewGrid = function(req,res){
	var data = {'viewGrid': true};
	res.render('index', data);
	
};