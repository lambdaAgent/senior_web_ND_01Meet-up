<<<<<<< HEAD
# Udacity Senior Web Frontend Nanodegree Projects
<hr />
![certificate of completion](https://www.udacity.com/verified-certificate/nd802)


# Project01 - Meet-Up Event Planner
### Create Functional Form for both mobile and desktop [github](https://github.com/vdj4y/senior_web_ND_01Meet-up)
1. each form must be validated immediately after the user move to other form.
2. Each form is manually built with react 
3. Technology stack: React, React-Router.

![alt form with validation](https://udacity-github-sync-content.s3.amazonaws.com/_imgs/10086/1474847917/Animation_2.gif "Logo Title Text 1")

# Project02 - Transport-Planner App
### This app will show schedule for caltrain's train [demo](https://transportapp-udacity.herokuapp.com)  [github](https://github.com/vdj4y/senior_web_ND_02Transport_app)
1. This app will check the arrival-time of the next train 
2. This app utilize serviceWorker and indexedDB for offline capability
3. Technology stack: React, React-Router.

<img src="https://github.com/vdj4y/senior_web_ND_02Transport_app/blob/master/02Transport_app.png" />


# Project03 - [Restaurant Finder](https://restaurant-finder-udacity.herokuapp.com/)
### Built an accessible web application containing restaurant information and customer reviews. 
1. App conforms to WEB-ARIA requirement for accessiblity website
2. Technology stack: React, React-Router.

<img src="https://github.com/vdj4y/senior_Web_ND_03Restaurant/blob/master/restaurant.png"/>


# Project05 - JakartaPost with Speech 
[demo](https://jpost.herokuapp.com/)
### This app  is created for the project 05Capstone for udacity senior Web FrontEnd Nanodegree.
### This app will scrap news from <a href="http://www.jakartapost.com">jakartapost</a> , it is a simple news viewer with extra features like: 
  1. ability for computer to read the articles
  2. if online, user is able to instruct simple voice commands,
  3. if offline, the app will still be functional without voice Recognizer

<img src="https://github.com/vdj4y/senior_web_ND05Capstone/blob/master/github%20images/Screen%20Shot%202016-10-18%20at%2010.32.04%20AM.png" />
||||||| merged common ancestors
=======
# Project01 - Meet-Up Event Planner
This is the first project for Senior Web FrontEnd Nanodegree

# Create Functional Form for both mobile and desktop
1. each form must be validated immediately after the user move to other form.
2. Each form is manually built with react 

![alt form with validation](https://udacity-github-sync-content.s3.amazonaws.com/_imgs/10086/1474847917/Animation_2.gif "Logo Title Text 1")

# RUN:
1. cd build 
2. python -m simpleHTTPServer <port>

# Notes for build files:
1. final working files are in build directory, everything else are for development files 
2. needs localserver for react-router
3. library used: react-create-app, react-router
4. password: 
  * at least 8 characters
  * must include at least one Capital Letter
5. From project rubrics: "You do not need to create a real back-end or save user information, but the app must provide a form for users to create an account." <br/> 
   So,  I decide not to use any authentication, nor saving the new user account <br/>
**Signup form will route to "/" (homepage), after the user submit the form and pass all validation**
6. directory for build:
   * /build
     * /static
       * /css
         * main.be08d7cd.css  &nbsp;&nbsp; # compiled css
       * /js      
         * main.6b0807af.js   &nbsp;&nbsp; # compiled build javascript
       * index.html           &nbsp;&nbsp; # index.html for build
       * favicon.ico

# Notes for development files :
1. I use <a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">react-create-app</a> as a build tool, it uses webpack in background with very minimum configuration
2. clone the repo, 
3. `$ npm install `  &nbsp;    *install dependencies*
4. `$ npm start `  &nbsp;  *to run in development mode*
5. there is only one **build** directory for production mode, **everything else are for development mode**
6. directory: 
   * /build        &nbsp;&nbsp; &nbsp;&nbsp;# build directory for production only, **everything else are for development mode**
   * index.html    &nbsp;&nbsp; # main html 
   * package.json
   * /node_modules
   * /src
     * /components &nbsp;&nbsp; # individual components
     * /helper
       * helper.js &nbsp;&nbsp; # helper functions
     * /events
       * eventList.js &nbsp;&nbsp; # pre-coded events database
     * favicon.ico
     * index.css
     * index.js &nbsp;&nbsp;  # app main entry
     * logo.svc
>>>>>>> 40e9d07bd54a92015b64c28f263e46e54c243853
