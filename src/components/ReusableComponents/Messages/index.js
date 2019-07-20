import React, { Component } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import HeaderCard from '../HeaderCard';
import dots from '../../../icons/dots.svg';
import accountCircle from '../../../icons/account_circle.svg';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import StyledTableCell from '../StyledTableCell';
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const useStylesMessage = theme => ({
	root: {
	  width: "100%",
	},
	message: {
		background: "#ffffff",
		borderRadius: 6,
		boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
		margin: "50px 0 15px",
		position: "relative",
		"&::after": {
			content: "",
			display: "block",
			position: "absolute",
			width: 0,
			height: 0,
			borderTop: "8px solid transparent",
			borderBottom: "8px solid transparent",
			borderRight: "15px solid #fff",
			left: -15,
			top: 15
		}
	},
	"name-wrapper": {
		verticalAlign: "middle"
	}
});

class Message extends Component {
	state = {
		open: true
	}

	handleClick = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		const {classes} = this.props;
		return (
			<div className={classes.message}>
				<HeaderCard title={this.props.data.title} onClick={this.handleClick} icon={dots} />
				<Table aria-labelledby="tableTitle">
					<TableBody>
						<TableRow
							hover
						>
							<StyledTableCell padding="checkbox">
								<Checkbox
									icon={<CircleUnchecked />}
									checkedIcon={<CircleChecked />}
								/>
							</StyledTableCell>
							<StyledTableCell>{this.props.data.date}</StyledTableCell>
							<StyledTableCell>{this.props.data.time}</StyledTableCell>
							<StyledTableCell className={classes["name-wrapper"]}>
								<img src={accountCircle} alt={accountCircle} />
								{this.props.data.time}
							</StyledTableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		)
	}
}

Message = withStyles(useStylesMessage)(Message)

const useStylesMessages = makeStyles(theme => ({
	root: {
	  width: "100%",
	},
	"messages-wrapper": {
		width: "80%",
	}
}));

const Messages = props => {
	const classes = useStylesMessages();
	return (
		<div className={classes["messages-wrapper"]}>
			{props.data.map(element => (
				<Message data={element} />
			))}
		</div>
	)
}

export default Messages;