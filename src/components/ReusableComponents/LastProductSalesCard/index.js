import React, { Component } from 'react';
import classes from './LastProductSalesCard.module.css';
import dots from '../../../icons/dots.svg';

class LastProductSalesCard extends Component {
	render() {
		return (
			<div className={classes.card}>
				<div className={classes.header}>
					<h6>Last product sales</h6>
					<button onClick={this.handleDots} type="button">
						<img src={dots} alt={dots} />
					</button>
				</div>
			</div>
		)
	}
}

export default LastProductSalesCard;