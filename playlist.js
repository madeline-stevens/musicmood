'use strict';

var express = require('express')
var app = express()

const url = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks"

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

