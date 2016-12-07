const React = require('react')

class LandingView extends React.Component {
   constructor(){
      super();

   }
   render(){
      return(
         <div className="container">
            <div className="row">
              <div className="col-sm-3">
               <div className="thumbnail">
                  <i className="fa fa-user-circle fa-5x"></i>
                  <div className="caption">
                    <h3>Mikes to do list</h3>
                    <p><a href="#list" className="btn btn-primary" role="button">ViewList</a></p>
                  </div>
               </div>
              </div>
            </div>
         </div>
      )
   }
}




module.exports= LandingView
