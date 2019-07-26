import React, { Component } from 'react';
import classes from './Companies.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import CompaniesTable from '../../components/ReusableComponents/CompaniesTable';

const way = [
	{
		text: "Companies", url: "/companies"
	}
]

const columnElem = [
	{
		text: "All Companies",
		color: "transparent"
	},
	{
		text: "VIP Companies",
		color: "transparent"
	},
	{
		text: "New Companies",
		color: "transparent"
	},
	{
		text: "Top Companies",
		color: "transparent"
	}
]

class Companies extends Component {
	state = {
		active: "All Companies"
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
				<h1 className={classes.h1}>Companies</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<div className={classes["column-element"]}>
							<button type="button" className={classes.btn} onClick={this.handleCreateClick}>ADD COMPANY</button>
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
					<CompaniesTable rows={this.props.user.companies} sort={this.state.active} />
				</div>
			</div>
		)
	}
}

export default Companies;