var Graph = require('../graph.js');
var assert = require('chai').assert;
var data = require('./data/graph.json');

suite('A graph', () => {

  var graph;
  var node;

  setup(() => {
    nodeId = 'dd542dd3-6fc1-e9f9-4087-774e59a8b803';
    graph = new Graph(data.graph);
  });

  suite('#get_node method', () => {

    test('should return empty object if node is not found', () => {
      assert.deepEqual(graph.get_node(''), {})    
    });

    test('should return the node object if it is found', () => {
      assert.propertyVal(graph.get_node(nodeId), 'id', nodeId);
    });

  });

  suite('#edges_for method', () => {

    var toNode;
    var toNodeId;
    var fromNode;
    var fromNodeId;

    setup(() => {
      toNodeId = nodeId;
      toNode = graph.get_node(toNodeId);
      fromNodeId = 'b0a9bf57-ea85-ce91-caa4-19bc875b38ca';
      fromNode = graph.get_node(fromNodeId);
    });

    test('should return empty array if no edges pointing to/from the node', () => {
      assert.deepEqual(graph.edges_for('', 'to'), []);
      assert.deepEqual(graph.edges_for(0, 'from'), []);
    });

    test('should return array of edge objects pointing to the node', () => {
      assert.lengthOf(graph.edges_for(toNode, 'to'), 1);
    });

    test('should return array of edge objects pointing from the node', () => {
      assert.lengthOf(graph.edges_for(fromNode, 'from'), 1);
    });

    test('should throw error when provided an invalid or no direction', () => { 
      // requires implementation
    });

  });

});