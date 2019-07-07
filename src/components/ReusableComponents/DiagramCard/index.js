import React, { Component } from 'react';
import classes from './DiagramCard.module.css';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import dots from '../../../icons/dots.svg';

const CustomizeLabel = (props) => {
	const {x, y, value, width} = props;
	console.log(width)
	return <text 
               x={x + width - 30} 
               y={y + 27.5} 
               dy={-4} 
               fontSize='13' 
               fontFamily='sans-serif'
			   fill="#ffffff"
			   className={classes.text}
			>
				{value}%
			</text>
}

class DiagramCard extends Component {
	state = {
		data: true
	}

	handleDots = () => {
		this.setState(state => ({
			data: !state.data
		}))
	}

	render() {
		let data = this.props.data.sort(function(a, b) {
			return a.percent - b.percent
		})
		data = this.state.data ? data.reverse() : data
		return (
			<div className={classes.card}>
				<div className={classes.header}>
					<h6>{this.props.header}</h6>
					<button onClick={this.handleDots} type="button">
						<img src={dots} alt={dots} />
					</button>
				</div>
				<ResponsiveContainer width="100%" height={450}>
					<BarChart
						layout="vertical"
						data={data}
						margin={{top: 30, right: 30, left: 40, bottom: 30}}
					>
						<CartesianGrid strokeDasharray="0 0" fill="#f7f7f7" />
						<XAxis type="number" stroke="#f7f7f7" tick={{ fill: '#808080', fontSize: 12, fontWeight: 700 }} domain={[0, 40]} />
						<YAxis dataKey="label" type="category" tick={{ fill: '#b3b3b3', fontSize: 12 }} stroke="#f7f7f7"/>
						<Tooltip />
						<Bar 
							dataKey="percent" 
							barSize={40} 
							label={<CustomizeLabel />}
						>
							{data.map((item, index) => (
								<Cell fill={index % 2 === 0 ? this.props.color[0] : this.props.color[1]} key={index}/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		)
	}
}

export default DiagramCard;