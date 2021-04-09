import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 625,
    },
    rootCard: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
      padding: '8px',
      flex: '1 0 auto',
    },
    controls: {
      //display: 'flex',
      alignItems: 'center',
      //width: 50,
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    cover: {
      width: 151
    },
  }));
  

export default function MotiQuote() {
  const [quote, setQuote] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(json => {
      console.log("json")
      console.log(json);
      setQuote(json);
    });
  }, []);
  
  console.log("quote")
  console.log(quote)
      // function getQuote(myQuotes) {
      //   let index = Math.floor(Math.random() * myQuotes.length);
      //   setQuote(myQuotes[index]);
      // }
  
  return(<div className={classes.root}>
      <GridList container spacing={2} cellHeight={160} className={classes.gridList} cols={1}>
        {quote ? (quote.map((item) => (
        <Card className={classes.rootCard}>
          <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
            {item.text ? (item.text) : "Loading..."}
            </Typography>
          </CardContent>
            <Button variant="outlined" color="primary" className={classes.controls}>
              <AddIcon fontSize="large" color="primary"/>
            </Button>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://cdn.dribbble.com/users/31348/screenshots/5383318/aid_vinyl_19_4x.jpg"
            title="album cover"
          />
        </Card>))) : "Loading"} 
      </GridList>
    </div>);
}
