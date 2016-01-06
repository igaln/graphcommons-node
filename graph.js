
// Constructor
// Build a graph
var Graph = function(_graph) {
 	
 	this.edges = _graph.edges;
 	this.nodes = _graph.nodes;
 	this.properties = _graph;

}


// Get node from graph
Graph.prototype.get_node = function(_id) {

	if(!this.nodes) return;

	var foundnode = {};
	this.nodes.forEach(function(node) {
		if(node.id == _id)
			foundnode = node;
	});
	return foundnode;
}

// Get edges for a node
Graph.prototype.edges_for = function(_node, _direction) {

	if(!this.edges) return;

	var found_edges = [];
	this.edges.forEach(function(edge) {
		if(edge[_direction] == _node.id)
			found_edges.push(edge);
	});
	return found_edges;

}

// Get edges from a node
Graph.prototype.edges_from = function(_node) {
	return this.edges_for(_node, 'from')
}

// Get edges to a node
Graph.prototype.edges_to = function(_node) {
	return this.edges_for(_node, 'to')
}

module.exports = Graph;