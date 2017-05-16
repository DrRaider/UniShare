

var utils = {}; //object to export that will contain all of the templated functions 
module.exports = utils;

//builds the view needed in socket IO 
utils.buildViews = function(client){
	//client = DB.nano.use('predditor_user_accounts');
	
	client.insert(
	{ "views": 
		{ "email": 
			{ "map": function(doc) {
					    for (var cur in doc.skills) {
					        if(doc.skills[cur] && doc.username) {
					            emit([doc.skills[cur][O], doc.username],doc.skills[cur][1],);
					        }
					    }
					}
 			} 
		}
	}, '_design/skills', function (e, response) {
		if (e) {
			//console.log('...buildACouch: view exists!' + e);
		}
		else {
			//console.log("...buildACouch: email view inserted");
		}
		
	});
}
//DC.destroyCouch();
//DC.buildPredditorCouch();
//DC.buildViews();
