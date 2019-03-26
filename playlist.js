'use strict';

var express = require('express')
// var cors = require('cors');
var request = require('request'); // "Request" library

var app = express()

//=============


  // use the access token to access the Spotify Web API
//   request.get(options, function(error, response, body) {
//     console.log(body);
//     token = access_token;
//   });

//=============
const url = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks"

// GET method for general playlist info route
 //constructing a query using the button gif name
 var queryURL =
 "https://api.giphy.com/v1/gifs/search?q=" +
 gif +
 "&api_key=146C06EEzC0947etkQTI0w0yLrtDJEa3&limit=10";

//performing ajax request with the query url
$.ajax({
 url: queryURL,
 method: "GET"
}).then(function(response) {
 console.log(queryURL);

 console.log(response);
 // storing the data from the AJAX request in the results variable
 var results = response.data;
 console.log("results" + results);


  //============= stackoverfow (https://stackoverflow.com/questions/40561845/how-can-i-get-a-list-of-playlists-by-user-with-the-spotify-web-api)

  app.get('/playlists', function(req, res) {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    // your application requests authorization
    var scope = 'playlist-read-private';
    res.redirect('https://api.spotify.com/v1/me/playlists?' +
      querystring.stringify({
        access_token: token,
        token_type: 'Bearer',
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
     }));
  });

//function that handles the playlist info button(giphy app)
  $("#submitPlaylist").on("click", function(event) {
    event.preventDefault();
    console.log("clickeddddd")
    //grab input from the textbox
    var newPlaylist = $("#playlist-input")
      .val()
      .trim();

      //function that could be called here to render playlist info
    });



    app.listen(8888);
