const Backbone = require('Backbone')
const React = require('react')
const ReactDOM = require('react-dom')
const HomeView = require('./mainListView.js')
const DetailsView = require('./taskDetails.js')
const LandingView = require('./landingView.js')


console.log(Backbone)
document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

const AppRouter = Backbone.Router.extend({
   routes: {
      "details": "Viewdetails",
      "list":"showListMain",
      "" : "LandingPage"
   },

   LandingPage: function(){
      ReactDOM.render(<LandingView/>, document.querySelector('#app-container'))
   },


   showListMain: function(){
      ReactDOM.render(< HomeView />, document.querySelector('#app-container'))
   },

   Viewdetails: function(){
      ReactDOM.render(< DetailsView />, document.querySelector('#app-container'))
   },

   initialize: function(){
      Backbone.history.start()
   }
})

new AppRouter()
