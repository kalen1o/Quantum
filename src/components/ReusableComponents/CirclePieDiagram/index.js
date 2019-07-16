import React, { Component } from 'react';
import classes from './CirclePieDiagram.module.css';
import { PieChart, Pie, Cell } from 'recharts';
import dots from '../../../icons/dots.svg';

const COLORS = ['#1875F0', '#F18F1C', '#5553CE', '#3AA4D2', '#50D166', '#9013FE'];

const Legend = (props) => (
	<div className={classes.legend}>
		<div style={{width: 10, height: 10, background: props.color, borderRadius: 50, marginRight: 15}}></div>
		{props.data.name}
		<span className={classes["legend-value"]}>{props.data.value} %</span>
	</div>
)

class CirclePieDiagram extends Component {
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
				<div className={classes.header}>
					<h6>Traffic Sources</h6>
					<button onClick={this.handleOpen} type="button">
						<img src={dots} alt={dots} />
					</button>
				</div>
				<div style={this.state.open ? {display: "block"} : {display: "none"}}>
					<PieChart width={590} height={300} onMouseEnter={this.onPieEnter}>
						<Pie
						// dataKey="traffic"
						data={this.props.data} 
						cx={275} 
						cy={125} 
						innerRadius={60}
						outerRadius={80} 
						fill="#8884d8"
						paddingAngle={0}
						>
						{
							this.props.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={Math.random()} />)
						}
						</Pie>
						
					</PieChart>
					<div className={classes["legend-wrapper"]}>
						{
							this.props.data.map((entry, index) => <Legend data={entry} color={COLORS[index % COLORS.length]}  key={Math.random()}  />)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default CirclePieDiagram;