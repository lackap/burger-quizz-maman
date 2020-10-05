import React from "react";
import ReactPlayer from "react-player";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Grid, IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function MenuInit() {
  const classes = useStyles();
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=R7_ne_qCwmE"
        playing={true}
        className={classes.root}
      />

      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/questions?dbName=menu1&nextUrl=menu-init&prevUrl=menu-init&maxQuestions=4"
            variant="outlined"
            color="secondary"
          >
            Menu 1 : Brigitte : les révélations
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/questions?dbName=menu2&nextUrl=menu-init&prevUrl=menu-init&maxQuestions=4"
            variant="outlined"
            color="secondary"
          >
            Menu 2 : un menu familial de citations
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/questions?dbName=menu3&nextUrl=menu-init&prevUrl=menu-init&maxQuestions=4"
            variant="outlined"
            color="secondary"
          >
            Menu 3 : Les anecdotes des musées
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/addition-init">
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
