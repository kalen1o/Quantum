import React, { Component } from 'react';
import classes from './ClientProfile.module.css';
import NotFound from '../NotFound';

import WayBar from '../../components/ReusableComponents/WayBar';
import CreateContactCard from '../../components/ReusableComponents/CreateContactCard';
import CreateToDoCard from '../../components/ReusableComponents/CreateToDoCard';
import CreateCompanyCard from '../../components/ReusableComponents/CreateCompanyCard';
import ScheduleCard from '../../components/ReusableComponents/ScheduleCard';

class ClientProfile extends Component {
	render() {
		const way = [
			{
				text: "Clients", url: "/clients"
			},
			{
				text: this.props.match.params.name, url: `/clients/${this.props.match.params.name}`
			},
		]

		const client = this.props.user.clients.find(profile => this.props.match.params.name === profile.contact)

		if (!client) {
			return <NotFound />
		}
		return (
			<div className="content">
				<WayBar label="Widgets" array={way} />
				<h1 className={classes.h1}>{client.contact}</h1>
				<div className={classes["cards-wrapper"]}>
					<CreateContactCard 
						title="Contact"
						values={{
							contact: client.contact,
							company: client.company,
							phone: client.phone,
							email: client.email,
						}}
						buttonLabel="FIELD"
						open="1"
					/>
					<CreateToDoCard />
					<CreateCompanyCard 
						title="Company"
						open="0"
					/>
					<ScheduleCard />
				</div>
			</div>
		)
	}
}

export default ClientProfile;