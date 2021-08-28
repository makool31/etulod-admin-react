import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/Login";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginPage user={user} setUser={setUser} />;
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {/* <Route path="/" exact component={LoginForm} />
          <Route
            path="/dashboard"
            exact
            component={() => <Dashboard authorized={false} />}
          /> */}

            <Route path="/login">
              <LoginPage user={user} setUser={setUser} />{" "}
            </Route>
            <Route path="/">
              <Dashboard user={user} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
