import React, { Component } from 'react';
import classes from './CreateDeal.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import CreateEventCard from '../../components/ReusableComponents/CreateEventCard';
import CreateContactCard from '../../components/ReusableComponents/CreateContactCard';
import CreateToDoCard from '../../components/ReusableComponents/CreateToDoCard';
import CreateCompanyCard from '../../components/ReusableComponents/CreateCompanyCard';

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
				<CreateEventCard />
				<div className={classes["cards-wrapper"]}>
					<CreateContactCard />
					<CreateToDoCard />
					<CreateCompanyCard />
				</div>
			</div>
		)
	}
}

export default CreateDeal;