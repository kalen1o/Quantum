import React, { Component } from 'react';
import classes from './CreateDeal.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';

const way = [
	{
		text: "Create Deal", url: "/create-deal-dashboard"
	}
]

class CreateDeal extends Component {
	render() {
		return (
			<div className="content">
				<WayBar label="Dashboard" array={way} />
				<h1 className={classes.h1}>Create Deal</h1>
			</div>
		)
	}
}

export default CreateDeal;