
var unirest = require('unirest');
var graph = require('./graph.js')

var api_url = 'https://graphcommons.com/api/v1/';
var api_key = '';



// Constructor
// Can take a callback to eval when api is ready
var GraphCommons = function(_apikey, _callback) {
 	
 	if(!_apikey) throw new Error('no api key provided');
 
	api_key = _apikey;

 	unirest.get(api_url + 'status')
		.headers({'Authentication': api_key})
		.end(function (response) {
		  if(_callback) _callback(response.body);
		});
}

// Create a new graph from api
// Returns a graph object
GraphCommons.prototype.new_graph = function(_graph, _callback) {

	if(!_graph) throw new Error('missing graph data');
	
	unirest.post(api_url + 'graphs')
	.headers({'Authentication': api_key})
	.headers({'Content-Type' : 'application/json'})
	.send(_graph)
	.end(function (response) {
 		if(_callback) _callback(new graph(response.body.graph));
	});
}

// Retrieve a graph from api
// Returns a graph object
GraphCommons.prototype.graphs = function(_id, _callback) {

	if(!_id) throw new Error('missing id for the graph');
	
	unirest.get(api_url + 'graphs/' + _id)
	.headers({'Authentication': api_key})
	.end(function (response) {
 		if(_callback) _callback(new graph(response.body.graph));
	});
}

// Retrieve a graph from api
// Returns the node object
GraphCommons.prototype.nodes = function(_id, _callback) {

	if(!_id) throw new Error('missing id for the graph');
	
	unirest.get(api_url + 'nodes/' + _id)
	.headers({'Authentication': api_key})
	.end(function (response) {
 		if(_callback) _callback(response.body.node);
	});
}

// Search nodes in graphs
// Returns the search results in nodes
GraphCommons.prototype.nodes_search = function(_search_obj, _callback) {

	if(!_search_obj) throw new Error('missing search query for the node search');
	
	unirest.get(api_url + 'nodes/search')
	.headers({'Authentication': api_key})
	.headers({'Content-Type' : 'application/json'})
	.send(_search_obj)
	.end(function (response) {
 		if(_callback) _callback(response.body);
	});
}

// Search nodes in graphs
// Returns the search results in nodes
GraphCommons.prototype.nodes_search = function(_search_obj, _callback) {

	if(!_search_obj) throw new Error('missing search query for the node search');
	
	unirest.get(api_url + 'search')
	.headers({'Authentication': api_key})
	.headers({'Content-Type' : 'application/json'})
	.send(_search_obj)
	.end(function (response) {
 		if(_callback) _callback(response.body);
	});
}


// Update graph with signals
GraphCommons.prototype.update_graph = function(_id, _signals, _callback) {
	
	sendSignal(_id, _signals, _callback);
}

//Utility
var sendSignal = function(_id,_signals,_callback) {
	
	unirest.put(api_url + 'graphs/' + _id + '/add')
		.headers({'Authentication': api_key})
		.headers({'Content-Type' : 'application/json'})
		.send(_signals)
		.end(function (response) {
		  if(_callback) _callback(response.body);
		});
}


module.exports = GraphCommons;