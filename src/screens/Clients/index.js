import React, { Component } from 'react';
import classes from './Clients.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import ClientsTable from '../../components/ReusableComponents/ClientsTable';

const way = [
	{
		text: "Clients", url: "/clients"
	}
]

const columnElem = [
	{
		text: "All contacts",
		color: "transparent"
	},
	{
		text: "VIP Clients",
		color: "transparent"
	},
	{
		text: "New Clients",
		color: "transparent"
	},
	{
		text: "Top Sale",
		color: "transparent"
	}
]

class Clients extends Component {
	state = {
		active: "All contacts"
	}

	handleClickColumn = (event) => {
		this.setState({active: event.target.innerText})
	}

	handleCreateClick = () => {
		this.props.history.push("/create-deal-dashboard")
	}
	render() {
		return (
			<div className="content">
				<WayBar label="Widgets" array={way} />
				<h1 className={classes.h1}>Clients</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<div className={classes["column-element"]}>
							<button type="button" className={classes.btn} onClick={this.handleCreateClick}>ADD CLIENT</button>
						</div>
						{columnElem.map(elem => (
							<div className={`${classes["column-element"]} ${this.state.active === elem.text ? classes.active : ''}`} onClick={this.handleClickColumn} key={elem.text}>
								<div 
								style={{
									marginRight: 15,
									width: 10,
									height: 10,
									borderRadius: 5,
									backgroundColor: elem.color,
								}} />
								{elem.text}
							</div>
						))}
					</div>
					<ClientsTable rows={this.props.user.clients} sort={this.state.active} />
				</div>
			</div>
		)
	}
}

export default Clients;