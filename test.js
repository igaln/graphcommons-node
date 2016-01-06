var graphapi = require('./index.js');

//TODO: move this whole thing to proper mocha testing

//get access key from env, do not store it in ur app
var accesskey = process.env.GCKEY;

var signals = { "signals" : [
					{
					  "action": "node_create",
					  "type": "Curation",
					  "name": "Test2",
					  "description": "test description",
					  "properties": {
					  		"prop1": "one",
					  		"prop2": 2
						}
					}
				]
			};

// query	query to be searched
// hub	id of the hub to search in
// graph	id of the graph to search in
// status	status of the nodes to return.

// Available values:
// 0 => published
// 1 => work in progress
// 2 => private
// public => published and work in progress
// limit	limit the number of results (max: 20)
// skip	number of results to skip
var node_search_query = {
	'query' : 'test',
	'graph' : 'f71116ba-cf77-4703-826a-daac2ab2f085' 
}

var search_query = {
	'query' : 'energy'
}

var graph = {
      "name": "My algorithmically generated graph",
      "description": "I will delete this",
      "status": 0,
    };


var callback = function(result) {
	console.log('log:', result);
}

var graphedges = function(graph) {
//	console.log('log:', graph);
	console.log('-------');
	var node = graph.get_node('ce66a18f-be3a-c55e-b6b9-4fcab7116541');		
	//console.log(node);
	//console.log('-------');
	//console.log(graph.edges_for(node,'to'));
	//console.log('-------');
	//console.log(graph.edges_from(node));
	//console.log(graph.get_edges('bd26bf55-a88f-bc15-bd65-33240593a53c'));
}

var searchresults = function(results) {
	console.log(results)
}

var apiready = function(result) {
		console.log('api ready:', result);
		graphcommons.graphs('f71116ba-cf77-4703-826a-daac2ab2f085',graphedges);
		//graphcommons.update_graph('f71116ba-cf77-4703-826a-daac2ab2f085', signals,callback);
		//graphcommons.nodes('bd26bf55-a88f-bc15-bd65-33240593a53c',callback);
		//graphcommons.new_graph(graph,callback);
		//graphcommons.nodes_search(search_query,searchresults);
		graphcommons.nodes_search(search_query,searchresults);
}


var graphcommons = new graphapi(accesskey,apiready);



	