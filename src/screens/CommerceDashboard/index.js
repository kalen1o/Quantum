import React, { Component } from 'react';
import classes from './CommerceDashboard.module.css';
import WayBar from '../../components/ReusableComponents/WayBar';
import Cell from '../../components/ReusableComponents/Cell';
import DiagramCard from '../../components/ReusableComponents/DiagramCard';
import LastProductSalesCard from '../../components/ReusableComponents/LastProductSalesCard';
import StatCard from '../../components/ReusableComponents/StatCard';
import RevenueCard from '../../components/ReusableComponents/RevenueCard';
import SimpleTable from '../../components/ReusableComponents/SimpleTable';
import timeline from '../../icons/timeline.svg';
import ishoppingCart from '../../icons/ishopping_cart.svg';
import shoppingBasket from '../../icons/shopping_basket.svg';
import people from '../../icons/people.svg';

const way = [
	{
		text: "Commerce Dashboard", url: "/commerce-dashboard"
	}
]

const statIcons = [
	timeline,
	ishoppingCart,
	shoppingBasket,
	people
]

const revenueColor = [
	"#1875F0",
	"#50D166",
	"#5553CE"
]

const viewLabels = ["Image", "Product", "Views", "Price"]
const saleLabels = ["Image", "Product", "Sales", "Price"]

class CommerceDashboard extends Component {
	render() {
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
				<LastProductSalesCard data={this.props.user.commerceDashboard.lastProductSales} />
				<div className={classes["card-wrapper"]}>
					{this.props.user.commerceDashboard.stat.map((item, index) => {
						const icon = statIcons[index]
						return (
							<StatCard data={item} icon={icon} />
						)
					}
					)}
				</div>
				<div className={classes["card-wrapper"]}>
					{this.props.user.commerceDashboard.revenue.map((item, index) => {
						const color = revenueColor[index]
						return (
							<RevenueCard data={item} color={color} />
						)
					})}
				</div>
				<div className={classes["simple-table-wrapper"]}>
					<SimpleTable label="Products Views Stat" data={this.props.user.commerceDashboard.products} sort="views" labels={viewLabels} />
					<SimpleTable label="Top Sale Products" data={this.props.user.commerceDashboard.products} sort="sales" labels={saleLabels} />
				</div>
			</div>
		)
	}
}

export default CommerceDashboard;