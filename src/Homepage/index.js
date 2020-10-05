import React from "react";
import { Card, CardContent, Grid, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Homepage() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          Joyeux Anniversaire et Bonne retraite!
        </Typography>
      </CardContent>
      <Grid container>
        <Grid item xs={4}>
          <IconButton component={Link} color="inherit" to="/nuggets-init">
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}
