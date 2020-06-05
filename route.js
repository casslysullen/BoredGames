var express = require('express');
var app = express();
var http = require('http');


app.get('/api/:term', function (req, res) {
  var apiKey = '06140356b004cf4a23560c7cd95af899';

  let url = "https://api-v3.igdb.com/games/06140356b004cf4a23560c7cd95af899";
  var options = {
    method: "GET",
    headers: {
      "X-Auth-Token": apiKey
    }
  };

  let data = '';
  let apiRequest = http.request(url, options, function (res) {
    console.log("Connected");

    Response.end(JSON.stringify(data));

  })
})
