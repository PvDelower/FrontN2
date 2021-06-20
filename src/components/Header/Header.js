import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";

const Header = () => {
  const history = useHistory()
  const auth = localStorage.getItem('token')

  const onExit = () => {
    localStorage.clear()
    history.go(0)
  }


  const useStyles = makeStyles((theme) =>
      createStyles({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }),
  );

  const classes = useStyles();

  return (
      <AppBar position="static" style={{ background: '#1A1818' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="link">
              DelowerSearch
            </Link>
          </Typography>

          {/*<Button color="inherit">Регистрация</Button>*/}
          {auth ? (
            <Button color="inherit" onClick={onExit}>Выход</Button>
          ) : (
            <Link to="/login" className="link">
              <Button color="inherit">Вход</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
  )
}

export default Header