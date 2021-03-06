import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Drawer, Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './header.styles';
import { ThemeContext } from '../../contexts/theme/theme.context';
import SearchBar from '../search/search.component';
import SideDrawer from '../drawer/drawer.component';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = props => {
  const { toggle: toggleTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState({
    left: false
  });
  const [state, setState] = useState({
    checked: true
  });

  const handleChange = event => {
    setState({ checked: event.target.checked });
    toggleTheme();
  };

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setToggle({ left: open });
  };

  const GraySwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500]
      },
      '&$checked + $track': {
        backgroundColor: grey[500]
      }
    },
    checked: {},
    track: {}
  })(Switch);

  const { root, appBar, toolBar, menuButton, image, searchBar } = useStyles();

  return (
    <HideOnScroll {...props}>
      <div className={root}>
        <AppBar className={appBar}>
          <Toolbar className={toolBar}>
            <MenuIcon
              edge='start'
              className={menuButton}
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer(true)}
            />
            <Drawer
              anchor='left'
              open={toggle.left}
              onClose={toggleDrawer(false)}
            >
              <SideDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
            <Link to='/'>
              <img
                alt='aMDB'
                src={require('../../assets/logo.png')}
                className={image}
              />
            </Link>
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <SearchBar className={searchBar} />
            </div>
            <div
              style={{
                position: 'absolute',
                right: '2%'
              }}
            >
              <GraySwitch
                checked={state.checked}
                onChange={handleChange}
                name='checkedA'
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </HideOnScroll>
  );
};

export default Header;
