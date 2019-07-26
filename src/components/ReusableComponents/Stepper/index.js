import React from 'react';
import classes from './Stepper.module.css';

const Circle = props => (
	<div className={classes.circle}>
		<img src={props.src} alt={props.src} />
	</div>
)

const Stepper = props => (
	<div className={classes["stepper-wrapper"]}>
		<div className={classes.stepper}>
			{props.data.map((element, index) => (
					<div key={index}>
						<Circle src={element.icon} />
						{index !== props.data.length - 1 ? <div className={classes.spanner}></div> : null}
					</div>
				))}
		</div>
	</div>
)

export default Stepper;