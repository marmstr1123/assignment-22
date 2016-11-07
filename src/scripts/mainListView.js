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
         shoutOutData: modelsListArray

      }
      return startingStateObj
   },



   _addSubmission: function(){
      let theMsg = this.refs.theMsgEl.value
      let msgFrom = this.refs.msgFromEl.value

      let modAttributes = {
            msg: theMsg,
            from: msgFrom
      }
      let newMod = new TaskModel()
      newMod.set(modAttributes)

      let copyOfShoutList = this.state.shoutOutData.map(function(m){return m })
      copyOfShoutList.push(newMod)

      let newStateObj = {shoutOutData: copyOfShoutList}
      this.setState(newStateObj)
   },

   render: function(){
      return (
         <div className="container">
               <div className="row">
                     <div className="col-sm-4 new-shoutout">
                        <h3> My task </h3>
                        <input type="text" className="form-control" ref= "theMsgEl"/>
                        <hr/>
                        <h4>posted by</h4>
                        <input type="text" className="form-control" ref= "msgFromEl"/>
                        <hr/>
                        <br/>
                        <button className="btn btn-block btn-success btn-lg" onClick={this._addSubmission}>add Task </button>
                  </div>
                  <ShoutOut shoutData={ this.state.shoutOutData }/>
               </div>
            </div>
      )
   }
})

const ShoutOut = React.createClass({
   render: function(){
      let arrayOfShoutOutJSX = this.props.shoutData.map(function(smod){
         return (
            <ShoutItem shoutModl={smod} key={smod.cid}/>
         )
      })
      return (
         <div className="col-sm-8">
         <h2> Task List </h2>
            <div className="shoutOut">

               {arrayOfShoutOutJSX}

            </div>
         </div>
      )
   }
})

const ShoutItem = React.createClass({
   render: function(){
      return (

            <p>{this.props.shoutModl.get('msg')}___from___{this.props.shoutModl.get('from')}</p>

      )
   }
})




module.exports= HomeView
