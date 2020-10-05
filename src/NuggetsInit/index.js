import React from "react";
import ReactPlayer from "react-player";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function NuggetsInit() {
  const classes = useStyles();
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=AwnOsd6OpKE"
        playing={true}
        className={classes.root}
      />
      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            component={Link}
            color="inherit"
            to="/questions?dbName=nuggets&nextUrl=seloupoivre-init&prevUrl=nuggets-init&maxQuestions=5"
          >
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
