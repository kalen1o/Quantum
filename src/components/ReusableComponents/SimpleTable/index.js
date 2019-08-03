import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';
import {StyledTableCellWithoutPadding} from '../StyledTableCell';
import StyledTableCell from '../StyledTableCell';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
	overflowX: 'auto',
	boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
  },
  cell: {
	borderBottom: "2px solid #1875F0",
  }
}));

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
		<HeaderCard title="Last product sales" icon={dots} />
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<StyledTableCell>Date range</StyledTableCell>
					<StyledTableCell>Visits</StyledTableCell>
					<StyledTableCell>Visitors</StyledTableCell>
					<StyledTableCell>Views</StyledTableCell>
					<StyledTableCell>% of New</StyledTableCell>
					<StyledTableCell>Failure</StyledTableCell>
					<StyledTableCell>View depth</StyledTableCell>
					<StyledTableCell>Time on site</StyledTableCell>
				</TableRow>
				<TableRow>
					<StyledTableCell>Total and average</StyledTableCell>
					<StyledTableCell>1200</StyledTableCell>
					<StyledTableCell>1102</StyledTableCell>
					<StyledTableCell>12002</StyledTableCell>
					<StyledTableCell>95,3 %</StyledTableCell>
					<StyledTableCell>29,4 %</StyledTableCell>
					<StyledTableCell>3,05</StyledTableCell>
					<StyledTableCell>1:23</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.rows.map(row => (
					<TableRow key={row.name}>
					<StyledTableCellWithoutPadding component="th" scope="row">
						{row.name}
					</StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.visits}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.visitors}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.views}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.percent}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.failure}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.depth}</span></StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding><span className={classes.cell}>{row.time}</span></StyledTableCellWithoutPadding>
					</TableRow>
				))}
			</TableBody>
		</Table>
    </Paper>
  );
}