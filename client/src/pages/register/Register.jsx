// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./register.scss";

const Register = () => {
  // const { login } = useContext(AuthContext);

  // const handleLogin = () => {
  //   login();
  // };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>login</button>
          </Link>
          {/* <button>Login</button> */}
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="name"/>
            {/* <button onClick={handleLogin}>Login</button> */}
           
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;