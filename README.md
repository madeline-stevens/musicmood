# musicmood
A Spotify API playlist app that takes in a playlist ID and returns the energy (intensity and activity) and valence (musical positiveness) for each track. 

![screenshot](images/screenshot.png)


#### Technical Specifications

##### Software platform: 
Node.js 
##### Third party js libraries:  
Bootstrap, Handlebars (these are both from the spotify authentication example code I used in my app). I'd like to use chart.js or d3.js to plot the data points of each track in each playlist, maybe use overlapping colors for energy and valence or a dual-scale bar chart (this looks like a great resource for [dual-scale bar charts](https://medium.com/@vaibhavkumar_19430/how-to-create-a-grouped-bar-chart-in-d3-js-232c54f85894)). The below image is a mock up of what my data visualization could look like, but with some minor tweeks like color variation I think it could really convey the mood of each track. 

![screenshot](images/screenshot3.png)

##### General development patterns: 
As far as architecture styles, this is on it's way to becoming a RESTful API.

##### Resources:
1. Understanding OAuth with the Spotify API - #12 React JS prototyping [youtube video](https://www.youtube.com/watch?v=f5OLDvwP-Ug).
2. Spotify Accounts Authentication Examples [github](https://github.com/spotify/web-api-auth-examples).
3. Similar app written with python- https://github.com/rafin/Spotify-Visualizations (http://plotify.herokuapp.com)

##### To get started with this app:
1. Clone this repo to your local machine.
2. Create a .env file at the root level and include your own client ID and secret key provided when you registered your version of this app on Spotify. Your .env file should look something like this:
```
# Spotify API keys for .env

SPOTIFY_ID=c**********a
SPOTIFY_SECRET=6************c
```
3. Run ```npm i``` to install package.json dependencies, which creates a local node_modules folder. 
4. Right click on app.js in the sidebar, choose open in terminal, run ```node app.js```. Should see ```Listening on 8888```.
5. Open your chrome browser and navigate to localhost:8888.
6. You should see the following:
![screenshot](images/screenshot4.png)

##### TODO checklist:
- [ ] Validate the app and not the user
- [ ] More research needed to figure out User ID/Playlist ID combo form input
- [ ] Take in playlist ID (this ID can be found in the URL of the playlist)
- [ ] Query the API for that playlist's tracks
- [ ] Target each track's energy and valence object properties 
- [ ] Plot those pieces of data using d3.js
- [ ] Deploy to Heroku
 

1. write something that allows me to test my token
2. then make sure my query string works
3. then get data 
4. singleton (he works with sockets and its a good idea to only have one instance of htat) How would i build this in a work environment

##### Example API queries: 

##### Example API endpoints: 

1. GET A PLAYLIST’S TRACKS (and IDs): 

API endpoint:
- GET https://api.spotify.com/v1/playlists/{playlist_id}

API request: 
includes the above and header info 

Notes:
app.get is used to define and endpoint within my app (ex: app.get('/playlist, function (req, res)))
we are using superagent to actually write an api request and query spotify 
we can see the curl command and get a good idea but need to google how to use superagend to incorporate bearer auth

- My Playlist (150 tracks?): https://open.spotify.com/user/1255254821/playlist/7qMLnhjM68NlrN4qpOHzYP?si=5leCtMKcS96sVTsOBKIdew
- My test playlist (4 tracks): https://open.spotify.com/user/1255254821/playlist/0iGyenYDTB4968ankt90dh?si=1cdV6KWTTgql843wNwR-3Q

- Working curl command (to be pasted into command line; playlist ID taken from my personal spotify):
```
curl -X GET "https://api.spotify.com/v1/playlists/0iGyenYDTB4968ankt90dh/tracks" -H "Authorization: Bearer BQBNmwBFKkWweFQM45zhbmKSLBWc_Hz9kDJIWB_7YAE5mITmD-4Q1EGZV8nab-5XbrT-OTTnfVnGwl0tmqXgZZyaU1TmbA-khM3j33W_5sZGObln6k4NdUTn8rqcjGh9wK2mz1ms5FoKbnWHkM6n7SXZ6JzDjoI2&refresh_token=AQDUj0W9lPrudletXEwAUImhMsCsLpnptbSHx4lr__aSuCMIdm5cu-o-nlwF4ioDoXyRriKdsFGV2wfx1rwGtYdw6LGPulwjH9tOPSaGsPWvqfI5pRAOJeIQ3AQGN8DKClI_iw"
```

PART OF RESPONSE:
```json
}, {
    "added_at" : "2015-03-30T04:40:41Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/1255254821"
      },
      "href" : "https://api.spotify.com/v1/users/1255254821",
      "id" : "1255254821",
      "type" : "user",
      "uri" : "spotify:user:1255254821"
    },
    "is_local" : false,
    "primary_color" : null,
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],


```
-----
2. (may not need) FROM THAT RESPONSE OBJECT TARGET EACH TRACK’S ID: DO I EVEN NEED THIS??

API endpoint:
GET https://api.spotify.com/v1/tracks/{id}

Sample CURL command (needs Bearer, which is provided after clicking the 'Log in with Spotify' button of this app):
```
curl -X GET "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl" -H "Authorization: Bearer {your access token}"
```

PART OF RESPONSE: 
```json
{
  "album": {
    "album_type": "single",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
        },
        "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
        "id": "6sFIWsNpZYqfjUpaCgueju",
        "name": "Carly Rae Jepsen",
        "type": "artist",
        "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
      }
    ],
    "available_markets": [
```

3. (may not need) GET THE ENERGY AND VALENCE OF JUST ONE TRACK with it's TRACK ID:

API endpoint:
GET https://api.spotify.com/v1/audio-features/{id}

Curl:
```
curl -X GET "https://api.spotify.com/v1/audio-features/22BzOOZKYZ2jYYKLpOlnET" -H "Authorization: Bearer {your access token}"
```

Working curl command (to be pasted into command line):
```
curl -X GET "https://api.spotify.com/v1/audio-features/758wEKVqfYopJIHYWdLVd4" -H "Authorization: Bearer BQDWmWGMyl60lgUXbWDEgZluUR36jSIMHWjmACkGGJth8-f67Jd8HmDM9rYavbOQFJHNW_jysmgMVyPjegtkLr8QVAXHTbgO3mqAY-T6l11iMy_pcwqQusg6US47JTZ_2yi2HMnBId8HEwJXxYxC7J7daKZ9IZQA&refresh_token=AQBrgcHjP7eQk4vGrxry6GPmvYsffxe5fmYn5KTw1qCuntlvQ8lYvuR34KId-191pIkE3XBudyY9FW5pTcd8EBA-h-9frHrzAbrTryUmtNprSFEp4_9XKUxTCy-KPdmsIOA3WQ"
```

RESPONSE:
```json
{
  "danceability" : 0.492,
  "energy" : 0.862, <--------
  "key" : 4,
  "loudness" : -9.158,
  "mode" : 0,
  "speechiness" : 0.0273,
  "acousticness" : 0.0121,
  "instrumentalness" : 0.213,
  "liveness" : 0.228,
  "valence" : 0.591, <----------
  "tempo" : 112.598,
  "type" : "audio_features",
  "id" : "758wEKVqfYopJIHYWdLVd4",
  "uri" : "spotify:track:758wEKVqfYopJIHYWdLVd4",
  "track_href" : "https://api.spotify.com/v1/tracks/758wEKVqfYopJIHYWdLVd4",
  "analysis_url" : "https://api.spotify.com/v1/audio-analysis/758wEKVqfYopJIHYWdLVd4",
  "duration_ms" : 292800,
  "time_signature" : 4
}
```

4. GET AUDIO FEATURES FOR SEVERAL TRACKS by stringing together multiple track IDs:

- API endpoint: 
GET https://api.spotify.com/v1/audio-features 

Tester track ID: 758wEKVqfYopJIHYWdLVd4 (led zeppelin)
Provided track ID: 06AKEBrKUckW0KREUWRnvT

- I used the spotify tool to be able to see audio features from the ids that i got from the previous curl command, copied/pasted that data into a file so i could search for-- "uri" : "spotify:track:189gb58kHUdS5MdLBcz18f"

- Curl (that strings together track IDs with commas): 
curl -X "GET" "https://api.spotify.com/v1/audio-features?ids=2UjEyfnKzaY7qpBEeESJjv%2C2UjEyfnKzaY7qpBEeESJjv%2C0Wb8Xz77vX6WD5ccPmCz7U" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQATEKY_VzMxSqq4ePyEKHVOE2EXDlIFlKj6sZCjG8CNPq1So2Ph5C4vnht7rKpJWGhlnSv2hrPtINX5CRyf061zCnAdU6Cf2M13dz670A1Sw30-4o14k4qAfxbkA5oewUZGunJIEcAO7eSEfpM0gUdk1EA"

RESPONSE:

```json
{
  "audio_features": [
    {
      "danceability": 0.709,
      "energy": 0.831,
      "key": 2,
      "loudness": -6.847,
      "mode": 0,
      "speechiness": 0.0391,
      "acousticness": 0.108,
      "instrumentalness": 0.00128,
      "liveness": 0.159,
      "valence": 0.866,
      "tempo": 104.971,
      "type": "audio_features",
      "id": "2UjEyfnKzaY7qpBEeESJjv",
      "uri": "spotify:track:2UjEyfnKzaY7qpBEeESJjv",
      "track_href": "https://api.spotify.com/v1/tracks/2UjEyfnKzaY7qpBEeESJjv",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/2UjEyfnKzaY7qpBEeESJjv",
      "duration_ms": 227067,
      "time_signature": 4
    },
    {
      "danceability": 0.743,
      "energy": 0.9,
      "key": 1,
      "loudness": -7.316,
      "mode": 0,
      "speechiness": 0.059,
      "acousticness": 0.00047,
      "instrumentalness": 0.503,
      "liveness": 0.103,
      "valence": 0.806,
      "tempo": 99.966,
      "type": "audio_features",
      "id": "0Wb8Xz77vX6WD5ccPmCz7U",
      "uri": "spotify:track:0Wb8Xz77vX6WD5ccPmCz7U",
      "track_href": "https://api.spotify.com/v1/tracks/0Wb8Xz77vX6WD5ccPmCz7U",
      "analysis_url": "https://api.spotify.com/v1/audio-analysis/0Wb8Xz77vX6WD5ccPmCz7U",
      "duration_ms": 168133,
      "time_signature": 4
    }
  ]
}
```


HELPFUL NOTES IN DOCUMENTATION:
- You do not need cURL to complete this tutorial, but you will probably find it a helpful tool when developing your application; it will help you formulate requests to Spotify web services and see the responses they return

- Tokens don't need to be attached to users though, you can use the Client Credentials Flow to generate an access token on behalf of your oauth client, rather than involving a user.

- Road blocks:
DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.


