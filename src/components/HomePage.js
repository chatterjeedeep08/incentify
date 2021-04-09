import FeaturedPlaylists from './FeaturedPlaylists.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
  
  function Page() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <FeaturedPlaylists/>
            </Grid>
            </Grid>
        </div>
    );
  }

export default Page