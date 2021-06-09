import './App.css';
import axios from "axios"
import React, {useEffect} from "react";

function App() {
/*useEffect(()=>{

     const response =  axios.post ("http://localhost:5002/parser.getcar?car_model=rio-rio&production_year=2014");
console.log(response.data)
},[])*/

    let setAppState
    useEffect(() => {
        const apiUrl = 'http://localhost:5002/parser.getcar?car_model=rio-rio&production_year=2014';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
  return (
    <div className="App">

      <body>
      <header className="header">
        <div className="container">
          <div className="head">
            <div className="head__left">
              <div className="logo">
                <a href="/" className="logo__link">
                </a>
              </div>
              <h1>
                DelowerSearch
              </h1>
            </div>
            <div className="head__right auth">
              <a href="register.html" className="button auth__button_register">Регистрация</a>
              <a href="login.html" className="button" id="login">Войти</a>
            </div>
          </div>
        </div>
      </header>
      <section className="auto">
        {/*<img className="carIcon" src="car.png" width="300px" height="150px"/>*/}

          <div className="AVGprice">

          </div>
          <div className="AVGkm">
            <p align="center"> 300000km</p>
          </div>
          <div className="AVGyear">
            <p align="center">2005 год</p>
          </div>
          <div className="Nedostatki">
            <p> Коробка отваливается, дрыгатель отрыгивает, </p>
          </div>
      </section>
      </body>

    </div>
  );
}

export default App;
