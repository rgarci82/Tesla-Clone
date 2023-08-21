import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Signup from "./components/pages/Signup";
import TeslaAccount from "./components/pages/TeslaAccount";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            }
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate to="/teslaaccount" /> : <Login />}
          />
          <Route path="/signup" exact element={<Signup />} />
          <Route
            path="/teslaaccount"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
