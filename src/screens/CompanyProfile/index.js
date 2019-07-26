import React, { Component } from 'react';
import classes from './CompanyProfile.module.css';
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
				text: "Companies", url: "/companies"
			},
			{
				text: this.props.match.params.name, url: `/companies/${this.props.match.params.name}`
			},
		]

		const client = this.props.user.companies.find(profile => this.props.match.params.name === profile.company)

		if (!client) {
			return <NotFound />
		}
		return (
			<div className="content">
				<WayBar label="Widgets" array={way} />
				<h1 className={classes.h1}>{client.company}</h1>
				<div className={classes["cards-wrapper"]}>
					<CreateCompanyCard
						values={{
							company: client.company,
							phone: client.phone,
							email: client.email,
						}}
						title="Company"
						open="1"
					/>
					<CreateToDoCard />
					<CreateContactCard 
						title="Contact"
						values={{
							contact: "",
							company: "",
							phone: "",
							email: "",
						}}
						buttonLabel="FIELD"
						open="0"
					/>
					<ScheduleCard />
				</div>
			</div>
		)
	}
}

export default ClientProfile;