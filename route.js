var express = require('express');
var app = express();
var http = require('http');


app.get('/api/:term', function (req, res) {
  var apiKey = '0e5c263be7a96b8df205c354017ca71730b176c5';

  let url = 'https://www.giantbomb.com/api/games/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name,image';
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

//find a route google will test to
//tunnel from ngrok
