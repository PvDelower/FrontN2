import './App.css';
import axios from "axios"
import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CarInfo from "../CarInfo/CarInfo";
import Header from "../Header/Header";
import Status from "../Status/Status";
import cars from "../../constants/cars";

function App() {
  const [car, setCar] = useState({
    car_model: false,
    mileage_avg: false,
    price_avg: false,
    production_year: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onChangeCar = (_, values) => {
    const apiURL = `${process.env.REACT_APP_BE_URL}/parser.getcar?car_model=${values.id}&production_year=2014`;

    axios.get(apiURL)
        .then((response) => {
          if (response.data.response.items.length) {
            setCar(response.data.response.items[0])
          }
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
          setError(err)
        })
  }


  return (
    <div className="App">
      <Header/>

      <div style={{marginTop: '20px'}}>
        <Autocomplete
            id="car"
            options={cars}
            getOptionLabel={(option) => option.name}
            onChange={onChangeCar}
            style={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Марка авто" variant="outlined"/>}
        />
      </div>


      {loading ? <Status message="Идет загрузка..."/>
               : !error && car ? <CarInfo car={car}/> : <Status message="Произошла ошибка при загрузке данных!"/> }
    </div>
  );
}

export default App;
