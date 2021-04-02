import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import './navbar.scss'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Typography } from '@material-ui/core/Typography';
import { TabPanel, TabContext } from '@material-ui/lab';

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
      color: "#fff",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1
      }
    }
  }))((props) => <Tab disableRipple {...props} />);

  const StyledAppBar = withStyles ((theme) => ({
      root: {
          backgroundColor: "#E8FFFC",
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
            <div>
                <StyledAppBar className="appbar" position="static">
                    <StyledTabs aria-label="simple tabs example" className="tab" value="0">
                        <StyledTab label="Home" value="0"/>
                        <StyledTab label="Showcase" value="1"/>
                        <StyledTab label="Contact" value="2"/>
                        <StyledTab label="Resume" value="3"/>
                    </StyledTabs>
                </StyledAppBar>
            </div>
        );
    }
}

export default NavBar;