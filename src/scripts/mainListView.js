const Backbone = require('backbone')
const React = require('react')

let ItemsModle = Backbone.Model.extend({})

const listLanding = React.createClass({

   getInitialState: function(){
      defaultMod = new ItemsModle()

      let itemsModAttributes = {
         task: "this is your task",
         status: "complete",
         poster: "name"
      }
      defaultMod.set(itemsModAttributes)

      let itemsListModArray = []
      itemsListModArray.push(defaultMod)

      let startingStateItemsObj = {
         listData: itemsListModArray
      }
      return startingStateItemsObj
   },

   _addTask: function(){
      console.log('button partly wired')
      let theTask= this.refs.theTaskEl.value
      let theStatus= this.refs.statusEl.value
      let thePoster= this.refs.posterEl.value

      let modAttributes = {
         task: theTask,
         status: theStatus,
         poster: thePoster
      }
      let newTaskMod = new ItemsModle()
      newTaskMod.ste(modAttributes)

      let copyOfItemsList = this.state.listData.map(function(m){return m })
      copyOfItemsList.push(newTaskMod)

      let newStateObj = {listData: copyOfItemsList}
      this.setState(newStateObj)

   },

   render: function (){
      return(
      <div className="container">
         <div className="row">
            <h1> Add Task </h1>
               <div className="col-sm-4 new-task">
               <h5> New Task </h5>
               <input type="text" className="form-control" ref="theTaskEl"/>
               <br/>
               <input type="text" className="form-control" ref="statusEl"/>
               <br/>
               <input type="text" className="form-control" ref="posterEl"/>
               <button className="btn btn-block btn-success btn-lg" onClick={this._addTask}>addSubmit</button>
               </div>
            <ShoutOut shoutData={ this.state.listData }/>
         </div>
      </div>
      )
   }
})

const Something = React.createClass({
   render: function(){
      let arrayOfJSXItems = this.props.listData.map(function(sMod){
         return (
            <TaskItems shoutModl={sMod} key={sMod.cid}>
         )
      })
      return (
         <div className="col-sm-8">
         <h2> !New-items !</h2>
            <div className="shoutOut">

               {arrayOfJSXItems}

            </div>
         </div>
      )
   }
})

const TaskItems = React.createClass({
  render: function(){
     return (
        <div style={background: 'indianred', color: '#fff', padding: '4rem'}>
           <p>{this.props.shoutModl.get('task')}</p>
           <p>{this.props.shoutModl.get('status')}</p>
           <p>{this.props.shoutModl.get('poster')}</p>
        </div>
     )
  }
})



module.exports= listLanding
module.exports= Something
module.exports= TaskItems
