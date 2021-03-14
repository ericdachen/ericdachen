import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.scss'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';


class NavBar extends React.Component {
    render() {
        return (
            <>
                <AppBar className="appbar" position="static">
                    <Tabs aria-label="simple tabs example" className="tab" value="0">
                        <Tab className="tabs" label="Home" value="0"/>
                        <Tab className="tabs" label="Showcase" value="1"/>
                        <Tab className="tabs" label="Contact" value="2"/>
                        <Tab className="tabs" label="Resume" value="3"/>
                    </Tabs>
                </AppBar>
            </>
        );
    }
}

export default NavBar;