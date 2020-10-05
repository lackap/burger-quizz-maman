import React from "react";
import ReactPlayer from "react-player";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Grid, IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function AdditionInit() {
  const classes = useStyles();
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=7xdB2wmDEQA"
        playing={true}
        className={classes.root}
      />
      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/quick-questions?dbName=addition&nextUrl=addition-init&prevUrl=addition-init&maxQuestions=5"
            variant="outlined"
            color="secondary"
          >
            Addition 1 : autour de Brigitte
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/quick-questions?dbName=addition2&nextUrl=addition-init&prevUrl=addition-init&maxQuestions=5"
            variant="outlined"
            color="secondary"
          >
            Addition 2 : en chanson
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/menu-init">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/burgerdelamort">
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
