import React, { Component } from 'react';
import classes from './CommerceDashboard.module.css';
import WayBar from '../../components/ReusableComponents/WayBar';
import Cell from '../../components/ReusableComponents/Cell';
import DiagramCard from '../../components/ReusableComponents/DiagramCard';
import LastProductSalesCard from '../../components/ReusableComponents/LastProductSalesCard';

const way = [
	{
		text: "Commerce Dashboard", url: "/commerce-dashboard"
	}
]

class CommerceDashboard extends Component {
	render() {
		console.log(this.props, 'here')
		return (
			<div className="content">
				<WayBar label="Dashboard" array={way} />
				<h1 className={classes.h1}>Commerce Dashboard</h1>
				<div className={classes["table-card"]}>
					{this.props.user.commerceDashboard.tableCard.map(element => (
						<Cell element={element} key={Math.random()} />
					))}
				</div>
				<div className={classes["histograms-wrapper"]}>
					<DiagramCard data={this.props.user.commerceDashboard.barChartGroupsGoods} header="Groups Goods" color={["#1875f0", "#50D166"]} />
					<DiagramCard data={this.props.user.commerceDashboard.barChartChannel} header="Channel" color={["#f13a30", "#5553ce"]} />
				</div>
				<LastProductSalesCard />
			</div>
		)
	}
}

export default CommerceDashboard;