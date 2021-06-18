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
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const apiURL = 'http://localhost:5002';

    axios.get(apiURL)
        .then((response) => {
          setCar(response.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
          setError(err)
        })
  }, [])


  return (
    <div className="App">
      <Header/>

      <div style={{marginTop: '20px'}}>
        <Autocomplete
            id="car"
            options={cars}
            getOptionLabel={(option) => option.name}
            style={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Марка авто" variant="outlined"/>}
        />
      </div>


      {loading ? <Status message="Идет загрузка..."/> 
               : !error ? <CarInfo car={car}/> : <Status message="Произошла ошибка при загрузке данных!"/> }
    </div>
  );
}

export default App;
