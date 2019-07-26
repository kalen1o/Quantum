import React, { Component } from 'react';
import classes from './CreateCompanyCard.module.css';

import { Formik, Form } from "formik";
import DefaultInput from '../../ReusableComponents/DefaultInput';
import DefaultSelect from '../../ReusableComponents/DefaultSelect';
import arrowUp from '../../../icons/arrow_up.svg';
import { CreateCompanySchema } from '../../../config/yup';
import HeaderCard from '../HeaderCard';

class CreateCompanyCard extends Component {
	state = {
		open: Boolean(+this.props.open)
	}

	handleClick = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		const defaultValues = {
			phoneType: "PHONE WORK",
			emailType: "EMAIL WORK",
			site: "",
			address: ""
		}
		let values = {...defaultValues, ...this.props.values}
		return (
			<div className={classes.card}>
				<HeaderCard title={this.props.title} onClick={this.handleClick} icon={arrowUp} open={this.state.open} />
				<Formik
					initialValues={values}
					validationSchema={CreateCompanySchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm({
							company: "",
							phone: "",
							phoneType: "PHONE WORK",
							email: "",
							emailType: "EMAIL WORK",
							site: "",
							address: ""
						})
					}}
					render={({values, errors, touched, setFieldValue}) => {
						return (
							<Form>
								<div className={classes["card-info"]} style={this.state.open ? {height: "auto", padding: "25px"} : {height: "0", padding: "0"}}>
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
											<option value="EMAIL WORK">EMAIL WORK</option>
											<option value="EMAIL HOME">EMAIL HOME</option>
										</DefaultSelect>
									</div>
									<DefaultInput name="site" placeholder="Site" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<DefaultInput name="address" placeholder="Address" classDiv={classes["big-input"]} errors={errors} touched={touched} />
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

export default CreateCompanyCard;