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
    "& .MuiDivider-root": {
      marginTop: 16,
      marginBottom: 16,
    },
  },
  loginForm: {
    width: 480,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    padding: 16,
    margin: "auto",

    "& .login-title": {
      fontWeight: 600,
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
        <Typography className="login-title" variant="h4">
          Login Form
        </Typography>
        <Divider variant="middle" />

        <div className={classes.formContainer}>
          <Typography variant="h6">Email </Typography>
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

          <Typography variant="h6">Password</Typography>
          <TextField
            type="password"
            name="password"
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
        </div>
        <Divider variant="middle" />
        <Button onClick={handleSubmit } variant="contained" >
          <Typography
            style={{
              fontWeight: 600,
            }}
            variant="body1">    
               Submit
          </Typography>
        </Button>
      </Paper>
    </div>
  );
}
