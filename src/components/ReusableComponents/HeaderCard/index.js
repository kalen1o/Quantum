import React from 'react';
import classes from './HeaderCard.module.css';

const HeaderCard = props => {
	const style = props.btn ? {border: "2px solid #F5F5F5", borderRadius: 4, padding: 10, color: "#b3b3b3", fontSize: 10, fontWeight: 700} : {}
	return (
		<div className={classes.header}>
			<h6>{props.title}</h6>
			<button type="button" onClick={props.onClick} style={props.open ? {transform: "rotate(0deg)", ...style} : {transform: "rotate(180deg)", ...style}}>
				{
					props.icon ?
						<img src={props.icon} alt={props.icon} /> :
						`${props.btn}`
				}
			</button>
		</div>
	)
}

export default HeaderCard;