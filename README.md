### Node.js Wrapper For Graph Commons API.

More detailed API documentation:

<http://graphcommons.github.io/api-v1/>

### Installation

 npm install graphcommons

### Usage

```javascript

 > var gc = require('graphcommons');

 > var accesskey = var accesskey = process.env.YOURENVIRONMENTACCESSKEYWHICHYOUSHOULDNOTSTOREINYOURCODE;

 > var callback = function(result) {
	console.log('log:', result);
 }

 > var graphcommons = new graphcommons(accesskey, callback);
 
 log: { msg: 'Working' }

 ```

### Get graph

```javascript

> var graphcallback = function(graph) {
    console.log('log:', graph);
    console.log('edges: ', graph.edges);
    console.log('nodes: ', graph.nodes);
 }

> graphcommons.graphs('f71116ba-cf77-4703-826a-daac2ab2f085',graphcallback);

```

### Update Graph

```javascript

var signals = { "signals" : [
                    {
                      "action": "node_create",
                      "type": "NodeType",
                      "name": "NodeName",
                      "description": "test description",
                      "properties": {
                            "prop1": "one",
                            "prop2": 2
                        }
                    }
                ]
            };

> var graphcallback = function(graph) {
    console.log('log:', graph);
    console.log('edges: ', graph.edges);
    console.log('nodes: ', graph.nodes);
 }

> graphcommons.update_graph('f71116ba-cf77-4703-826a-daac2ab2f085',signals,graphcallback);
```

###TODO

- [ ] Graph Utility Functions
- [ ] Add Mocha for tests
- [ ] Better wrapper for Signals? 

