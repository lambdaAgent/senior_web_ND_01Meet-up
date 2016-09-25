# Project01 - Meet-Up Event Planner

### RUN:
1. cd build 
2. python -m simpleHTTPServer <port>

### Notes:
1. final working files are in build directory
2. needs localserver for react-router
3. library used: react-create-app, react-router
4. password: 
  * at least 8 characters
  * must include at least one Capital Letter
5. From project rubrics: "You do not need to create a real back-end or save user information, but the app must provide a form for users to create an account." I decide not to use any authentication, nor saving the new user account <br/>
** Signup form will route to "/"(homepage), after the user submit the form and pass all validation **

### Guide for source file:
1. I use <a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">react-create-app</a> as a build tool, it uses webpack in background with very minimum configuration
2. clone the repo, 
3. `$ npm install `  &nbsp;    *install dependencies*
4. `$ npm start `  &nbsp;  *to run in development mode*
5. there is only one **build** directory for production mode, **everything else are for development mode**
6. directory: 
<code>
   | build        //build directory for production only, **everything else are for development mode**
   | index.html   //main html 
   | package.json
   | node_modules
   | src
     | components //individual components
     | helper
     | events
     favicon.ico
     index.css
     index.js     //app main entry
     logo.svc
</code>
