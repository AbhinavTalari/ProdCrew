import React,{Component} from 'react';
import background from '../../images/bgimg.jpg';
import {
    BrowserRouter as Router,
    
    Link
  }  from 'react-router-dom';

class Landing extends Component{
    render(){
        
        return(
            
           
          <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'900px',backgroundPositionX:'500px'}}>
<div style={{ height: "75vh" }} className="container valign-wrapper" >
        <div className="row">
          <div className="col s12 left-align">
            <h4>
              <b>ProdCrew</b> <br/>A Productivity Suit <br/>for People In Tech{" "}
              
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Lets Get Started 
            </p>
            <br />
            <div className="col s6 left-align">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "30px",
                  letterSpacing: "1.5px",
                  float:'left'

                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-5"
              >
                Register
              </Link>
            </div>

            
            <div className="col s1">
              <Link
                to="/login"
                style={{
                    marginRight:'500px',
                  width: "140px",
                  borderRadius: "30px",
                  letterSpacing: "1.5px",
                  float:'left'
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-5"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

           

            
        );
    }
}
export default Landing;