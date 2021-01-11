import { Tabs as MuiTabs, Tab, withStyles } from '@material-ui/core';
import './styles.js';

const StyledTabs = withStyles({
  root: {
    padding: '16px',
    width: '300px',
    height: '100vh',
  },
})(MuiTabs);

const Sidebar = () => {
  // const changeTabs = (event, newValue) => {
  //   changeList(newValue);
  // };

  return (
    <StyledTabs
      orientation="vertical"
      variant="scrollable"
      indicatorColor="primary"
      value={0}
    >
      <Tab label="All" />
      <Tab label="Done" />
      <Tab label="Undone" />
    </StyledTabs>
  );
};

export default Sidebar;
