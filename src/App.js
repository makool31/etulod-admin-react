import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import LoginForm from "./components/LoginForm";
import ManageTD from "./pages/ManageTD";
import DashboardPanel from "./pages/DashboardPanel";
import LoginPage from "./pages/Login";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { useState } from "react";
//import { useEffect } from "react";

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
        <DashboardPanel>
          <Router>
            <Switch>
              {/* <Route path="/Login">
                <LoginPage user={user} setUser={setUser} />
              </Route> */}
              <Route path="/">
                <ManageTD />
              </Route>
            </Switch>
          </Router>
        </DashboardPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;
