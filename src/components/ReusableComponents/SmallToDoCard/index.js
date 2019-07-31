import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { StyledTableCellWithoutBorder } from '../StyledTableCell';
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles(theme => ({
	card: {
		border: "2px solid #F5F5F5",
		borderRadius: 6,
		padding: 20,
		marginBottom: 10
	},
	text: {
		fontSize: 13,
		color: "#666666"
	},
	row: {
		width: "100%"
	}
}))

const SmallToDoCard = props => {
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<p className={classes.text}>{props.data.text}</p>
			<Table aria-labelledby="tableTitle">
				<TableBody>
					<TableRow
						hover
						className={classes.row}
					>
						<StyledTableCellWithoutBorder>
							<img src={props.data.avatar} alt={props.data.avatar} />
						</StyledTableCellWithoutBorder>
						<StyledTableCellWithoutBorder>{props.data.name}</StyledTableCellWithoutBorder>
						<StyledTableCellWithoutBorder padding="checkbox">
							<Checkbox
								icon={<CircleUnchecked />}
								checkedIcon={<CircleChecked />}
							/>
						</StyledTableCellWithoutBorder>
						<StyledTableCellWithoutBorder>{props.data.time}</StyledTableCellWithoutBorder>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export default SmallToDoCard;