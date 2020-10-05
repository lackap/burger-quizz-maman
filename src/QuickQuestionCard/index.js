import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import useQuestions from "../useQuestions";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import url from "url";
import ReactPlayer from "react-player";

function SmallButton({ onClick, label, Icon, disabled }) {
  return (
    <IconButton aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon />
    </IconButton>
  );
}

export default function QuickQuestionCard() {
  const classes = useStyles();
  const location = useLocation();
  const { dbName, nextUrl, prevUrl, maxQuestions } = url.parse(
    location.search,
    true
  ).query;
  console.log(`${dbName} / ${nextUrl} / ${prevUrl} / ${maxQuestions} `);
  const { isLoading, error, data: questions } = useQuestions(dbName);
  const [index, setIndex] = React.useState(0);
  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  if (error) return "Une erreur est survenue: " + error.message;
  const hasNoNext = index >= maxQuestions;
  const hasNoPrev = index <= 0;

  const questionsSpecific = questions[dbName];
  const question = questionsSpecific[index];
  return (
    <Card className={classes.root}>
      {question.image && (
        <CardMedia
          className={classes.media}
          image={question.image}
          title={question.image}
        />
      )}
      {question.video && (
        <ReactPlayer
          url={question.video}
          playing={true}
          className={classes.root}
        />
      )}
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          {question.label}
        </Typography>
      </CardContent>
      <Grid container className={classes.gridCentered}>
        {!hasNoPrev && (
          <Grid item xs={6} md={6}>
            <SmallButton
              aria-label="delete"
              onClick={() => setIndex(index - 1)}
              label="Précédent"
              Icon={NavigateBeforeIcon}
            />
          </Grid>
        )}
        {hasNoPrev && (
          <Grid item xs={6} md={6}>
            <IconButton component={Link} color="inherit" to={prevUrl}>
              <NavigateBeforeIcon />
            </IconButton>
          </Grid>
        )}
        {!hasNoNext && (
          <Grid item xs={4}>
            <SmallButton
              aria-label="delete"
              onClick={() => setIndex(index + 1)}
              label="Suivant"
              Icon={NavigateNextIcon}
            />
          </Grid>
        )}
        {hasNoNext && (
          <Grid item xs={4}>
            <IconButton component={Link} color="inherit" to={nextUrl}>
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Card>
  );
}
