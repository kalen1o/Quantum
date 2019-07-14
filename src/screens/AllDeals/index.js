import React, { Component } from 'react';
import classes from './AllDeals.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import DealsTable from '../../components/ReusableComponents/DealsTable';

const way = [
	{
		text: "All Deals", url: "/deals-dashboard"
	}
]

const columnElem = [
	{
		text: "All deals",
		color: "transparent"
	},
	{
		text: "Incoming request",
		color: "#3AA4D2"
	},
	{
		text: "Initial Contact",
		color: "#1875F0"
	},
	{
		text: "Offer Made",
		color: "#F9AD3D"
	},
	{
		text: "Negotiation",
		color: "#5553CE"
	},
	{
		text: "Contact",
		color: "#9F00FF"
	},
	{
		text: "Won Deals",
		color: "#34CB49"
	},
]

class AllDeals extends Component {
	state = {
		active: "All deals"
	}

	handleClickColumn = (event) => {
		this.setState({active: event.target.innerText})
	}

	render() {
		return (
			<div className="content">
				<WayBar label="Dashboard" array={way} />
				<h1 className={classes.h1}>All Deals</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<div className={classes["column-element"]}>
							<button type="button" className={classes.btn}>CREATE DEAL</button>
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
					<DealsTable rows={this.props.user.allDeals} sort={this.state.active} />
				</div>
			</div>
		)
	}
}

export default AllDeals;