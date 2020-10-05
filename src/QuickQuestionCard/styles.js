import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    maxHeight: "60%",
    marginLeft: "20%",
  },
  media: {
    paddingTop: "50%",
    backgroundSize: "auto 100%",
  },
  avatar: {
    backgroundColor: red[500],
  },
  gridCentered: {
    maxWidth: "60%",
    maxHeight: "60%",
    marginLeft: "35%",
  },
}));
