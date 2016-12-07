const Backbone = require('Backbone')
const React = require('react')



// const DetailsView = React.createClass({
//    render: function(){
//       return (
//          <div className="container">
//             <h2 className="">Am I Special????</h2>
//             /* handle event with onClick(«this.«method-name»)*/
//             <button className="btn btn-info" > Toggle</button>
//          </div>
//       )
//    }
// })

class DetailsView extends React.Component{
   constructor(){
      super();
   }
   render(){
      return(
         <div className="container">
            <h2 className="theDeets">I bet you would like to know huh!?</h2>
            <a href="#list"><button className="btn btn-info" > back</button></a>
            <a href=""><button className="btn btn-info" > HOME</button></a>
         </div>
      )
   }

}


module.exports= DetailsView

//* handle event with onClick(«this.«method-name»)*/
//<button className="btn btn-info" > Toggle</button>
