import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import React from 'react';

class FormControlLabel extends React.PureComponent {
  render() {
    const { id, labelName } = this.props;
    return (
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor={id}>{labelName}</InputLabel>
        <Input id={id} name={id} autoComplete={id} autoFocus />
      </FormControl>
    );
  }
}

FormControlLabel.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};


export default FormControlLabel;
