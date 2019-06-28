import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fname: 'Cat in the Hat',
    lname: 'Cat in the Hat',
  });

  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="FirstName"
        className={classes.textField}
        value={values.fname}
        onChange={handleChange('fname')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="LastName"
        className={classes.textField}
        value={values.lname}
        onChange={handleChange('lname')}
        margin="normal"
      />
    </form>
  );
}
