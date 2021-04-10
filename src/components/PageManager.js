import Dashboard from './Dashboard.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AuthorizationPage from './AuthorizationPage.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
                <AuthorizationPage/>
            </Route>
            <Route path="/Dashboard">
                <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default Page