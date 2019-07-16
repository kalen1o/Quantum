import React, { Component } from 'react';
import classes from './CreateCompanyCard.module.css';

import { Formik, Form, Field } from "formik";
import DefaultInput from '../../ReusableComponents/DefaultInput';
import DefaultSelect from '../../ReusableComponents/DefaultSelect';
import arrowUp from '../../../icons/arrow_up.svg';
import { CreateContactSchema } from '../../../config/yup';

class CreateCompanyCard extends Component {
	state = {
		open: true
	}

	handleClick = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		return (
			<div className={classes.card}>
				<div className={classes.header}>
					<h6>New Company</h6>
					<button type="button" onClick={this.handleClick} style={this.state.open ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"}}>
						<img src={arrowUp} alt={arrowUp} />
					</button>
				</div>
			</div>
		)
	}
}

export default CreateCompanyCard;