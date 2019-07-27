import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
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
					<TableCell>Date range</TableCell>
					<TableCell>Visits</TableCell>
					<TableCell>Visitors</TableCell>
					<TableCell>Views</TableCell>
					<TableCell>% of New</TableCell>
					<TableCell>Failure</TableCell>
					<TableCell>View depth</TableCell>
					<TableCell>Time on site</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Total and average</TableCell>
					<TableCell>1200</TableCell>
					<TableCell>1102</TableCell>
					<TableCell>12002</TableCell>
					<TableCell>95,3 %</TableCell>
					<TableCell>29,4 %</TableCell>
					<TableCell>3,05</TableCell>
					<TableCell>1:23</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.rows.map(row => (
					<TableRow key={row.name}>
					<TableCell component="th" scope="row">
						{row.name}
					</TableCell>
					<TableCell><span className={classes.cell}>{row.visits}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.visitors}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.views}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.percent}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.failure}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.depth}</span></TableCell>
					<TableCell><span className={classes.cell}>{row.time}</span></TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
    </Paper>
  );
}