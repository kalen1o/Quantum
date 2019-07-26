import React, { Component } from 'react';
import classes from './ScheduleCard.module.css';
import MyTabs from '../MyTabs';
import Stepper from '../Stepper';
import Messages from '../Messages';
import restore from '../../../icons/restore.svg';

const array = [ "Planned", "Past" ]

class ScheduleCard extends Component {
	render() {
		return (
			<div className={classes.card}>
				<div className={classes["tab-wrapper"]}>
					<MyTabs tab={array} />
				</div>
				<div className={classes["card-content"]}>
					{
						this.props.plans ?
							<>
								<Stepper data={this.props.plans} />
								<Messages data={this.props.plans} />
							</> :
							<div className={classes["without-content"]}>
								<img src={restore} alt={restore} /> 
								<span>No Task Added</span>
							</div>
					}
				</div>
			</div>
		)
	}
}

export default ScheduleCard;