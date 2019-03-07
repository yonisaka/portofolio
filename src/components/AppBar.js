import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Food from '@material-ui/icons/LocalDining';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffffff' }, 
    secondary: { main: '#4a85e2' },
  },
});

const styles = theme => ({
  root: {
    width: '100%',
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 0,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
  },
  title: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  textIcon: {
    fontSize: 18,
    paddingLeft: 12,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  AppTabs: {
    height: 70,
    top: 'auto',
    alignItems: 'center',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  },
  toolbar: {
    alignItems: 'center',
    width:'100%',
    justifyContent: 'space-between',
  },
  ind:{
    top:0,
    bottom:'auto',
  },
});

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: '#4a85e2'}}>
          <Toolbar >
            <Typography className={classes.title} style={{fontFamily:'Helevatica'}} variant="h6" color="inherit" noWrap>
              <Link to="/" style={{ textDecoration: 'none' }} >
              Lacrose.site
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" component={Link} to='/about'>
                  <Home />
              </IconButton>
              <IconButton color="inherit" component={Link} to='/content'>
                  <Food />
              </IconButton>
              <IconButton color="inherit" component={Link} to='#'>
                  <FavoriteIcon/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <div className={classes.grow}>
          <AppBar square className={classes.AppTabs}>
            <Tabs
              value={this.state.value}
              className={classes.toolbar}
              onChange={this.handleChange}
              fullWidth
              classes={{ indicator: classes.ind }}
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab icon={<Home />} component={Link} to='/about' label="HOME" />
              <Tab icon={<Food />} component={Link} to='/content' label="FOOD" />
              <Tab icon={<FavoriteIcon />} label="FAVORITE" />
            </Tabs>
          </AppBar>
          </div>
          </MuiThemeProvider>
        </React.Fragment>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);