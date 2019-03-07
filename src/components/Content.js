import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
/* import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share'; */
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pickles from './pickles.jpg';
import Mayonnaise from './mayonnaise.jpg';
import Topokki from './topokki.jpg';

const styles = theme => ({
  wrapper: {
    width: '100%',
    margin: 'auto',
    marginBottom: 100,
    [theme.breakpoints.up('sm')]: {
      width: '65%',
      margin: 'auto',
      marginBottom: 10,
    },
  },
  card: {
    position: 'fixed-top',
    margin: 10,
    display: 'block',
    maxWidth: '100%',
    alignItem: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: 10,
      display: 'block',
      maxWidth: 650,
      margin: 'auto',
      
    },
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleExpandClick2 = () => {
    this.setState(state => ({ expanded2: !state.expanded2 }));
  };
  handleExpandClick3 = () => {
    this.setState(state => ({ expanded3: !state.expanded3 }));
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              P
            </Avatar>
          }
          
          title="Cucumber Pickle"
          subheader="November 24, 2018"
        />
        <CardMedia
          className={classes.media}
          image={Pickles}
          title="Pickles"
        />
        <CardContent>
          <Typography component="p">
          Metode membuat acar ini merupakan salah satu cara pengawetan makanan. Bila menyimpan dengan wadah bersih, tertutup rapat, dan dalam suhu dingin, acar akan bisa bertahan lama.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent align="justify">
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
            Petik tangkai cabe rawit, cuci bersih. Kupas bawang merah, cuci bersih. Kupas wortel, cuci bersih lalu potong dadu kecil. Sisihkan.
            Buang bagian ujung timun sambil digosok agar keluar getahnya yang menyebabkan pahit, cuci bersih. Belah memanjang timun lalu buang bijinya. Potong timun jadi dadu kecil. Sisihkan.
            </Typography>
            <Typography paragraph>
            Siapkan panci lalu masukkan air, gula, dan garam. Masak hingga mendidih dan gula larut.
            Masukkan cuka lalu koreksi rasanya.
            Masukkan cabe rawit, bawang, wortel, dan timun. Aduk sebentar saja. Matikan api. Dinginkan.
            </Typography>
            <Typography paragraph>
            Setelah dingin, pindahkan dan simpan acar ke dalam toples kaca. Lalu masukkan dalam kulkas agar awet.
            Acar siap disajikan setiap saat bersama hidangan favorit anda.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* -------------------------------------------------------- */}
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          
          title="Mayonnaise"
          subheader="November 24, 2018"
        />
        <CardMedia
          className={classes.media}
          image={Mayonnaise}
          title="Mayonnaise"
        />
        <CardContent>
          <Typography component="p">
          Daripada beli mahal di pasaran, buat mayonaise versi rumahan saja. Selain terjamin gizinya dan bebas pengawet, anda bisa buat rasa mayonaise yang disuka, lho. Penasaran? Check this out!
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded2,
            })}
            onClick={this.handleExpandClick2}
            aria-expanded={this.state.expanded2}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
          <CardContent align="justify">
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
            Pilih kuning dari telur yang segar. Untuk mengetahuinya, baca di sini. Jika alergi dengan telur, ganti dengan susu full cream atau susu kental manis. Kurangi takaran gula jika pakai susu kental manis, ya.
            Pakai lemon atau cuka untuk perasa asamnya. Kalau memilih cuka, pakailah cuka putih atau cuka buah seperti apel atau anggur. Baca di sini untuk kenal jenis cuka tersebut secara mendalam.
            Pakailah minyak canola atau minyak sayur dengan rasa atau aroma yang netral, contohnya minyak kelapa murni, minyak almond, dan sebagainya.
            Terakhir, mustard. Bisa pakai mustard botolan atau bubuk mustard yang banyak dijual di pasaran. Sebetulnya tak pakai mustard sah-sah saja, tapi siap-siap kehilangan rasa khas mayonaisenya, ya. Efek samping lain kalau tak pakai mustard adalah warna mayonaise yang cenderung putih.
            </Typography>
            <Typography paragraph>
            Siapkan food processor, blender, atau balloon whisk. Membuat mayonaise butuh waktu paling tidak 5-7 menit dan food processor dapat memangkas waktu.
            Masukkan kuning telur/susu dan mustard, lalu kocok sebentar hingga keduanya tercampur rata.
            Masukkan minyak sedikit demi sedikit sambil diaduk. Sebetulnya, kuning telur dan mustard adalah emulsifier. Alhasil, minyak yang dapat mudah tercampur dengan bahan-bahan lain dan membentuk krim lembut. Kocok dengan kecepatan sedang.
            Terakhir, masukkan bahan lain seperti lemon/cuka, garam, dan gula. Takarannya disesuaikan dengan selera. Oh ya, mayonaise bisa bertekstur kental atau sedikit encer, jadi silahkan bereskperimen, ya.
            </Typography>
            <Typography paragraph>
            Kadang tanpa sadar adonan mayonaise bisa menggumpal. Entah minyaknya sulit tercampur dengan telur atau susu, kandungan air terlalu banyak (putih telur ikut tercampur), dan lainnya. Namun jangan panik, coba kocok lagi adonannya hingga tercampur rata. Kalau tidak berhasil, tambahkan 1 sdm mustard atau 1 kuning telur ke dalam adonan dan kocok kembali.

            Intinya dibandingkan dengan mayonaise botolan, mayonaise buatan rumah pasti jauh lebih sehat. Selain dibuat tanpa pengawet, mayonaise rumahan sudah mengandung emulsifier (bahan penstabil yang tidak akan membuat mayonaise mengendap) alami, yakni telur dan mustad.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* -------------------------------------------------------------- */}
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              T
            </Avatar>
          }
          
          title="Topokki"
          subheader="November 25, 2018"
        />
        <CardMedia
          className={classes.media}
          image={Topokki}
          title="Topokki"
        />
        <CardContent align="justify">
          <Typography component="p">
          Tepung beras ternyata memiliki kandungan gizi yang sama seperti beras. Berasal dari beras yang ditumbuk dan dihaluskan, tepung beras ternyata dapat menjadi pilihan bagi kamu yang memiliki intoleransi terhadap gluten. Gluten adalah kumpulan-kumpulan protein yang terkandung dalam tepung terigu. Selain digunakan sebagai bahan masakan dan kue, tepung beras ternyata memiliki segudang manfaat untuk kulitmu lho. Apa saja manfaat tepung beras untuk kecantikan? Simak yuk!
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded3,
            })}
            onClick={this.handleExpandClick3}
            aria-expanded={this.state.expanded3}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
            Campurkan tepung beras, tepung tapioka, terigu, lada, dan garam.
            Aduk rata lalu masukkan air panas perlahan.
            Aduk terus sampai adonan jadi kalis dan diamkan selama 5-10 menit.
            Cincang bawang putih, seledri, dan daun bawang. Sisihkan.
            Ambil segenggam adonan dan bentuk silinder kecil. Potong-potong sekitar 5 cm.
            </Typography>
            <Typography paragraph>
            Rebus air sampai mendidih. Masukkan adonan topokki dan masak sampai mengapung dan pastikan bagian dalamnya sudah matang. Tiriskan.
            Panaskan margarin, tumis bawang bombay dan bawang putih sampai harum. Masukkan saus sambal, tomat, maizena cair, garam, ladam, gula, dan kornet.
            Aduk sampai rata dan tambahkan seledri.
            Aduk lagi sampai semua bahan tercampur rata.
            Masukkan topokki yang sudah ditiriskan sebelumnya dan aduk sampai rata di atas api kecil.
            </Typography>
            <Typography paragraph>
            Tambahkan daun bawang dan wijen, aduk lagi.
            Siapkan wadah dan sajikan topokki.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);