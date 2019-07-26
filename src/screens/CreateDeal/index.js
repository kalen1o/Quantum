import React, { Component } from 'react';
import classes from './CreateDeal.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import CreateEventCard from '../../components/ReusableComponents/CreateEventCard';
import CreateContactCard from '../../components/ReusableComponents/CreateContactCard';
import CreateToDoCard from '../../components/ReusableComponents/CreateToDoCard';
import CreateCompanyCard from '../../components/ReusableComponents/CreateCompanyCard';
import ScheduleCard from '../../components/ReusableComponents/ScheduleCard';

import phone from '../../icons/phone.svg';
import message from '../../icons/message.svg';

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
					<CreateContactCard 
						title="New Contact" 
						values={{
							contact: "",
							company: "",
							phone: "",
							email: "",
						}}
						buttonLabel="CONTACT"
						open="1"
					/>
					<CreateToDoCard />
					<CreateCompanyCard 
						values={{
							company: "",
							phone: "",
							email: "",
						}}
						title="New Company" 
						open="1"
					/>
					<ScheduleCard 
						plans={[
							{
								icon: phone,
								title: "Call to Janet Claver",
								date: "02 May 2016",
								time: "06:30 PM  –  07:00 PM",
								name: "Rose Chavez"
							},
							{
								icon: message,
								title: "Tips For Designing An Effective Business Card",
								date: "02 May 2016",
								time: "06:30 PM  –  07:00 PM",
								name: "Rose Chavez"
							},
						]} 
					/>
				</div>
			</div>
		)
	}
}

export default CreateDeal;