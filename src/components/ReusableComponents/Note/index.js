import React from 'react';
import classes from './Note.module.css';

const Note = props => {
	const note = props.data.note.length < 100 ? props.data.note : props.data.note.slice(0, 100) + "..."
	return (
		<div index={props.index} onClick={props.onClickNote} className={classes.note} style={props.activeNote ? {borderLeft: "2px solid #1875F0"} : {borderLeft: "2px solid transparent"}}>
			<h6>{props.data.title}</h6>
			<p className={classes.text}>{note}</p>
			<p className={classes.text}>{props.data.time}</p>
		</div>
	)
}

export default Note;