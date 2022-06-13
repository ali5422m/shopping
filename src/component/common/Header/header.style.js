import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#203040",
    color: theme.palette.common.white,
    height: 58,
    alignItems: "center",
    display:"flex",
    paddingLeft: 12,
  },
}));

export { useStyles };
