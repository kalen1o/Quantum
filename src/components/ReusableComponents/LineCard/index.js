import React, { Component } from 'react';
import classes from './LineCard.module.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';

class LineCard extends Component {
  render () {
	return (
		<div className={classes.card}>
			<HeaderCard title={this.props.title} icon={dots} />
			<ResponsiveContainer width="100%" height={250}>
				<LineChart data={this.props.data}
					margin={{top: 30, right: 10, left: 0, bottom: 30}}
				>
					<XAxis dataKey="day" tick={{ fill: '#b3b3b3', fontSize: 12 }}/>
					<YAxis type="number"/>
					<CartesianGrid strokeDasharray="0 0" />
					<Tooltip/>
					<Legend />
					<Line type="monotone" dataKey={this.props.title} stroke={this.props.color} />
				</LineChart>
			</ResponsiveContainer>
		</div>
  );
}
}

export default LineCard;