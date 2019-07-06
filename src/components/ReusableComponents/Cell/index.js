import React from 'react';
import classes from './Cell.module.css';

const Cell = (props) => {
	let color = props.element.percent.slice(0, 1) === "+" ? "#50d166" : "#f13a30"
	return (
		<div className={classes.cell + ` ${classes[props.element.class]}`}>
			<label>{props.element.label}</label>
			<p className={classes.quantity}>{props.element.quantity} <sup style={{color}}>{props.element.percent}</sup></p>
		</div>
	)
}

export default Cell;