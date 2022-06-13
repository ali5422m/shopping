import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#203040",
    color: theme.palette.common.white,
    height: 52,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export {useStyles}