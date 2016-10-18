# Project03 - [Restaurant Finder](https://restaurant-finder-udacity.herokuapp.com/)
Built an accessible web application containing restaurant information and customer reviews. Stack used are react, react-router


<img src="https://github.com/vdj4y/senior_Web_ND_03Restaurant/blob/master/restaurant.png"/>

### RUN:
1. `git clone`
2. To run client: 
   * `cd client/build`
   * `python -m SimpleHTTPServer *port*`


### Notes for development files :
1. `cd client`
2. `npm install`
3. `npm start` to run development mode
4. `npm run build` to compile to build folder
5. directory: 
   * /client
     * /build    &nbsp;&nbsp; &nbsp;&nbsp;# build directory for production only, 
  * -- **every files below are for development mode** --
     * /public   &nbsp;&nbsp; # main html and static assets
     * package.json
     * /node_modules
     * /src
       * /components_pages  &nbsp;&nbsp; # each pages: home.html, showStations.html
       * /components_utils  &nbsp;&nbsp; # components that are common among pages
     * /helper   &nbsp;&nbsp; # helper functions
       * favicon.ico
       * index.css
       * index.js &nbsp;&nbsp;  # app main entry
       * logo.svc
