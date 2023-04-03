import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Home = (props) => {
  const history = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    history.push("/login");
  };

  return (
    <>
      <div className="welcome-message">Hello Home</div>
      {props.user ? (
        <button onClick={handleLogOut}>Login</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default Home;
