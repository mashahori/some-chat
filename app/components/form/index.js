import { TextField, Button, withStyles } from '@material-ui/core';
import './styles.js';

// const StyledTabs = withStyles({
//   root: {
//     padding: '16px',
//   },
// })(MuiTabs);

const Form = () => {
  // const changeTabs = (event, newValue) => {
  //   changeList(newValue);
  // };

  return (
    <form>
      <TextField id="standard-basic" label="Standard" />
      <Button variant="contained">Send</Button>
    </form>
  );
};

export default Form;
