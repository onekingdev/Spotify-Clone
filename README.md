# Spotify-Clone

This project is clone of music player app Spotify.In this project user can login with their spotify account and and access their like song, playlist and also can play song.

### Technology used in this project :- 

 - React
 - Html, Css
 - Python Django
 - Django Rest Framework
 - Spotify Api
 
 ### How to install our project
 
 - Frontend :- 
   Go to spotify/ and run `npm install` 
   And to src/ and create env.js file inside that write cliend id like this <br>
   <pre>const client_id = "your spotify client id"
   export {client_id};</pre>
   
  - Backend :- 
    -  Go to backend_server and creating virtual environment by `python -m venv env`<br>
    - Now activate that environment by `./env/Scripts/activate` in windows and source `venv/bin/activate`
    - Now install libraries by `pip install -r requirements.txt`
    - Create .env in /backend folder and write these code :- 
    <pre>SECRET_KEY='your django secret key from settings.py file"
    CLIENT_ID="your spotify client id"
    CLIENT_SECRET="your spotify client secret"
    </pre>
    
  ### How to run our project 
  
  - Frontend :- 
   Type `npm start` to react app
   
  - Backend :- 
  Type `python manage.py runserver` to start django server
  
 
   
 
