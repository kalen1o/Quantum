import React, { Component } from 'react';
import classes from './AllDeals.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';

const way = [
	{
		text: "All Deals", url: "/deals-dashboard"
	}
]

class AllDeals extends Component {
	render() {
		return (
			<div className="content">
				<WayBar label="Dashboard" array={way} />
				<h1 className={classes.h1}>All Deals</h1>
			</div>
		)
	}
}

export default AllDeals;