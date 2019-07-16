import React, { Component } from 'react';
import classes from './CreateContactCard.module.css';

import { Formik, Form, Field } from "formik";
import DefaultInput from '../../ReusableComponents/DefaultInput';
import DefaultSelect from '../../ReusableComponents/DefaultSelect';
import arrowUp from '../../../icons/arrow_up.svg';
import { CreateContactSchema } from '../../../config/yup';

class CreateContactCard extends Component {
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
					<h6>New Contact</h6>
					<button type="button" onClick={this.handleClick} style={this.state.open ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"}}>
						<img src={arrowUp} alt={arrowUp} />
					</button>
				</div>
				<Formik
					initialValues={{
						name: "",
						company: "",
						phone: "",
						email: "",
						social: ""
					}}
					validationSchema={CreateContactSchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm({
							name: "",
							company: "",
							phone: "",
							phoneType: "PHONE WORK",
							email: "",
							emailType: "EMAIL WORK",
							social: "",
							socialType: "SKYPE"
						})
					}}
					render={({values, errors, touched, setFieldValue}) => {
						return (
							<Form>
								<div className={classes["card-info"]} style={this.state.open ? {height: "auto", padding: "25px"} : {height: "0", padding: "0"}}>
									<DefaultInput name="name" placeholder="Full Name" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<DefaultInput name="company" placeholder="Company Name" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<div className={classes["small-input-wrapper"]}>
										<DefaultInput name="phone" placeholder="Phone Number" classDiv={classes["small-input"]} errors={errors} touched={touched} />
										<DefaultSelect name="phoneType" value={values.phoneType} onChange={setFieldValue} type="1" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="PHONE WORK">PHONE WORK</option>
											<option value="PHONE HOME">PHONE HOME</option>
										</DefaultSelect>
									</div>
									<div className={classes["small-input-wrapper"]}>
										<DefaultInput name="email" placeholder="Email" classDiv={classes["small-input"]} errors={errors} touched={touched} />
										<DefaultSelect name="emailType" value={values.emailType} onChange={setFieldValue} type="1" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="PHONE WORK">EMAIL WORK</option>
											<option value="PHONE HOME">EMAIL HOME</option>
										</DefaultSelect>
									</div>
									<div className={classes["small-input-wrapper"]}>
										<DefaultInput name="social" placeholder="Social" classDiv={classes["small-input"]} errors={errors} touched={touched} />
										<DefaultSelect name="socialType" value={values.socialType} onChange={setFieldValue} type="1" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="SKYPE">SKYPE</option>
											<option value="VIBER">VIBER</option>
										</DefaultSelect>
									</div>
									<button type="submit" className={classes.btn}>ADD CONTACT</button>
								</div>
							</Form>
						)
					}}
				/>
			</div>
		)
	}
}

export default CreateContactCard;