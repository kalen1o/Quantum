import React, { Component } from 'react';
import classes from './CirclePieDiagram.module.css';
import { PieChart, Pie, Cell } from 'recharts';
import dots from '../../../icons/dots.svg';
import HeaderCard from '../HeaderCard';

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
			<div className={this.props.classDiv}>
				<HeaderCard title={this.props.title} onClick={this.handleOpen} icon={dots} />
				<div style={this.state.open ? {display: "block"} : {display: "none"}}>
					<PieChart width={590} height={300} onMouseEnter={this.onPieEnter}>
						<Pie
						dataKey="value"
						data={this.props.data} 
						cx={this.props.position[0]} 
						cy={this.props.position[1]} 
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