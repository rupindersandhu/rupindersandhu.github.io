Team 10

Chuo, Jacky
Mallavarapu, Manish
Sandhu, Rupinder
Shu, Luda
Toyod, Jox

link to test the game: http://deltaversion.com/findx/index.html


GAME: FindX

An educational app to help kids improve their math skills and 
calculation speed.  At the start of the game, a random equation
will display three numbers (two digits max) and one operation.
One number will be covered by an X, which is also
randomly placed.  The user will need to solve for X given three
button choices at the bottom, the correct answer is randomized.


DESCRIPTION OF CODE STRUCTURE

Our code is divide into 5 different states
and followed the coding style and structure 
of the phaser game framework


STATES:

Boot.js	     - 	the entry point of our code.
	   	it initializes the game layout
	   	such as the height and width of the DOM
	   	element which holds the game, scaling 
	   	settings and game orientation

Preloader.js -  After the game layouts are  initialize,
		we preload all our game assets.
		This script is used to preload all the assets,  
 	        after preloading, the game page will load faster when refreshed. 

StartMenu.js -  The script for the main menu interface,
		and also the point of entry to the game screen

Game.js	     -  The script for our game interface.

GameOver.js  -  When the timer ends this state will be called.
		This state has the submit button that we use to 
		connect to our database for the leaderboard

Additional Code Structure:

The function the are inside each game state are arrange in 
alphabetical order except for the functions that are 
necessary for the phaser game engine to work and we be called
implicity by the game framework. E.g The create function and update 
function


TECHNOLOGIES

Phaser Game Engine, a javascript based framework.
JQuery, a javascript library which we use to connect to the database using REST API
MongoDB, database for our game leaderboard

ISSUES/PROBLEMS

in GAME:
We have difficulty in setting the game orientation strictly to 
portrait mode. Althought phaser has this functionality to handle 
the device orientation, for some reasons the command does not function
very well.

in DATABASE:
The users can send data to our database if they can see 
the API key on our database. We also have problems in
overwriting the data stored when user sends different
data but from a similar source.



