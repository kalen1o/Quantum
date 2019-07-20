import React from 'react';
import classes from './DefaultSelect.module.css';

const DefaultSelect = (props) => {
	return (
		<div className={props.classDiv}>
			<select 
				className={+props.type ? classes.select1 : classes.select0 + (props.errors[props.name] && props.touched[props.name] ? ` ${classes["is-invalid"]}` : '')}
				name={props.name}
				value={props.value}
				onChange={event => props.onChange(props.name, event.target.value)}
			>
				{props.children}
			</select>
			{props.errors[props.name] && props.touched[props.name] && (
				<div className={classes.error}>{props.errors[props.name]}</div>
			)}
		</div>
	)
}

export default DefaultSelect;