import {
  Button,
  Divider,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    height: "100vh",
    backgroundColor: "#000033",

    "& .MuiDivider-root": {
      marginTop: 20,
      marginBottom: 20,
    },
  },
  loginForm: {
    width: 480,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    padding: 16,
    margin: "auto",
    borderRadius: 20,

    "& .login-title": {
      fontWeight: 600,
      marginLeft: 180,
      color: "#e36510",
    },
    "& .login-type": {
      padding: 16,
      margin: "auto",
    },
    "& .butt": {
      color: "#000",
      marginLeft: 100,
      marginRight: 100,
    },
  },
  formContainer: {},
}));

export default function LoginPage({ user, setUser }) {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("form value is ", form);
  }, [form]);

  useEffect(() => {
    console.log("user changed", user);
  }, [user]);
  function handleSubmit() {
    if (form.email === "hello" && form.password === "world") {
      setUser({
        first_name: "Rocel",
        last_name: "Batara",
      });
    }
  }
  return (
    <div className={classes.loginPage}>
      <Paper className={classes.loginForm} variant="oulined">
        <Typography
          className="tittle-app"
          variant="h3"
          style={{
            fontWeight: 400,
            color: "#e36510",
          }}
        >
          E-Tulod
        </Typography>
        <Typography
          className="tittle-content"
          variant="h6"
          style={{
            fontWeight: 100,
            color: "#041175",
          }}
        >
          A local-tricycle ride-hailing application
        </Typography>
        <Divider variant="middle" />
        <div className={classes.formContainer}>
          <Paper className="login-type" variant="h4">
            <Typography className="login-title" variant="h4">
              Admin
            </Typography>
            <Typography variant="h6">Email: </Typography>
            <TextField
              name="email"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }));
              }}
            ></TextField>

            <Typography variant="h6">Password:</Typography>
            <TextField
              type="password"
              name="password"
              variant="outlined"
              size="small"
              fullWidth
              style={{
                fontWeight: 100,
                borderColor: "yellow",
              }}
              onChange={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }));
              }}
            ></TextField>
          </Paper>
        </div>
        <Divider variant="middle" />
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{
            right: "-20%",
            borderRadius: 15,
            backgroundColor: "#e36510",
          }}
        >
          <Typography
            className="butt"
            style={{
              fontWeight: 100,
            }}
            variant="body1"
          >
            Login
          </Typography>
        </Button>
      </Paper>
    </div>
  );
}
