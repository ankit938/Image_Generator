import "./navbar.css";
import { Link } from "react-router-dom";
import {useContext} from "react";
import PointsContext from "../../../context/pointsContext";


const Navbar = (props) => {
 const contextValues=useContext(PointsContext);
 console.log(contextValues);

  const {page,userPoints} = props;
 const customColor = (x) => {
    return { color: page === x ? "red" : "white" };
  };

  return (
    
    <div className="navbar-main-container">
      <div className="left">
        <Link to="/" style={customColor("home")}>
          Home
        </Link>
        <Link to="/Image-generator" style={customColor("imagegenerator")}>
          ImageGenerator
        </Link>
        <Link to="/History" style={customColor("history")}>
          History
        </Link>
        <Link to="/ContactUs" style={customColor("contact")}>
          Contact Us
        </Link>
        <Link to="/Help" style={customColor("help")}>
          Help
        </Link>
        <Link to="/SignUp" style={customColor("signup")}>
          SignUp
        </Link>
        <Link to="/login" style={customColor("login")}>
          Login
        </Link>

      </div>
     <div className="right" style={{padding:'4px',color:'brown'}}>
        {contextValues.userPoints}
      </div>
      {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                :<button onClick={contextValues.login}>Login</button>
            }
    </div>
  );
};
export default Navbar;
