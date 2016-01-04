### Node.js Wrapper For Graph Commons API.

More detailed API documentation:

<http://graphcommons.github.io/api-v1/>

### Installation

 npm install graphcommons

### Usage

 var graphcommons = require('graphcommons');

 var callback = function(result) {
	console.log('log:', result);
 }
 var gc = new graphcommons(accesskey,callback);