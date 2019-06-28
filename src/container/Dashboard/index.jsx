import React from 'react';
import PropTypes from 'prop-types';

// const styles = {
//   span: {
//     backgroundColor: '#00AB84',
//     height: '8px',
//     width: '8px',
//     top: '8px',
//     right: '8px',
//   },
// };

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      rowsPerPage: 25,
      selected: [],
      order: 'asc',
      orderBy: 'calories',
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
  }

  // handleDrawerClose() {
  //   this.setState({ open: false });
  // }

  // handleRowClick(event, index) {
  //   // const { caseId } = this.props.data[index];
  //   // window.open(`/rcaform/${caseId}`, '_blank');
  // }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ selected: [], page: 0 });
  }

  handleSelectAllClick(event) {
    const { data } = this.props;
    if (event.target.checked) {
      this.setState({
        selected: data.map(n => data.indexOf(n)),
      });
      return;
    }
    this.setState({ selected: [] });
  }


  // handleTabChange(event, value) {
  //   // to-link the dashboard pipeline and status
  //   let pipeline;
  //   pipeline = _.includes(['mypipeline', 'teamCases'], value) ? value : pipeline;
  //   const rcaFilters = {
  //     filters: {
  //       rca_status: value,
  //       unassigned: value === 'unassigned' ? 'true' : 'false',
  //       rca_agent: (pipeline || this.state.pipeline) === 'mypipeline'
  //       && value !== 'unassigned' && value !== 'NOT_REQUIRED'
  //         ? this.props.agentName : '',
  //     },
  //     pagination: {
  //       RowNumber: 0,
  //       NumberOfRows: 25,
  //     },
  //   };
  //   this.filter = rcaFilters;
  //   const newFilters = this.removeEmptyProp(this.filter.filters);
  //   this.filter.filters = newFilters;
  //   this.props.fetchDashBoardData(this.filter, this.props.agentName,
  //     pipeline || this.state.pipeline);
  //   this.setState({
  //     page: 0,
  //     selected: [],
  //     currentTile: value,
  //     rcaFilterObject: {},
  //     open: false,
  //     pipeline: pipeline || this.state.pipeline,
  //     rowsPerPage: 25,
  //   });
  // }

  handleClick(event, id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  }

  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';
    if (orderBy === property && order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  }

  render() {
    const { count, data, isFetching } = this.props;
    const { order, orderBy, page } = this.state;
    return (
      <div style={{ height: 'calc(100vh - 70px)' }}>
        {/* {(
          <div
            id="dashboard-table-container"
            style={{ display: 'flex', height: '100%' }}
          >
            <LeftDrawer
              assignmentWidget
              drawerHeader="Filter"
              error={this.state.error}
              formMetaData={this.state.filterValues}
              handleDrawerClose={this.handleDrawerClose}
              lookUp={this.props.drawerLookUp}
              onChange={this.onChange}
              onFilterClick={this.onFilterClick}
              open={this.state.open}
              rcaFilterObject={this.state.rcaFilterObject}
              resetFilter={this.resetFilter}
            />
            <div style={{
              width: '50px',
              backgroundColor: 'none',
              borderRight: '1px solid #D3D3D3',
              height: '100%',
            }}
            >
              <Badge
                badgeContent={<div />}
                classes={{
                  badge: this.props.classes.span,
                }}
                color="primary"
                id="badge-menu"
                invisible={!Object.keys(this.state.rcaFilterObject).length > 0}
                variant="dot"
              >
                <IconButton onClick={this.handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Badge>
              <MuiThemeProvider muiTheme={muiTheme}>
                {this.renderAssignmentWidget()}
              </MuiThemeProvider>
              <div style={{ marginTop: '10px', marginRight: '12px' }}>
                {this.renderExportToExcel()}
              </div>
              <div style={{ marginTop: '20px', marginLeft: '2px' }}>
                {this.renderResetRCA()}
              </div>
            </div>
            <div style={{ width: 'calc(100% - 50px)', height: '100%' }}>
              <div style={{
                height: 'calc(100% - 140px)',
                borderTop: '1px solid rgb(234, 234, 234)',
              }}
              > */}
        <DashboardTable
          count={count}
          data={data}
          getLookupValues={(key, lookupName, elementId, label, value) => getLookupValues(key, lookupName, elementId, this.props.rcaLookup, label, value)}
          handleChangePage={this.handleChangePage}
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          handleClick={this.handleClick}
          handleRequestSort={this.handleRequestSort}
          handleSelectAllClick={this.handleSelectAllClick}
          isFetching={this.props.isFetching}
          order={order}
          orderBy={orderBy}
          page={this.state.page}
          rows={this.getHeaders(this.state.currentTile).filter(data => data.show !== false)}
          rowsPerPage={this.state.rowsPerPage}
          selected={this.state.selected}
        />
        {/* </div>
            </div>
          </div>
)} */}
      </div>
    );
  }
}

DashBoard.defaultProps = {
  data: [],
  count: 0,
  isFetching: true,
};

DashBoard.propTypes = {
  classes: PropTypes.shape().isRequired,
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  data: PropTypes.arrayOf,
  fetchDashBoardData: PropTypes.func.isRequired,
};


export default DashBoard;
