import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core";
import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';
import {StyledTableCellWithoutPadding} from '../StyledTableCell';

const useStyles = theme => ({
	root: {
		width: 'calc(50% - 15px)',
		boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
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
	},
	nameWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontSize: 13,
		color: "#999999",
	}
});

class TotalDeals extends Component {
	state = {
		open: true,
	}

	handleOpen = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		const { classes, sort } = this.props;
		const rows = this.props.data.sort(function(a, b) {
			return b[sort] - a[sort]
		})
	return (
		<Paper className={classes.root}>
			<HeaderCard title={this.props.label} onClick={this.handleOpen} icon={dots} />
		<Table className={classes.table} style={this.state.open ? {display: "table"} : {display: "none"}}>
			<TableHead>
			<TableRow>
				{this.props.labels.map(label => <StyledTableCellWithoutPadding className={classes.th} key={label}>{label}</StyledTableCellWithoutPadding>)}
			</TableRow>
			</TableHead>
			<TableBody>
			{rows.map(row => (
				<TableRow key={row.name}>
					<StyledTableCellWithoutPadding component="th" scope="row">
						<span className={classes.nameWrapper}><img src={row.image} alt={row.image} /> {row.name}</span>
					</StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding>{row[sort]}</StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding>{row.won}</StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding>{row.todo}</StyledTableCellWithoutPadding>
					<StyledTableCellWithoutPadding>$ {row.sale}</StyledTableCellWithoutPadding>
				</TableRow>
			))}
			</TableBody>
		</Table>
		</Paper>
	);
	}
}

export default withStyles(useStyles)(TotalDeals);