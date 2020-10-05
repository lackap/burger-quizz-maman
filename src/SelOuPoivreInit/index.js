import React from "react";
import ReactPlayer from "react-player";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function SelOuPoivreInit() {
  const classes = useStyles();
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=YoI4QOzv_50"
        playing={true}
        className={classes.root}
      />
      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/nuggets-init">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            component={Link}
            color="inherit"
            to="/quick-questions?dbName=seloupoivre&nextUrl=menu-init&prevUrl=seloupoivre-init&maxQuestions=5"
          >
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
