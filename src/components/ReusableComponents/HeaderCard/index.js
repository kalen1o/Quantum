import React from 'react';
import classes from './HeaderCard.module.css';

const HeaderCard = props => (
	<div className={classes.header}>
		<h6>{props.title}</h6>
		<button type="button" onClick={props.onClick} style={props.open ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"}}>
			<img src={props.icon} alt={props.icon} />
		</button>
	</div>
)

export default HeaderCard;