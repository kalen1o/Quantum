import React, { Component } from 'react';
import classes from './ToDoList.module.css';
import WayBar from '../../components/ReusableComponents/WayBar';
import ToDoCard from '../../components/ReusableComponents/ToDoCard';

const way = [
	{
		text: "To Do List", url: "/to-do-list"
	}
]

const titleSort = [ "To Do List", "In Work", "Done" ]

class ToDoList extends Component {
	render() {
		return (
			<div className="content">
				<WayBar label="Social" array={way} />
				<h1 className={classes.h1}>To Do List</h1>
				<div className={classes["cards-wrapper"]}>
					{titleSort.map(elem => <ToDoCard titleSort={elem} data={this.props.user.todolist} key={Math.random()} />)}
				</div>
			</div>
		)
	}
}

export default ToDoList;