import { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import RateReview from "@material-ui/icons/RateReview";
import DriveEta from "@material-ui/icons/DriveEta";
import ExitToApp from "@material-ui/icons/ExitToApp";
import TwoWheelerIcon from "@material-ui/icons/TwoWheeler";
import { useHistory } from "react-router-dom";

//import Button from "@material-ui/core/Button";
//import ManageTD from "./ManageTD";
//import {useHistory} from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NavBar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            E-TULOD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {["Dashboard"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          {["Manage Tricycle Driver"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<AccountBox />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          {["Fare Rate"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<RateReview />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {["Transportation Logs"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<DriveEta />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {["Manage User"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<AccountBox />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {["Logout"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<ExitToApp />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <List>
          {listMenuItems.map((menuItem, index) => (
            <ListItem
              onClick={() => {
                history.push(menuItem.url);
              }}
              button
              key={menuItem.title}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography>Hello world</Typography> */}
        {/* <Typography></Typography> */}
        {children}
      </main>
    </div>
  );
}

// const object = {
//   key: "value",
//   title: "Dashboard",
//   number: 3,
//   items: ["two", "two", "three"],
//   itemsNumber: [1, 2, 3],
//   arrayOfObjects: [
//     {
//       key: "value",
//     },
//     {
//       key: "value",
//       onClick: () => {
//         console.log("i have been clicked");
//       },
//     },
//   ],
// };

const listMenuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Manage Tricycle Driver",
    url: "/Manage-TD",
    icon: <TwoWheelerIcon />,
  },
  {
    title: "Manage User",
    url: "/Manage-User",
    icon: <RateReview />,
  },
  {
    title: "Fare Rate",
    url: "/fares",
    icon: <RateReview />,
  },

  {
    title: "Transportation Logs",
    url: "/transportation-logs",
    icon: <DriveEta />,
  },
  {
    title: "Logout",
    url: "/Logout",
    icon: <ExitToApp />,
  },
];
