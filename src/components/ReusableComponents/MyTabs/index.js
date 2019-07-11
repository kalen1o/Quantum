import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  tab: {
    minWidth: 0,
    color: "#b3b3b3",
    fontSize: 13,
    padding: 20
  },
});

export default function MyTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      className={props.className}
    >
      {props.tab.map(elem => (
        <Tab label={elem} key={elem} className={classes.tab}/>
      ))}
    </Tabs>
  );
}
