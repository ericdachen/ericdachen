import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import './navbar.scss'
import { AppBar, Tabs, Tab, useScrollTrigger } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import { Typography } from '@material-ui/core/Typography';
import { TabPanel, TabContext } from '@material-ui/lab';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const StyledTabs = withStyles({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#635ee7"
      }
    }
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      color: "#575756",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "calc(10px + 2vmin)",
      marginRight: theme.spacing(1),
      marginTop: "0.4vh",
      float: "right",
      "&:hover": {
        opacity: 50,
        color: "#FFB6A8",
      }
    }
  }))((props) => <Tab disableRipple {...props} />);

  const StyledAppBar = withStyles ((theme) => ({
      root: {
          backgroundColor: "#E8FFFC",
          height: "8vh",
          position: "fixed"
      }
  }))((props) => <AppBar {...props} />);

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function AppearOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({threshold: 100});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function NavBar(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <ThemeProvider theme={theme}>
    <ElevationScroll {...props}>
    <StyledAppBar className="appbar" position="static">
        <StyledTabs value={value} onChange={handleChange} variant="scrollable" aria-label="simple tabs example" className="tab">
            <StyledTab label="Home" value="0"/>
            <StyledTab label="Showcase" value="1"/>
            <StyledTab label="Contact" value="2"/>
            <StyledTab label="Resume" value="3"/>
        </StyledTabs>
    </StyledAppBar>
    </ElevationScroll>
    </ThemeProvider>
  )
}


export default NavBar;