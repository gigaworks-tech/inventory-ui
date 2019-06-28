import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';

export const DashboardTableHeadstyles = () => ({
  tableHeaderText: {
    fontSize: '14px',
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    fontWeight: 'bolder',
  },
  tableCheckBox: {
    color: '#00B4D2 !important',
  },
  tableRow: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 1,
  },
});

class DynamicTableHead extends React.PureComponent {
  constructor(props) {
    super(props);
    this.createSortHandler = this.createSortHandler.bind(this);
  }

  createSortHandler(property, event) {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  }

  render() {
    const {
      onSelectAllClick, order, orderBy, numSelected, rowCount, rows, checkbox, classes,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          {
            checkbox
              ? (
                <TableCell
                  className={classes.tableRow}
                  padding="checkbox"
                >
                  <Checkbox
                    checked={numSelected === rowCount}
                    classes={{
                      root: classes.tableCheckBox,
                      checked: classes.tableCheckBox,
                    }}
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    onChange={onSelectAllClick}
                  />
                </TableCell>
              ) : null
          }
          {
            rows.map(row => (
              <TableCell
                className={classes.tableHeaderText}
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  enterDelay={300}
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  title=""
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.nameLabel}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ))
          }
        </TableRow>
      </TableHead>
    );
  }
}

DynamicTableHead.propTypes = {
  checkbox: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
};
DynamicTableHead.defaultProps = {
  checkbox: true,
};
export default withStyles(DashboardTableHeadstyles)(DynamicTableHead);
