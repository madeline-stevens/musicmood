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
![screenshot](images/screenshot2.png)

##### TODO checklist:
- [ ] Validate the app and not the user
- [ ] More research needed to figure out User ID/Playlist ID combo form input
- [ ] Take in playlist ID (this ID can be found in the URL of the playlist)
- [ ] Query the API for that playlist's tracks
- [ ] Target each track's energy and valence object properties 
- [ ] Plot those pieces of data using d3.js
- [ ] Deploy to Heroku
 
##### Example API queries: 

##### Example API endpoints: 

1. GET A PLAYLIST’S TRACKS (and IDs):

API endpoint:
GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks

Working curl command (to be pasted into command line):
```
curl -X GET "https://api.spotify.com/v1/playlists/21THa8j9TaSGuXYNBU5tsC/tracks" -H "Authorization: Bearer BQDgx7jP5lkaxg8dE-qejx0aplXjYIsnaHxRARSv4XqVwFt_nhAd328h40PNtIAAaoNUzpVa951bxKc32uryJvwAvStDoDbP8-i7RGgiIeBmd13krhUfcsj5sWGN2dZRtgeGHBXnJEwqhHcZ2F7cNNFAN8RzDfjI"
```

PART OF RESPONSE:
```json
       },
          "href" : "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
          "id" : "21451j1KhjAiaYKflxBjr1",
          "name" : "Zion & Lennox",
          "type" : "artist",
          "uri" : "spotify:artist:21451j1KhjAiaYKflxBjr1"
        } ],
```
-----
2. FROM THAT RESPONSE OBJECT TARGET EACH TRACK’S ID:

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

3. GET THE ENERGY AND VALENCE OF A EACH TRACK with TRACK ID:

API endpoint:
GET https://api.spotify.com/v1/audio-features/{id}

CURL:
```
curl -X GET "https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT" -H "Authorization: Bearer {your access token}"
```

Working curl command (to be pasted into command line):
```
curl -X GET "https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT" -H "Authorization: Bearer BQDBFZPbbuNT_couEj1cFpiUxrtZQEB2sB8_NeRbUchoyhtAdfn_YElITOo4BPohiAJSfrrtLghlQR7NkBSRzTMTrcYv9pl9QUT5NzvmKqls92A0BxQQ84hpFo8Wt8uE4o2M1xp5dATur7Q11za3LJvPG4pUi4lW&refresh_token=AQD7d1PjBMJ20CBiHkhyoIsw9wtm_Hc5ifgznAMEWS9EeyVPMyds6KUEssG50vcdGQTLqM9B2evhz8GH_REpREK0O6BkaiZWXpTwFzW1MELz9qW5XMRCi4QtYen4cNYalAnPsA"
```

RESPONSE:
```json
{
  "danceability" : 0.735,
  "energy" : 0.578,
  "key" : 5,
  "loudness" : -11.840,
  "mode" : 0,
  "speechiness" : 0.0461,
  "acousticness" : 0.514,
  "instrumentalness" : 0.0902,
  "liveness" : 0.159,
  "valence" : 0.636,
  "tempo" : 98.002,
  "type" : "audio_features",
  "id" : "06AKEBrKUckW0KREUWRnvT",
  "uri" : "spotify:track:06AKEBrKUckW0KREUWRnvT",
  "track_href" : "https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT",
  "analysis_url" : "https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
  "duration_ms" : 255349,
  "time_signature" : 4
}
```

Also worth looking into--> GET AUDIO FEATURES FOR SEVERAL TRACKS:
GET https://api.spotify.com/v1/audio-features 


HELPFUL NOTES IN DOCUMENTATION:
- You do not need cURL to complete this tutorial, but you will probably find it a helpful tool when developing your application; it will help you formulate requests to Spotify web services and see the responses they return

- Tokens don't need to be attached to users though, you can use the Client Credentials Flow to generate an access token on behalf of your oauth client, rather than involving a user.

- Road blocks:
DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.


