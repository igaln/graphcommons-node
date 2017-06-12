var GraphCommons = require('../index.js');
var Graph = require('../graph.js');
var assert = require('chai').assert;

// do no store your key in your app
var apikey = process.env.GCKEY;

suite('graphcommons', () => {
  suite('#constructor', () => {
    
    test('should throw an error when access key is absent', () => {
      assert.throws(() => { new GraphCommons() }, Error, 'no api key provided');
      assert.throws(() => { new GraphCommons('') }, Error, 'no api key provided');
    });

    test('should return an object in the callback', (done) => {
      var gc = new GraphCommons(apikey, (res) => {
        assert.isObject(res);
        assert.property(res, 'msg');
        done();
      });
    });

  });
});

suite('graphcommons', () => {

  var gc;
  var graphId;
  var newGraph;
  var signals;
  var searchQuery;
  var nodeSearchQuery;
  var nodeId;

  setup((done) => {
    newGraph = {
      "name": "My algorithmically generated graph",
      "description": "I will delete this",
      "status": 0,
    };
    graphId = '907e6d87-6965-4865-96ce-ff116cbbcbf3'; // should point a graph which you have permission to alter
    signals = { 
      "signals" : [{
        "action": "node_create",
        "type": "Curation",
        "name": "Test2",
        "description": "test description",
        "properties": {
          "prop1": "one",
          "prop2": 2
        }
      }]
    };
    searchQuery = {"query" : "energy"};
    // to query to match you have at least one node with test label - check graph.json in data folder
    nodeSearchQuery = {"query" : "test", "graph" : "69ecbcbd-d409-468b-af5a-10453275e423" } 
    // nodeId should point to an any existing node object
    nodeId ="d1ec1d5b-8d61-4451-84c6-5da5776a4851"; 
    gc = new GraphCommons(apikey, (res) => {
      done();
    });

  })

  setup('#graphs method', () => {

    test('should throw an error if id is absent', () => {
      assert.throws(() => { gc.graphs() }, Error, 'missing id for the graph');
    });

    test('should return a graph object in the callback', (done) => {
      gc.graphs(graphId, (res) => {
        assert.isObject(res);
        assert.instanceOf(res, graph);
        done();
      });
    });

  });

  suite('#new_graph method', () => {
    
    test('should thrown an error when graph data is not provided', () => {
      assert.throws(() => { gc.new_graph() }, Error, 'missing graph data');
    });

    test('should return a graph object, representing newly created graph, in the callback', (done) => {
      gc.new_graph(newGraph, (res) => {
        assert.instanceOf(res, Graph);
        assert.nestedProperty(res, 'properties.id');
        done();
      }); 
    });

  });

  suite('#update_graph method', () => {
    
    var graphToUpdate;
    
    setup((done) => {
      newGraph.name = newGraph.name + '(updated)';
      gc.new_graph(newGraph, (res) => {
        graphToUpdate = res.properties.id;
        done();
      });
    });

    teardown(() => {
      newGraph.name = 'My algorithmically generated graph';
    });

    test('should return reprensentation of the updated graph', (done) => {
      gc.update_graph(graphToUpdate, signals, (res) => {
        assert.containsAllKeys(res.graph, newGraph);
        assert.lengthOf(res.graph.signals, 2);
        done();
      });
    });

  });

  suite('#search method', () => {

    test('should throw error when query object is absent', () => {
      assert.throws(() => { gc.search() }, Error, 'missing search query for the node search');
    });

    test('should return an return an array of objects', (done) => {
      gc.search(searchQuery, (res) => {
        assert.isArray(res);
        assert.isAtLeast(res.length, 10);
        done();
      });
    });

  });

  suite('#nodes_search method', () => {

    test('should throw error when search object is absent', (done) => {
      assert.throws(() => { gc.node_search(), Error, 'missing search query for the node search'});
      done();
    });

    test('should return an object containing nodes array', (done) => {
      gc.nodes_search(nodeSearchQuery, (res) => {
        assert.property(res, 'nodes');
        assert.isArray(res.nodes);
        done();
      });
    });

  });

  suite('#nodes method', () => {

    test('should throw error when graph id is absent', () => {
      assert.throws(() => { gc.nodes() }, Error, 'missing id for the node');
    });

    test('should return a node object', (done) => {
      gc.nodes(nodeId, (res) => {
        assert.property(res, 'id');
        done();
      });
    });

  });

});

