import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Pic from './yoni.jpeg';

const styles = theme => ({
  wrapper: {
    width: '100%',
    margin: 'auto',
    marginBottom: 100,
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      margin: 'auto',
      marginBottom: 10,
    },
  },
  root: {
    width: '98%',
    margin: 'auto',
    marginTop: 10,   
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      margin: 'auto',
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: 10,  
    },
  },
  wrap: {
    padding: 20,
  },
  bigAvatar: {
    width: 150,
    height: 150,
    border: "solid 1px #999",
    margin: "auto",
    marginBottom: 30,
  },
  line: {
    width: 200,
    color: "#999",
    margin: "auto",
    border: "solid 1px #999",
  },
});

class About extends React.Component {
  render(){
  const { classes } = this.props;
  
  return (
    <div className={classes.wrapper}>
      
      <Paper className={classes.root} elevation={1}>
      <div className={classes.wrap}>
      <Avatar 
        alt="Yoni Saka"
        src={Pic}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
        <Typography variant="h5" component="h3" align="center">
        @yonisaka_
        </Typography>
        <Typography component="p" align="center">
          Don't be a cancer        
        </Typography>
      </div>
      </Paper>
      <Paper className={classes.root} elevation={1}>
      <div className={classes.wrap}>
        <Typography variant="h5" component="h3" align="center">
          About
        </Typography>
        <hr className={classes.line} align="center"/>
        <Typography component="p" align="justify">
        <p>Nama Saya adalah Yoni Saka Samudra, biasa di panggil Yoni / Saka. Saya lahir di Yogyakarta pada 12 Agustus 1999. Saya merupakan alumni dari SMK Negeri 2 Yogyakarta atau Stemsa 2018 jurusan Teknik Komputer Jaringan. Saat ini Saya berprofesi sebagai Pekerja Teknis di bidang IT di BDBP Sleman, selain itu Saya juga melanjutkan pendidikan ke jenjang yang lebih tinggi yaitu <a   href="http://amikom.ac.id/">Universitas AMIKOM Yogyakarta </a>pada Program Studi D3 Teknik Informatika. Sekian perkenalan dari saya :))</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived 
        not only five centuries, but also the leap into electronic 
        ypesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum 
        passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.</p>    
        </Typography>
        </div>
      </Paper>
      
    </div>
  );
}
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);