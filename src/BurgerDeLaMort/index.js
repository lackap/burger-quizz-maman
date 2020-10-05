import React from "react";
import ReactPlayer from "react-player";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CheckboxList from "../CheckboxList";
import useQuestions from "../useQuestions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function BurgerDeLaMort() {
  const classes = useStyles();
  const { isLoading, error, data: question } = useQuestions("burgerDeLaMort");

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  if (error) return "Une erreur est survenue: " + error.message;

  const questionsSpecific = question["burgerdelamort"];

  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CG4_mye84G0"
        playing={true}
        className={classes.root}
      />

      <Grid container className={classes.buttonsGrid}>
        <Grid item xs={12}>
          <CheckboxList
            labels={questionsSpecific.answers}
            className={classes.root}
          />
        </Grid>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/addition-init">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/">
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
