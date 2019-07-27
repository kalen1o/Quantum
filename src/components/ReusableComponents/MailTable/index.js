import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';

import { Formik, Form, Field } from "formik";

import restore from '../../../icons/restore.svg';
import archive from '../../../icons/archive.svg';
import report from '../../../icons/report.svg';
import folder from '../../../icons/folder.svg';
import bookmark from '../../../icons/bookmark.svg';
import search from '../../../icons/search.svg';
import settings from '../../../icons/settings.svg';
import starBorder from '../../../icons/star_border.svg';
import star from '../../../icons/star.svg';
import attachment from '../../../icons/attachment.svg';

import StyledTableCell from '../../ReusableComponents/StyledTableCell';
import { withRouter } from "react-router";

function desc(a, b, orderBy) {
if (b[orderBy] < a[orderBy]) {
	return 1;
}
if (b[orderBy] > a[orderBy]) {
	return -1;
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
		width: '35%',
		minHeight: 89,
		borderRight: '2px solid #f5f5f5',
},
img: {
		marginLeft: 15
},
input: {
		width: "30%",
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
		justifyContent: 'space-beetwen',
		alignItems: 'center',
		width: "35%",
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
				<img src={restore} alt={restore} className={classes.img} />
				<img src={archive} alt={archive} className={classes.img} />
				<img src={report} alt={report} className={classes.img} />
				<img src={folder} alt={folder} className={classes.img} />
				<img src={bookmark} alt={bookmark} className={classes.img} />
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
				<TablePagination
					rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
					component="span"
					count={props.rows.length}
					rowsPerPage={props.rowsPerPage}
					page={props.page}
					backIconButtonProps={{
						'aria-label': 'Previous Page',
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page',
					}}
					onChangePage={props.handleChangePage}
					onChangeRowsPerPage={props.handleChangeRowsPerPage}
				/>
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

function MailTable(props) {
const classes = useStyles();
const [order] = React.useState('asc');
const [orderBy] = React.useState('time');
const [selected, setSelected] = React.useState([]);
const [page, setPage] = React.useState(0);
const [dense] = React.useState(false);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
let rows = props.rows.filter(row => {
	return row.type === props.sort
})

function handleSelectAllClick(event) {
	if (event.target.checked) {
	const newSelecteds = rows.map(n => n.theme);
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

function random_rgba(percent) {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + percent + ')';
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
		rows={rows}
		rowsPerPage={rowsPerPage}
		page={page}
		handleChangePage={handleChangePage}
		handleChangeRowsPerPage={handleChangeRowsPerPage}
		/>
		<div className={classes.tableWrapper}>
		<Table
			className={classes.table}
			aria-labelledby="tableTitle"
			size={dense ? 'small' : 'medium'}
		>
			<TableBody>
			{stableSort(rows, getSorting(order, orderBy))
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row, index) => {
				const isItemSelected = isSelected(row.theme);
				const labelId = `enhanced-table-checkbox-${index}`;
				return (
					<TableRow
					hover
					onClick={event => handleClick(event, row.theme)}
					role="checkbox"
					aria-checked={isItemSelected}
					tabIndex={-1}
					key={row.theme}
					selected={isItemSelected}
					style={{
						fontWeight: `${row.status ? 400 : 700}`
					}}
					>
					<StyledTableCell padding="checkbox">
						<Checkbox
						color="primary"
						checked={isItemSelected}
						inputProps={{ 'aria-labelledby': labelId }}
						/>
					</StyledTableCell>
					<StyledTableCell component="th">
						{row.important ? <img src={star} alt={star} /> : <img src={starBorder} alt={starBorder} />}
					</StyledTableCell>
					<StyledTableCell component="th">
						<div
							style={{
								width: 5,
								height: 5,
								borderRadius: "50%",
								background: `${row.status ? "transparent" : "#F9AD3D"}`
							}}
						/>
					</StyledTableCell>
					<StyledTableCell align="center">
						{
							row.avatar ? 
							<img src={row.avatar} alt={row.avatar} /> : 
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									margin: "0 auto",
									width: 40,
									height: 40,
									borderRadius: "50%",
									background: random_rgba(0.3),
									color: random_rgba(1),
								}}
							>
								{row.name.slice(0, 1)}
							</div>
						}
					</StyledTableCell>
					<StyledTableCell component="th" id={labelId} scope="row" padding="none">
						{row.name}
					</StyledTableCell>
					<StyledTableCell onClick={props.onClickRow}>{row.theme}</StyledTableCell>
					<StyledTableCell align="right">{row.bookmark ? <img src={attachment} alt={attachment} /> : null}</StyledTableCell>
					<StyledTableCell align="right">{row.time}</StyledTableCell>
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
	</Paper>
	</div>
);
}

export default withRouter(MailTable);