/* eslint-disable jsx-a11y/alt-text */
import React, { useReducer, useEffect } from "react";
import BoardList from "./components/BoardModule/BoardList";
import { Context } from "./context";
import reducer from "./reducer";
import BASE_STATE from "./utils/BaseState";
import "./styles/Main.css";
import Footer from "./components/Footer/Footer";
import Logo from "./images/logo-andreani.png";
import { Animated } from 'react-animated-css';

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("boards")) || BASE_STATE
  );

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        dispatch,
      }}
    >
      <div className="App">

      <Animated animationIn="bounceInDown"
       animationOut="fadeOut" 
       isVisible={true}><h1 
       className="title-app">LISTA DE TAREAS</h1></Animated>
        <BoardList boards={state}></BoardList>
        <div className="logo">
          <a href="https://www.andreani.com/?gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hM2X_eUQdaX7ksAPfhu9mDUK1qtJahfh6ueyGjo19-6lJgkBER7K_waAr43EALw_wcB#!/personas"> <img id="logo" src={Logo}/></a> 
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
