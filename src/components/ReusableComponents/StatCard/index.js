import React from 'react';
import classes from './StatCard.module.css';

const StatCard = (props) => (
	<div className={classes.card}>
		<div>
			<h3 className={classes.h3}>{props.data.quantity}</h3>
			<h6 className={classes.h6}>{props.data.label}</h6>
		</div>
		<img src={props.icon} alt={props.icon} />
	</div>
)

export default StatCard;