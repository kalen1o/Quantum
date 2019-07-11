import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";
import dots from '../../../icons/dots.svg';

const useStyles = theme => ({
	root: {
		display: "inline-block",
		width: '45%',
	},
	spacer: {
		flex: "1 1 100%"
	},
	title: {
		flex: "0 0 auto"
	},
	tableTitle: {
		transition: "height 0.3s",
		overflow: "hidden",
		fontSize: 13
	},
	th: {
		color: "#666666"
	},
	btn: {
		display: "block",
		width: "100%",
		border: "none",
		outline: "none",
		background: "transparent",
		padding: 20,
		color: "#b3b3b3",
		fontSize: 13,
		fontWeight: 900
	}
});

class SimpleTable extends Component {
	state = {
		open: true,
		view: false
	}

	handleOpen = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	handleView = () => {
		this.setState(state => ({
			view: !state.view
		}))
	}

	render() {
		const { classes, sort } = this.props;
		const rows = this.props.data.sort(function(a, b) {
			return b[sort] - a[sort]
		})
	const visibleRows = rows.slice(0, 4);
	const invisibleRows = rows.slice(4);
	return (
		<Paper className={classes.root}>
			<Toolbar>
				<div className={classes.title}>
					<Typography variant="h6" className={classes.tableTitle}>
						{this.props.label}
					</Typography>
				</div>
				<div className={classes.spacer} />
				<div className={classes.actions} onClick={this.handleOpen}>
					<Tooltip title="Filter list">
						<IconButton aria-label="Filter list">
						<img src={dots} alt={dots} />
						</IconButton>
					</Tooltip>
				</div>
			</Toolbar>
		<Table className={classes.table} style={this.state.open ? {display: "table-row"} : {display: "none"}}>
			<TableHead>
			<TableRow>
				{this.props.labels.map(label => <TableCell className={classes.th}>{label}</TableCell>)}
			</TableRow>
			</TableHead>
			<TableBody>
			{visibleRows.map(row => (
				<TableRow key={row.name}>
					<TableCell component="th" scope="row">
						<img src={row.image} alt={row.images} />
					</TableCell>
					<TableCell>{row.name}</TableCell>
					<TableCell>{row[sort]}</TableCell>
					<TableCell>{row.price}</TableCell>
				</TableRow>
			))}
				{invisibleRows.map(row => (
					<TableRow key={row.name} className={classes.invisibleRow} style={this.state.view ? {display: "table-row"} : {display: "none"}}>
						<TableCell component="th" scope="row">
							<img src={row.image} alt={row.images} />
						</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row[sort]}</TableCell>
						<TableCell>{row.price}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
		<button type="button" onClick={this.handleView} className={classes.btn}>
			{this.state.view ? "LOOK LESS" : "VIEW ALL"}
		</button>
		</Paper>
	);
	}
}

export default withStyles(useStyles)(SimpleTable);