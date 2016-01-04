var graphapi = require('./index.js');

//TODO: move this whole thing to proper mocha testing

//get access key from env, do not store it in ur app
var accesskey = process.env.GCKEY;

var signals = { "signals" : [
					{
					  "action": "node_create",
					  "type": "Curation",
					  "name": "Test",
					  "description": "test description",
					  "properties": {
					  		"prop1": "one",
					  		"prop2": 2
						}
					}
				]
			};

var graph = {
      "name": "My algorithmically generated graph",
      "description": "I will delete this",
      "status": 0,
    };


var log = function(result) {
	console.log('log:', result);
}

var apiready = function(result) {
		console.log('api ready:', result);
		//var g1 = graphcommons.graphs('f71116ba-cf77-4703-826a-daac2ab2f085');
		//graphcommons.update_graph('f71116ba-cf77-4703-826a-daac2ab2f085', signals,log);
		//var n1 = graphcommons.nodes('bd26bf55-a88f-bc15-bd65-33240593a53c',log);
		//var g2 = graphcommons.new_graph(graph,log);
}


var graphcommons = new graphapi(accesskey,apiready);



	