import React, { Component } from 'react';
import classes from './Statistic.module.css';

import { Formik, Form } from "formik";
import WayBar from '../../components/ReusableComponents/WayBar';
import MyTabs from '../../components/ReusableComponents/MyTabs';
import DatePicker from '../../components/ReusableComponents/DatePicker';
import pencil from '../../icons/pencil.svg';
import LineCard from '../../components/ReusableComponents/LineCard';
import CirclePieDiagram from '../../components/ReusableComponents/CirclePieDiagram';
import AreaCard from '../../components/ReusableComponents/AreaCard';
import BarCard from '../../components/ReusableComponents/BarCard';
import SimpleTable from '../../components/ReusableComponents/SimpleTable';

const way = [
	{
		text: "Statistic", url: "/statistic"
	}
]

const array1 = ["Today", "Yesterday", "Week", "Month", "Quarter", "Year"]

const color = [ "#50D166", "#5553CE", "#F18F1C"]
const lineHeader = [ "Time on site", "Users", "New Users" ]

const circleHeader = [ "Type gadjets", "Age users", "Traffic Sources" ]

class Statistic extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="content">
				<WayBar label="Widgets" array={way} />
				<h1 className={classes.h1}>Statistic</h1>
				<div className={classes["tabs-wrapper"]}>
					<MyTabs tab={array1} />
					<Formik
						initialValues={{
							date: new Date(),
						}}
						onSubmit={(values) => {
							console.log(values)
						}}
						render={({values, setFieldValue}) => {
							return (
								<Form>
									<DatePicker 
										name="date"
										value={values.date}
										onChange={setFieldValue}
									/>
								</Form>
							)
						}}
					/>
					<button type="button" className={classes.btn} onClick={this.handleClick}>
						<img src={pencil} alt={pencil} />
						CREATE WIDGETS
					</button>
				</div>
				<div className={classes["board-wrapper"]}>
					{this.props.user.statistic.line.map((card, index) => {
						return (
							<LineCard title={lineHeader[index]} data={card} color={color[index]} key={Math.random()} />
						)
					})}
				</div>
				<div className={classes["board-wrapper"]}>
					{this.props.user.statistic.circle.map((card, index) => (
						<CirclePieDiagram title={circleHeader[index]} data={card} classDiv={classes.card} position={[150, 200]} />
					))}
				</div>
				<div className={classes["board-wrapper"]}>
					{this.props.user.statistic.area.map((card, index) => (
						<AreaCard data={card} />
					))}
				</div>
				<BarCard data={this.props.user.statistic.bar}/>
				<SimpleTable rows={this.props.user.statistic.table} />
			</div>
		)
	}
}

export default Statistic;