import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { DashboardTablestyles } from '../styles';

class CustomTablePagination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFirstPageButtonClick = this.handleFirstPageButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleLastPageButtonClick = this.handleLastPageButtonClick.bind(this);
  }

  handleFirstPageButtonClick(event) {
    const { onChangePage } = this.props;
    onChangePage(event, 0);
  }

  handleBackButtonClick(event) {
    const { onChangePage, page } = this.props;
    onChangePage(event, page - 1);
  }

  handleNextButtonClick(event) {
    const { onChangePage, page } = this.props;
    onChangePage(event, page + 1);
  }

  handleLastPageButtonClick(event) {
    const { onChangePage, count, rowsPerPage } = this.props;
    onChangePage(
      event,
      Math.max(0, Math.ceil(count / rowsPerPage) - 1),
    );
  }

  render() {
    const {
      classes, count, page, rowsPerPage, theme,
    } = this.props;

    return (
      <div className={classes.paginationIcons}>
        <IconButton
          aria-label="First Page"
          disabled={page === 0}
          onClick={this.handleFirstPageButtonClick}
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          aria-label="Previous Page"
          disabled={page === 0}
          onClick={this.handleBackButtonClick}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          aria-label="Next Page"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={this.handleNextButtonClick}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          aria-label="Last Page"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          onClick={this.handleLastPageButtonClick}
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

CustomTablePagination.propTypes = {
  classes: PropTypes.shape().isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withStyles(DashboardTablestyles, { withTheme: true })(CustomTablePagination);
