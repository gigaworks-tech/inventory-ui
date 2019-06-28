import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const DynamicTableRowsstyles = () => ({
  tableCheckBox: {
    color: '#00B4D2  !important',
  },
  tableCell: {
    fontSize: '12px  !important',
  },
  complainantSummary: {
    maxWidth: '100px',
    maxHeight: '100px',
    overflow: 'auto',
    wordBreak: 'break-all',
  },
});

class DynamicTableRows extends React.PureComponent {
  static stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  static desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  constructor(props) {
    super(props);
    this.stableSort = this.stableSort.bind(this);
    this.getSorting = this.getSorting.bind(this);
    this.desc = this.desc.bind(this);
  }

  getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
  }

  getLookupDisplayName(key, row) {
    const { getLookupValues } = this.props;
    return row.lookupField
      ? getLookupValues(key, row.lookupName, row.id,
        row.menuLabel, row.menuValue) : key;
  }

  isSelected(id) {
    const { selected } = this.props;
    return selected.indexOf(id) !== -1;
  }

  render() {
    const {
      checkbox, data, order, orderBy, rows, handleRowClick, handleClick, classes,
    } = this.props;
    const { stableSort } = this;
    return (
      <TableBody>
        {stableSort(data, this.getSorting(order, orderBy))
          .map((n) => {
            const isSelected = this.isSelected(n.id);
            return (
              <TableRow
                aria-checked={isSelected}
                hover
                key={n.id}
                role="checkbox"
                selected={isSelected}
                tabIndex={-1}
              >
                {checkbox
                  ? (
                    <TableCell
                      onClick={event => handleClick(event, n.id)}
                      padding="checkbox"
                    >
                      <Checkbox
                        checked={isSelected}
                        classes={{
                          root: classes.tableCheckBox,
                          checked: classes.tableCheckBox,
                        }}
                      />
                    </TableCell>
                  ) : null
              }
                {rows.map(row => (
                  <TableCell
                    className={classes.tableCell}
                    key={row.id}
                    onClick={event => handleRowClick(event, row.id)}
                  >
                    {
                       this.getLookupDisplayName(n[row.id], row)
                    }
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
      </TableBody>
    );
  }
}

DynamicTableRows.propTypes = {
  checkbox: PropTypes.bool.isRequired,
  classes: PropTypes.shape().isRequired,
  getLookupValues: PropTypes.func.isRequired,
  data: PropTypes.shape().isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  handleRowClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired,
};

export default withStyles(DynamicTableRowsstyles)(DynamicTableRows);
