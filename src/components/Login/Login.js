import axios from "axios";
import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const onLogin = () => {
    if (!login || !password) return

    axios.post(`${process.env.REACT_APP_BE_URL}/auth.sign-in`, {
      login,
      access_token: password,
    }).then((response) => {
      if (!!response.data?.token) {
        localStorage.setItem('token', response.data.token)
        history.push('/')
      } else {
        setError('Видимо данные неверны!')
      }
    }).catch((_) => {
      setError('Видимо произошла ошибка на стороне сервера!')
    })
  }

  return (
      <>
        <Header/>

        <section className="login">
          <div>
            <TextField
              value={login}
              onChange={(e) => setLogin(e.target.value) }
              className="input" label="Логин" variant="outlined" />
          </div>

          <div>
            <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                className="input" label="Пароль" variant="outlined" />
          </div>

          <div>
            <Button variant="contained" color="primary" onClick={onLogin}>
              Войти
            </Button>
          </div>

          {!!error && (
              <div className="error">
                {error}
              </div>
          )}
        </section>
      </>
  )
}

export default Login