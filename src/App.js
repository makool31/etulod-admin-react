import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import LoginForm from "./components/LoginForm";

import DashboardPanel from "./pages/DashboardPanel";
import LoginPage from "./pages/Login";
import ManageTD from "./pages/ManageTD";
import ManageUser from "./pages/ManageUser";
import FareRate from "./pages/FareRate";
import TransportationLogs from "./pages/TransportationLogs";
import ManageCustomer from "./pages/ManageCustomer";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { useState } from "react";

//import { useEffect } from "react";
//import { useHistory } from "react-router-dom";

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
  // const ExampleComponent = () => {
  //   const history = useHistory();
  //   const handleClick = () => history.push("/some-route");
  // };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DashboardPanel>
          <Router>
            <Switch>
              {/* <Route path="/Login">
                <LoginPage user={user} setUser={setUser} />
              </Route> */}
              <Router path="/ManageTD" component={ManageTD}></Router>
              <ManageTD />
              {/* <Router path="/ManageUser" component={ManageUser}></Router>
              <ManageUser /> */}
              {/* <Router path="/FareRate" component={FareRate}></Router>
              <FareRate /> */}
              {/* <Router path="/FareRate" component={TransportationLogs}></Router>
              <TransportationLogs /> */}
              {/* <Router path="/ManageUser" component={ManageCustomer}></Router>
              <ManageCustomer /> */}
            </Switch>
          </Router>
        </DashboardPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;
