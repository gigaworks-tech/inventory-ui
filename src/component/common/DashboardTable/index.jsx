import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import RefreshIndicator from '@material-ui/icons/Refresh';
import Pagination from './TablePagination';
import DynamicTableRows from './TableRows';
import DynamicTableHead from './TableHead';

const DashboardTablestyles = () => ({
  root: {
    width: '100%',
    height: '100%',
  },
  paginationIcons: {
    display: 'flex',
  },
  table: {
    // height: '-webkit-fill-available',
  },
  tableEmpty: {
    textAlign: 'center',
    fontSize: '12px',
  },
  tableWrapper: {
    height: 'calc(100% - 60px)',
    overflow: 'auto',
  },
  pagination: {
    height: '60px',
  },
  refreshIndicator: {
    top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)',
  },
  tableHeaderText: {
    fontSize: '14px',
  },
  tableCheckBox: {
    color: '#00B4D2',
  },
  pageToolbar: {
    height: '60px',
    padding: '0px 16px',
  },
  pageCaption: {
    fontSize: '14px',
  },
  pageSelectRoot: {
    fontSize: '14px',
    lineHeight: '16px',
    padding: '6px 24px 6px 8px',
  },
  pageSelectMenuRoot: {
    fontSize: '16px',
  },
});

class DashboardTable extends React.PureComponent {
  render() {
    const {
      classes, count, data, rows, rowsPerPage, page, selected, theme,
      order, orderBy, handleChangePage, handleChangeRowsPerPage,
      handleSelectAllClick, handleClick, handleRequestSort,
      isFetching, handleRowClick, checkbox, getLookupValues,
    } = this.props;
    const emptyRows = rowsPerPage - data.length;
    return (
      isFetching
        ? (
          <div className={classes.refreshIndicator}>
            <RefreshIndicator
              left={10}
              size={40}
              status="loading"
              top={-10}
            />
          </div>
        )
        : (
          <div className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table
                aria-labelledby="tableTitle"
                className={classes.table}
              >
                <DynamicTableHead
                  checkbox={checkbox}
                  numSelected={selected.length}
                  onRequestSort={() => handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                  order={order}
                  orderBy={orderBy}
                  rowCount={data.length}
                  rows={rows}
                />
                {data.length > 0 ? (
                  <DynamicTableRows
                    checkbox={checkbox}
                    data={data}
                    emptyRows={emptyRows}
                    getLookupValues={getLookupValues}
                    handleClick={handleClick}
                    handleRowClick={handleRowClick}
                    order={order}
                    orderBy={orderBy}
                    page={page}
                    rows={rows}
                    rowsPerPage={rowsPerPage}
                    selected={selected}
                  />
                )
                  : (
                    <TableBody>
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                      >
                        <TableCell
                          className={classes.tableEmpty}
                          colSpan={rows.length + 1}
                        >
                      NO DATA AVAILABLE
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )
              }
              </Table>
            </div>
            <div className={classes.pagination}>
              <Pagination
                classes={classes}
                count={count}
                data={data}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                theme={theme}
              />
            </div>
          </div>
        )
    );
  }
}

DashboardTable.propTypes = {
  checkbox: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  count: PropTypes.number.isRequired,
  data: PropTypes.arrayOf.isRequired,
  getLookupValues: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRowClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  selected: PropTypes.arrayOf.isRequired,
  theme: PropTypes.shape().isRequired,
};
DashboardTable.defaultProps = {
  checkbox: true,
};

export default withStyles(DashboardTablestyles)(DashboardTable);
