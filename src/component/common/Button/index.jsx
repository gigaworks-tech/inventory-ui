import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const style = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class CustomisedButton extends React.PureComponent {
  render() {
    const {
      id, labelName, classes, onClick,
    } = this.props;
    return (
      <Button
        fullWidth
        id={id}
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={e => onClick(e)}
      >
        {labelName}
      </Button>
    );
  }
}

CustomisedButton.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

CustomisedButton.defaultProps = {
  onClick: () => {},
};

export default withStyles(CustomisedButton)(style);
