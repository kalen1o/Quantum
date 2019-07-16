import React, { Component } from 'react';
import classes from './CreateEventCard.module.css';

import { Formik, Form, Field } from "formik";
import { CreateEventSchema } from '../../../config/yup';
import DefaultInput from '../../ReusableComponents/DefaultInput';
import accountCircle from '../../../icons/account_circle.svg';
import money from '../../../icons/money.svg';
import DefaultSelect from '../../ReusableComponents/DefaultSelect';
import Editor from '../../ReusableComponents/Editor';

class CreateEventCard extends Component {
	render() {
		return (
			<div className={classes.card}>
				<Formik
					initialValues={{
						title: "",
						contact: "",
						sales: "",
						status: "",
						// company: "",
						textarea: ""
					}}
					validationSchema={CreateEventSchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm({
							title: "",
							contact: "",
							sales: "",
							status: "",
							// company: "",
							textarea: ""
						})
					}}
					render={({values, errors, touched, setFieldValue}) => {
						return (
							<Form>
								<div className={classes["event-flexbox"]}>
									<DefaultInput name="title" placeholder="Event Title" classDiv={classes["event-title-wrapper"]} errors={errors} touched={touched} />
									<DefaultInput name="contact" placeholder="Contact" icon={accountCircle} classDiv={classes["small-wrapper"]} errors={errors} touched={touched} />
									<DefaultInput name="sales" placeholder="Sales" icon={money} classDiv={classes["small-wrapper"]} errors={errors} touched={touched} />
									<DefaultSelect name="status" value={values.status} onChange={setFieldValue} type="0" classDiv={classes["small-wrapper"]} errors={errors} touched={touched}>
										<option value="">Choose event status</option>
										<option value="INCOMING REQUEST">INCOMING REQUEST</option>
										<option value="INITIAL CONTACT">INITIAL CONTACT</option>
										<option value="OFFER MADE">OFFER MADE</option>
										<option value="NEGOTIATION">NEGOTIATION</option>
										<option value="CONTACT">CONTACT</option>
										<option value="WON DEALS">WON DEALS</option>
									</DefaultSelect>
								</div>
								<Editor name="textarea" id="create-event-textarea" rows="4" />
								<button type="submit" className={classes.btnSave}>SAVE DEAL</button>
								<button 
									type="button" 
									onClick={() => {
										setFieldValue("title", "")
										setFieldValue("contact", "")
										setFieldValue("sales", "")
										setFieldValue("status", "")
										setFieldValue("textarea", "")
									}} 
									className={classes.btnCancel}>
										CANCEL
								</button>
							</Form>
						)
					}}
				/>
			</div>
		)
	}
}

export default CreateEventCard;