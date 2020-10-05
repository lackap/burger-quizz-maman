import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import useQuestions from "../useQuestions";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckboxList from "../CheckboxList";
import { useLocation } from "react-router-dom";
import url from "url";

function SmallButton({ onClick, label, Icon, disabled }) {
  return (
    <IconButton aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon />
    </IconButton>
  );
}

export default function QuestionCardRouting() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const location = useLocation();
  const { dbName, nextUrl, prevUrl, maxQuestions } = url.parse(
    location.search,
    true
  ).query;
  const { isLoading, error, data: questions } = useQuestions(dbName);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  if (error) return "Une erreur est survenue: " + error.message;

  const hasNoPrev = index <= 0;
  const hasNoNext = index >= maxQuestions;

  const question = questions[index];
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={question.image}
        title={question.image}
      />
      <CardContent className={classes.gridCentered}>
        <Typography variant="h5" color="textSecondary" component="h2">
          {question.label}
        </Typography>
        <CheckboxList
          labels={question.answers}
          correctAnswer={question.correctAnswer}
        />
      </CardContent>
      <Grid container className={classes.buttonCentered}>
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
          <Grid item xs={6} md={6}>
            <SmallButton
              aria-label="delete"
              onClick={() => setIndex(index + 1)}
              label="Suivant"
              Icon={NavigateNextIcon}
            />
          </Grid>
        )}
        {hasNoNext && (
          <Grid item xs={6} md={6}>
            <IconButton component={Link} color="inherit" to={nextUrl}>
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Card>
  );
}
