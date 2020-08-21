# DICE GAME
To access the Don't Roll One game web application, visit https://dont-roll-one.herokuapp.com.  
(open multiple tabs of the same page to play against yourself to see how the application works)

NOTE: Due to low traffic for this web application, the hosting servers for both front and back end unloads the application from its memory when idles for an extended period of time. If you are the first user of this application when the server has gone idle, it will take a few moments to access the page and another few moments to start a new game.

## FRONT END
This repository contains the user interface of the web application.  
There is no game logic placed here as it is all handled on the back end.

## FUNCTIONALITY
From the "rules" page, clicking the START GAME button changes to the "game" page where a socket connection is established with the server.  
The player may have to wait for an opponent to connect to the server before a new game session is created for them.  
  
Upon the creation of a new game session the server sends a message containing the default game state to the relevant player sockets.  
These game state messages are used to update the model representing the game state on the client side, which is then portrayed in the template visible to the player.  
  
The ROLL and FOLD buttons on the user interface sends a message to the server corresponding to the player's requested action.  
The server performs the action and sends the updated game state to the relevant player sockets.  
  
A game session concludes when there is a winner or when a player disconnects from the session.  
When the session concludes, the "game" page is reloaded which restarts the process of a player connecting to the server to get in a new game session.  

## FRAMEWORKS UTILIZED
Angular  
Socket.IO  
Express.js  

## DEPLOYMENT
Deployed on Heroku
