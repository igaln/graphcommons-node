### Node.js Wrapper For Graph Commons API.

More detailed API documentation:

<http://graphcommons.github.io/api-v1/>

### Installation

 npm install graphcommons

### Usage

```javascript

 > var gc = require('graphcommons');
 > var accesskey = process.env.YOURENVIRONMENTACCESSKEYWHICHYOUSHOULDNOTSTOREINYOURCODE;

 > var callback = function(result) {
	console.log('log:', result);
 }

 > var graphcommons = new gc(accesskey, callback);
 
 log: { msg: 'Working' }

 ```

### Graph Object



### Get graph

```javascript

> var callback = function(graph) {
    console.log('log:', graph);
    console.log('edges: ', graph.edges);
    console.log('nodes: ', graph.nodes);

    //All the other properties of the graph can be retrieved from
    console.log(grpah.properties);
 }

> graphcommons.graphs(graph_id,callback);

```

#### Graph Utility Functions

```javascript

> graph.get_node(node_id)
> returns a matching node from graph
> 
> graph.edges_for(node,'to'));
> graph.edges_for(node,'from'));
> returns edges to or from
> 
> graph.edges_from(node) short for graph.edges_for(node,'from'))
> graph.edges_to(node) shor for graph.edges_for(node,'to'));

```

### Get node

```javascript

> var callback = function(node) {
    console.log('log:', node);

 }

> graphcommons.nodes(node_id,callback);

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

> var callback = function(graph) {
    console.log('log:', graph);
    console.log('edges: ', graph.edges);
    console.log('nodes: ', graph.nodes);
 }

> graphcommons.update_graph('f71116ba-cf77-4703-826a-daac2ab2f085',signals,callback);
```

### Search Nodes

```javascript
// query  query to be searched
// hub  id of the hub to search in
// graph  id of the graph to search in
// status status of the nodes to return.
// Available values:
// 0 => published
// 1 => work in progress
// 2 => private
// public => published and work in progress
// limit  limit the number of results (max: 20)
// skip number of results to skip
var node_search_query = {
  'query' : 'test',
  'graph' : 'f71116ba-cf77-4703-826a-daac2ab2f085' 
}
var searchresults = function(results) {
  console.log(results)
}

graphcommons.nodes_search(search_query,searchresults);

```

### Search Graph Commons

```javascript
//query query to be searched
//limit limit the number of results (max: 20)
//skip  number of results to skip
var search_query = {
  'query' : 'energy'
}
var searchresults = function(results) {
  console.log(results)
}

graphcommons.search(search_query,searchresults);

```

###TODO

- [x] Graph Utility Functions
- [ ] Add Mocha for tests
- [ ] Better wrapper for Signals? 

