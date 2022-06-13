
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    border: "1px solid silver",
    marginBottom: "3rem",
  },
  gap1:{
      display:"flex",
      gap:".5rem",
      alignItems:"center",

  }
});

export {useStyles}
