import React, { Component } from 'react';
import classes from './LastProductSalesCard.module.css';
import EnhancedTable from './EnhancedTable';

class LastProductSalesCard extends Component {
	render() {
		return (
			<div className={classes.card}>
				<EnhancedTable rows={this.props.data} />
			</div>
		)
	}
}

export default LastProductSalesCard;