import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const Home: React.FunctionComponent = () => <h2>Home</h2>;
const CurriculumVitae: React.FunctionComponent = () => <h2>Curriculum Vitae</h2>;
const Activity: React.FunctionComponent = () => <h2>Activity</h2>;

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
                  <Link component={RouterLink} to='/activity'>活動</Link>
                </MenuItem>
            </Menu>

          <Typography variant="h6" >
            Hiro-Aki Hotta
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/cv">
          <CurriculumVitae />
        </Route>
        <Route path="/activity">
          <Activity />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
