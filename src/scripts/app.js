const Backbone = require('Backbone')
const React = require('react')
const ReactDOM = require('react-dom')
const HomeView = require('./mainListView.js')


console.log(Backbone)
document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

const AppRouter = Backbone.Router.extend({
   routes: {

      "list":"showListMain",
      "" : "showHomeView"
   },

   showHomeView: function(){
      document.querySelector('#app-container').innerHTML = `
      <div class="container">
         <div class="row">
           <div class="col-sm-3">
             <div class="thumbnail">
               <i class="fa fa-user-circle fa-5x"></i>
               <div class="caption">
                 <h3>Mikes to do list</h3>
                 <p><a href="#list" class="btn btn-primary" role="button">ViewList</a></p>
               </div>
             </div>
           </div>
         </div>
      </div>`
   },

   showListMain: function(){
      ReactDOM.render(< HomeView />, document.querySelector('#app-container'))
   },

   tasksComplete: function(){

   },

   tasksNotDone: function(){

   },

   initialize: function(){
      Backbone.history.start()
   }
})

new AppRouter()
