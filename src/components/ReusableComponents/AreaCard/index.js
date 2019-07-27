import React, { Component } from 'react';
import classes from './AreaCard.module.css';
import {AreaChart, Area, ResponsiveContainer} from 'recharts';

class AreaCard extends Component {
  render () {
	return (
		<div className={classes.card}>
			<div>
				<h6 className={classes.h6}>{this.props.data.label}</h6>
				<h5>{this.props.data.value}</h5>
				<h6 style={this.props.data.percent.charAt(0) === "+" ? {color: "#50D166", marginTop: 10} : {color: "#F13A30", marginTop: 10} }>{this.props.data.percent}</h6>
			</div>
			<ResponsiveContainer width="80%" height={120}>
				<AreaChart data={this.props.data.data}
					margin={{top: 5, right: 0, left: 0, bottom: 5}}
				>
					<Area type='monotone' dataKey='value' stroke='#1875F0' fill='#EDF5FF' />
				</AreaChart>
			</ResponsiveContainer>
		</div>
  );
}
}

export default AreaCard;