import React from 'react'
import { Box } from '@mui/system';
import ButtonCard from '../../common/Button';


function Form({checkOut}) {
  return (
    <Box>
      <Box sx={styles.formInputs}>
        <label for="email">Email</label>
        <input type="email" id="email" />
      </Box>
      <Box sx={styles.formInputs}>
        <label for name="name">
          Name
        </label>
        <input type="text" id="name" />
      </Box>
      <Box>
        <label for="Address">Address</label>
        <input type="text" id="Address" />
      </Box>
      <ButtonCard onClick={checkOut} title="Checkout" />
    </Box>
  );
}
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    my: 2,
    "& button": {
      my: 3.5,
    },
  },
  formInputs: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    my: 1,
    "& label": {
      ml: 1,
    },
    "& input": {
      py: 1,
    },
  },
};
export default Form