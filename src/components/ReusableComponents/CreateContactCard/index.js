import React, { Component } from 'react';
import classes from './CreateContactCard.module.css';

import { Formik, Form } from "formik";
import DefaultInput from '../../ReusableComponents/DefaultInput';
import DefaultSelect from '../../ReusableComponents/DefaultSelect';
import arrowUp from '../../../icons/arrow_up.svg';
import { CreateContactSchema } from '../../../config/yup';
import HeaderCard from '../HeaderCard';

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
				<HeaderCard title="New Contact" onClick={this.handleClick} icon={arrowUp} open={this.state.open} />
				<Formik
					initialValues={{
						fullname: "",
						company: "",
						phoneContact: "",
						phoneType: "PHONE WORK",
						emailContact: "",
						emailType: "EMAIL WORK",
						social: "",
						socialType: "SKYPE"
					}}
					validationSchema={CreateContactSchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm({
							fullname: "",
							company: "",
							phoneContact: "",
							phoneType: "PHONE WORK",
							emailContact: "",
							emailType: "EMAIL WORK",
							social: "",
							socialType: "SKYPE"
						})
					}}
					render={({values, errors, touched, setFieldValue}) => {
						return (
							<Form>
								<div className={classes["card-info"]} style={this.state.open ? {height: "auto", padding: "25px"} : {height: "0", padding: "0"}}>
									<DefaultInput name="fullname" placeholder="Full Name" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<DefaultInput name="company" placeholder="Company Name" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<div className={classes["small-input-wrapper"]}>
										<DefaultInput name="phoneContact" placeholder="Phone Number" classDiv={classes["small-input"]} errors={errors} touched={touched} />
										<DefaultSelect name="phoneType" value={values.phoneType} onChange={setFieldValue} type="1" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="PHONE WORK">PHONE WORK</option>
											<option value="PHONE HOME">PHONE HOME</option>
										</DefaultSelect>
									</div>
									<div className={classes["small-input-wrapper"]}>
										<DefaultInput name="emailContact" placeholder="Email" classDiv={classes["small-input"]} errors={errors} touched={touched} />
										<DefaultSelect name="emailType" value={values.emailType} onChange={setFieldValue} type="1" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="EMAIL WORK">EMAIL WORK</option>
											<option value="EMAIL HOME">EMAIL HOME</option>
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