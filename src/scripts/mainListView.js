const Backbone = require('Backbone')
const React = require('react')

document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

let TaskModel = Backbone.Model.extend({})

const HomeView = React.createClass({

   getInitialState: function(){
      let defaultMod = new TaskModel()
      // let mod2 = new TaskModel()

      let modAttributes = {
         msg: "",
         from: ""
      }


      defaultMod.set(modAttributes)

      let modelsListArray = []
      modelsListArray.push(defaultMod)


      let startingStateObj = {
         taskItemData: modelsListArray

      }
      return startingStateObj
   },



   _addNewTask: function(){
      let theMsg = this.refs.theMsgEl.value
      let msgFrom = this.refs.msgFromEl.value

      let modAttributes = {
            msg: theMsg,
            from: msgFrom
      }
      let newMod = new TaskModel()
      newMod.set(modAttributes)

      let copyOfTaskList = this.state.taskItemData.map(function(m){return m })
      copyOfTaskList.push(newMod)

      let newStateObj = {taskItemData: copyOfTaskList}
      this.setState(newStateObj)
   },

   render: function(){
      return (
         <div className="container">
               <div className="row">
                     <div className="col-sm-4 new-Taskout">
                        <h3> My task </h3>
                        <input type="text" className="form-control" ref= "theMsgEl"/>
                        <hr/>
                        <h4>posted by</h4>
                        <input type="text" className="form-control" ref= "msgFromEl"/>
                        <hr/>
                        <br/>
                        <button className="btn btn-block btn-success btn-lg" onClick={this._addNewTask}>add Task </button>
                  </div>
                  <TaskOut TaskData={ this.state.taskItemData }/>
               </div>
            </div>
      )
   }
})

const TaskOut = React.createClass({
   render: function(){
      let arrayOfjsxTasks = this.props.TaskData.map(function(smod){
         return (
            <TaskItem taskmodl={smod} key={smod.cid}/>
         )
      })
      return (
         <div className="col-sm-8">
         <h2> Task List </h2>
            <div className="Task">
               <ul>

               {arrayOfjsxTasks}

               </ul>
            </div>
         </div>
      )
   }
})

const TaskItem = React.createClass({
   render: function(){
      return (

            <a href="#details"><li>{this.props.taskmodl.get('msg')}
            ~{this.props.taskmodl.get('from')}</li></a>

      )
   }
})




module.exports= HomeView
