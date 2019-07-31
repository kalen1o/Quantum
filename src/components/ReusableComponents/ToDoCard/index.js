import React from 'react';
import classes from './ToDoCard.module.css';
import HeaderCard from '../HeaderCard';
import SmallToDoCard from '../SmallToDoCard';

const ToDoCard = props => {
	let toDoElems = props.data.filter(elem => elem.status === props.titleSort)
	return (
		<div className={classes.card}>
			<HeaderCard title={props.titleSort} btn="NEW TASK" open="1"/>
			<div className={classes["card-content"]}>
				{toDoElems.map(card => <SmallToDoCard data={card} key={Math.random()} />)}
			</div>
		</div>
	)
}

export default ToDoCard;