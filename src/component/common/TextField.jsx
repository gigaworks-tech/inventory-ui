import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import React from 'react';

class TextFieldCommon extends React.PureComponent {
  render() {
    const { id, labelName } = this.props;
    return (
      <TextField
        autoComplete="fname"
        name={id}
        variant="outlined"
        required
        fullWidth
        id={id}
        label={labelName}
        autoFocus
      />
    );
  }
}

TextFieldCommon.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};


export default TextFieldCommon;
