import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon, GitHub } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Home from './Home';
import NotFound from './NotFound';

const CurriculumVitae: React.FunctionComponent = () => <h2>Curriculum Vitae</h2>;
const TVProgram: React.FunctionComponent = () => <h2>TV Program</h2>;

const App: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                   <Link component={RouterLink} to='/'>ホーム</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link component={RouterLink} to='/cv'>履歴書</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link component={RouterLink} to='/tv'>TV出演</Link>
                </MenuItem>
            </Menu>
          <Typography variant="h6" >
            Hotta, Hiro-Aki
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit" href="https://github.com/h6ak/h6ak.github.io">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cv">
          <CurriculumVitae />
        </Route>
        <Route exact path="/tv">
          <TVProgram />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
