/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

System-Provided:
{
"VCAP_SERVICES": {
  "tradeoff_analytics": [{
      "credentials": {
        "url": "https://gateway.watsonplatform.net/tradeoff-analytics/api",
        "password": "TKci3od4UVUD",
        "username": "da90de8a-b9d3-49d1-9878-bb5b3e1972bf"
      },
    "label": "tradeoff-analytics",
    "name": "tradeoff-analytics-standard-service",
    "plan": "standard"
 }]
}
}
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


