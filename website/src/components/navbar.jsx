import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import './navbar.scss'
import { AppBar, Tabs, Tab } from '@material-ui/core';
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
      marginTop: theme.spacing(1),
      float: "right",
      "&:focus": {
        opacity: 50
      },
      "&:hover": {
          opacity: 50
      }
    }
  }))((props) => <Tab disableRipple {...props} />);

  const StyledAppBar = withStyles ((theme) => ({
      root: {
          backgroundColor: "#E8FFFC",
          height: "8vh"
      }
  }))((props) => <AppBar {...props} />);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    padding: {
      padding: theme.spacing(3)
    },
    demo1: {
      backgroundColor: theme.palette.background.paper
    },
    demo2: {
      backgroundColor: "#2e1534"
    }
  }));

class NavBar extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
            <div>
                <StyledAppBar className="appbar" position="static">
                    <StyledTabs variant="scrollable" aria-label="simple tabs example" className="tab" value="0">
                        <StyledTab label="Home" value="0"/>
                        <StyledTab label="Showcase" value="1"/>
                        <StyledTab label="Contact" value="2"/>
                        <StyledTab label="Resume" value="3"/>
                    </StyledTabs>
                </StyledAppBar>
            </div>
            </ThemeProvider>
        );
    }
}

export default NavBar;