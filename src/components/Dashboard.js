import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedPlaylists from './FeaturedPlaylists.js';
import LocalPlaylists from './LocalPlaylists.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  function Dashboard() {
    const classes = useStyles();
    console.log("entered dashboard");
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                <FeaturedPlaylists/>
            </Grid>
            <Grid item xs={6}>
                <LocalPlaylists/>
            </Grid>
            </Grid>
        </div>
    );
  }

export default Dashboard