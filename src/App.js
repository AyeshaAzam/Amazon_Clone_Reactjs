import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

//Public key
const promise = loadStripe(
  "pk_test_51HSpeDEIjpMf2sNdb4NkizQBzxWrGbWwSCCnOS0WV5w8HBWU0aeng1Q1wZiJjqT3bARiXR0rHw2vvuSK4uBrscbZ00k0Q6EOmZ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // will create a Listener for tracking 'who is signed in'
  // will only run once when the app component loads...
  useEffect(() => {
    //will only run once when the app component loads...
    // 'onAuthStateChanged' always listening to who is login and who is log out
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in already
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkoutproduct">
            <Header />
            <CheckoutProduct />
          </Route>
          <Route path="/checkout">
            {/*  Home */}
            {/* <p>:star2: </p> */}
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* //Note: default Route must be att the bottom , otherwise it won't pick up */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
