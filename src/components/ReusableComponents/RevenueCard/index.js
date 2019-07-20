import React, { Component } from 'react';
import classes from './RevenueCard.module.css';
import dots from '../../../icons/dots.svg';

import HeaderCard from '../HeaderCard';

const Info = (props) => (
	<div className={classes.info}>
		<h5 className={classes.h5}>$ {props.revenue}</h5>
		<h6>{props.label}</h6>
	</div>
)

class RevenueCard extends Component {
	state = {
		open: true
	}

	handleClick = () => {
		this.setState(state => {
			this.setState({open: !state.open})
		})
	}

	render() {
		let height = this.state.open ?  140 : 0 ;
		return (
			<div className={classes.card}>
				<HeaderCard title="Total Revenue" onClick={this.handleClick} icon={dots} />
				<div className={classes.wrapper} style={this.state.open ? {height: "auto"} : {height: 0}}>
					<div className={classes["circle-wrapper"]}>
						<div 
							className={classes["active-border"]} 
							style={{
								height: height,
								backgroundColor: "#f5f5f5",
								backgroundImage: `linear-gradient(270deg, ${this.props.color} 50%, transparent 50%),
								linear-gradient(${270 + 360 * this.props.data.percent / 100}deg, transparent 50%, ${this.props.color} 50%)` 
							}}>
							<div className={classes.circle} style={this.state.open ? {height: 130} : {height: 0} }>
								<span className={classes.prec}>{this.props.data.percent}%</span>
							</div>
						</div>
					</div>
					<h6 className={classes.h6} style={this.state.open ? null : {display: "none"}}>{this.props.data.label1}</h6>
				</div>
				<div className={classes["info-wrapper"]}>
					<Info label={this.props.data.label2} revenue={this.props.data.number2} />
					<Info label={this.props.data.label3} revenue={this.props.data.number3} />
					<Info label={this.props.data.label4} revenue={this.props.data.number4} />
				</div>
			</div>
		)
	}
}

export default RevenueCard;