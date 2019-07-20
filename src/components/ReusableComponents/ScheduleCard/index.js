import React, { Component } from 'react';
import classes from './ScheduleCard.module.css';
import MyTabs from '../MyTabs';
import Stepper from '../Stepper';
import phone from '../../../icons/phone.svg';
import message from '../../../icons/message.svg';
import Messages from '../Messages';

const array = [ "Planned", "Past" ]

const plans = [
	{
		icon: phone,
		title: "Call to Janet Claver",
		date: "02 May 2016",
		time: "06:30 PM  –  07:00 PM",
		name: "Rose Chavez"
	},
	{
		icon: message,
		title: "Tips For Designing An Effective Business Card",
		date: "02 May 2016",
		time: "06:30 PM  –  07:00 PM",
		name: "Rose Chavez"
	},
]

class ScheduleCard extends Component {
	render() {
		return (
			<div className={classes.card}>
				<div className={classes["tab-wrapper"]}>
					<MyTabs tab={array} />
				</div>
				<div className={classes["card-content"]}>
					<Stepper data={plans} />
					<Messages data={plans} />
				</div>
			</div>
		)
	}
}

export default ScheduleCard;