import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

/*
  ! here where should i start my work, and first thing to take in mind is when adding Location from react-router-dom
  ! the router element should be added in index.js cause otherwise it could cause a problem to the website
  ? import the library of useLocation,
  ! which will track the router (url//....)
  ? and than we will start adding our elements and location variable.
  ? next: i'll go to home page so i can add exit animation.
  
*/

function App() {
  let location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setshowModal] = useState(false);


  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setshowModal={setshowModal}/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setshowModal={setshowModal}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;