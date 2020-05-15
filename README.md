# Prakash-playlistchallange
Angular project for playlist challange

# PlaylistWeb 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1. 

# Development server 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

# DIsplay Songs Libarary 

Create songs component to write multiple functions for the songs lib and playlists. 

Import all the angular basic depedencies from the angular core.  

Create songs service for HTTP request and response (GET,POST,DELETE). Import songs service to the songs component by using import keyword. 

Write getLib() function to call the getSongs service and get the library details from the server.  

Added primeNG UI components by using ng add. Import primeNg module in the app module to use across the application.  

By using get API get the songs library from the node API and list the songs in the browser using primeNg table. 

Added pagination for the table using primeNg. 

# Create Playlist 

Added text box for create playlist name and save it in the server. By calling the post playlist API when click the create playlist button to save the playlist in the server side 

After creating playlist then show the playlist by using get playList API. 

# Display Playlist 

Create getPlaylist method for get the all the playlists in the server and display the playlist in a grid view. pla 

Display all the playlist name and songs one by one. 

# Add songs to Playlist 

Create add button to the right side of the playlist name. By clicking the add button it will show the add button for songs in the library. 

By click add button in the songs it will add that songs to the constrain playlist. 

By using post API in the node saved the songs to the playlist. 

# Delete Playlist 

Create delete button to the right side of the playlist name. 

When click the del button it will send the id of the playlist to the  delete API and delete the playlist in the server. 

  
