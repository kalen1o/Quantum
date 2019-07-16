import React, { Component } from 'react';
import classes from './AnalyticsDashboard.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import MyTabs from '../../components/ReusableComponents/MyTabs';
import InfoBoard from '../../components/ReusableComponents/InfoBoard';
import TaskCard from '../../components/ReusableComponents/TaskCard';
import CirclePieDiagram from '../../components/ReusableComponents/CirclePieDiagram';
import TotalDeals from '../../components/ReusableComponents/TotalDeals';
import pencil from '../../icons/pencil.svg';

const way = [
	{
		text: "Analytics Dashboard", url: "/analytics-dashboard"
	}
]

const array1 = ["All Deals", "My Deals"]
const array2 = ["Today", "Week", "Month", "Quarter"]

const colorInfoBoard = ["#3AA4D2", "#1875F0", "#F18F1C", "#5553CE", "#9013FE", "#50D166"]

const dealLabels = ["Name", "Deals", "Deals Won", "To Do", "Sale"]

class AnalyticsDashboard extends Component {
	render() { 
		return (
			<div className="content">
				<WayBar label="Dashboard" array={way} />
				<h1 className={classes.h1}>CRM Dashboard</h1>
				<div className={classes["tabs-wrapper"]}>
					<MyTabs tab={array1} />
					<MyTabs tab={array2} />
					<button type="button" className={classes.btn}>
						<img src={pencil} alt={pencil} />
						CREATE DEAL
					</button>
				</div>
				<div className={classes["info-boards-wrapper"]}>
					{this.props.user.analyticsDashboard.infoBoards.map((info, index) => {
						const color = colorInfoBoard[index];
						return (
							<InfoBoard data={info} key={index} color={color} />
						)
					})}
				</div>
				<div className={classes["task-card-wrapper"]}>
					{this.props.user.analyticsDashboard.tasks.map(task => (
						<TaskCard data={task} key={task.label} />
					))}
				</div>
				<div className={classes["tables-wrapper"]}>
					<CirclePieDiagram data={this.props.user.analyticsDashboard.circle} />
					<TotalDeals label="Total Revenue" data={this.props.user.analyticsDashboard.totalDeals} sort="deals" labels={dealLabels} />
				</div>
			</div>
		)
	}
}

export default AnalyticsDashboard;