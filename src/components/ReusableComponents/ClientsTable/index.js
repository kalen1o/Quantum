import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';

import { Formik, Form, Field } from "formik";

import pencil from '../../../icons/pencil.svg'; 
import folder from '../../../icons/folder.svg';
import deleteTrash from '../../../icons/delete.svg';
import search from '../../../icons/search.svg';
import settings from '../../../icons/settings.svg';

import StyledTableCell from '../../ReusableComponents/StyledTableCell';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'contact', numeric: false, disablePadding: false, label: 'Contact' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'title', numeric: false, disablePadding: false, label: 'Deal Title' },
  { id: 'company', numeric: false, disablePadding: false, label: 'Company' },
];

const useTableStyles = makeStyles(theme => ({
	head: {
    fontSize: 13
	}
  }));

function EnhancedTableHead(props) {
  const { order, orderBy } = props;
  const classes = useTableStyles();
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        {headRows.map(row => (
			<StyledTableCell
				className={classes.head}
				key={row.id}
				padding={row.disablePadding ? 'none' : 'default'}
				sortDirection={orderBy === row.id ? order : false}
			>
              {row.label}
          	</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles(theme => ({
  root: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 99,
		borderBottom: '2px solid #f5f5f5',
		paddingLeft: 5,
		paddingRight: 0
  },
  action: {
		display: 'flex',
		alignItems: 'center',
		width: '30%',
		minHeight: 89,
		borderRight: '2px solid #f5f5f5',
  },
  img: {
	  	marginLeft: 15
  },
  input: {
		width: "60%",
		borderRight: '2px solid #f5f5f5',
		padding: "0 30px",
  },
  form: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 89,
  },
  "search-input-wrapper": {
		display: "inline-block",
		width: '100%',
		position: "relative",
  },
  btn: {
		position: "absolute",
		top: 5,
		right: 10,
		border: "none",
		outline: 'none',
		background: "transparent"
  },
  "search-input": {
		width: '100%',
		fontSize: 14,
		color: "#cccccc",
		border: "none",
		outline: "none",
		padding: 10,
  },
  settings: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: "10%",
  },
  settingsBtn: {
		border: "none",
		outline: 'none',
		background: "transparent"
  }
}));

const EnhancedTableToolbar = props => {
	const classes = useToolbarStyles();
	const { onSelectAllClick, numSelected, rowCount } = props;
	return (
		<Toolbar
		className={classes.root}
		>
			<div className={classes.action}>
				<Checkbox
          			color="primary"
					indeterminate={numSelected > 0 && numSelected < rowCount}
					checked={numSelected === rowCount}
					onChange={onSelectAllClick}
					inputProps={{ 'aria-label': 'Select all desserts' }}
				/>
				<img src={pencil} alt={pencil} className={classes.img} />
				<img src={deleteTrash} alt={deleteTrash} className={classes.img} />
				<img src={folder} alt={folder} className={classes.img} />
			</div>
			<div className={classes.input}>
			<Formik
				initialValues={{
					search: ''
				}}
				onSubmit={values => {
					console.log(values)
				}}
				render={({errors}) => {
					return (
					<Form className={classes.form}>
						<span className={classes["search-input-wrapper"]}>
							<Field
								className={classes["search-input"]}
								name="search"
								type="text"
								placeholder="Search"
							/>
							<button type="submit" className={classes.btn}>
								<img src={search} alt={search} />
							</button>
						</span>
					</Form>
				)}}
			/>
			</div>
			<div className={classes.settings}>
				<button type="submit" className={classes.settingsBtn}>
					<img src={settings} alt={settings} />
				</button>
			</div>
		</Toolbar>
	);
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  status: {
    borderRadius: 4,
    padding: 5,
    color: "#ffffff"
  }
}));

function ClientsTable(props) {
  const classes = useStyles();
  const [order] = React.useState('asc');
  const [orderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  let rows = props.rows.filter(row => {
    if(props.sort === 'All contacts') return row.contact
    return row.status === props.sort
  })

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.contact);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={rows.length}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.contact);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.contact)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.contact}
                      selected={isItemSelected}
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </StyledTableCell>
                      <StyledTableCell component="th" id={labelId} scope="row" padding="none" className={classes.cell}>
                        {row.contact}
                      </StyledTableCell>
                      <StyledTableCell className={classes.cell}>{row.email}</StyledTableCell>
                      <StyledTableCell className={classes.cell}>{row.phone}</StyledTableCell>
                      <StyledTableCell className={classes.cell}>{row.title}</StyledTableCell>
                      <StyledTableCell className={classes.cell}>{row.company}</StyledTableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 57 * emptyRows }}>
                  <StyledTableCell />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[6, 12]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default ClientsTable;