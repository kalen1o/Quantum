import React, { Component } from 'react';
import classes from './TaskCard.module.css';
import dots from '../../../icons/dots.svg';

import HeaderCard from '../HeaderCard';

class TaskCard extends Component {
	state = {
		open: true
	}

	handleOpen = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		return (
			<div className={classes.card}>
				<HeaderCard title={this.props.data.label} onClick={this.handleOpen} icon={dots} />
				<div className={classes.info} style={this.state.open ? {display: "flex"} : {display: "none"}}>
					<h1 className={classes.h1}>{this.props.data.quantity}</h1>
					<div>
						<h6 className={classes.h6}>{this.props.data.percent} %</h6>
						<h6 className={classes.h6}>Last week: {this.props.data.lastWeek}</h6>
					</div>
				</div>
			</div>
		)
	}
}

export default TaskCard;