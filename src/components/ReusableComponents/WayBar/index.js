import React from 'react';
import classes from './WayBar.module.css';
import arrowRight from '../../../icons/arrow_right.svg';
import { Link } from 'react-router-dom';

const WayBar = (props) => (
	<div className={classes["way-bar"]}>
		{props.label} {props.array.map(item => (
			<span className={classes.way} key={item.text}>
				<img src={arrowRight} alt={arrowRight} />
				<Link to={item.url} className={classes["way-link"]}>
					{item.text}
				</Link>
			</span>
		))}
	</div>
)

export default WayBar;