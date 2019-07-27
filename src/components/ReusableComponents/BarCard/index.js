import React, { Component } from 'react';
import classes from './BarCard.module.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';

class BarCard extends Component {
	state = {
		open: true
	}

	handleOpen = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render () {
		return (
			<div className={classes.card}>
				<HeaderCard title="Visits" onClick={this.handleOpen} icon={dots} />
				<div style={this.state.open ? {display: "block"} : {display: "none"}}>
					<ResponsiveContainer width="100%" height={350}>
						<BarChart data={this.props.data}
							margin={{top: 30, right: 30, left: 20, bottom: 5}}
						>
							<CartesianGrid strokeDasharray="0 0"/>
							<XAxis dataKey="day"/>
							<YAxis domain={[0, 200]}/>
							<Tooltip/>
							<Bar dataKey="value" fill="#50D166" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
	);
}
}

export default BarCard;