import React, { Component } from 'react';
import classes from './Calendar.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

const way = [
	{
		text: "Calendar", url: "/calendar"
	}
]

class Calendar extends Component {
	render() {
		return (
			<div className="content">
				<WayBar label="Widgets" array={way} />
				<h1 className={classes.h1}>Calendar</h1>
				<div className={classes.card}>
					<BigCalendar
						culture='en-GB'
						events={this.props.user.calendar}
						views={['day', 'month', 'week']}
						step={60}
						defaultDate={new Date()}
					/>
				</div>
			</div>
		)
	}
}

export default Calendar;