import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ToolBar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <ToolBar>
        <Avatar
          src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/304091_10150451284477837_564061486_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=RvCI3OSa9WsAX_ZbsDd&_nc_ht=scontent-cdg2-1.xx&oh=2b4266d1460d2f0979d86d5765fd4bf9&oe=5F9B6595"
          alt="Anniversaire maman"
          className={classes.logo}
        />
        <Typography variant="h6" className={classes.title}>
          Anniversaire maman
        </Typography>
      </ToolBar>
    </AppBar>
  );
}
