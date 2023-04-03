import { useState, useEffect } from "react";
import { auth } from "./Components/firebase";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/about"
            element={user ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/about" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/login" /> : <Register />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
