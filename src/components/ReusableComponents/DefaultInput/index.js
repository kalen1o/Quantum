import React from 'react';
import classes from './DefaultInput.module.css';

import { Field } from "formik";

const DefaultInput = (props) => {
	return (
		<div className={props.classDiv} style={{position: "relative", marginBottom: "20px"}}>
			{
				props.icon ?
					<img src={props.icon} alt={props.icon} className={classes.icon} /> : null
			}
			<Field
				style={props.icon ? {padding: "15px 20px 15px 40px"} : {padding: "15px 20px"}}
				className={classes.input + (props.errors[props.name] && props.touched[props.name] ? ` ${classes["is-invalid"]}` : '')}
				name={props.name}
				type="text"
				placeholder={props.placeholder}
			/>
			{props.errors[props.name] && props.touched[props.name] && (
				<div className={classes.error}>{props.errors[props.name]}</div>
			)}
		</div>
	)
}

export default DefaultInput;