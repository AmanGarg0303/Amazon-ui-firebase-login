import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/Firebase";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the use is logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //Any cleanup operations going in here
      unsubscribe();
    };
  }, [dispatch]); //it is blank, bcause we want it to run once

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
