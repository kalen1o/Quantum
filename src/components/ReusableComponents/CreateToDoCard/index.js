import React, { Component } from 'react';
import classes from './CreateToDoCard.module.css';

import { Formik, Form } from "formik";
import DefaultInput from '../DefaultInput';
import DatePicker from '../DatePicker';
import DefaultSelect from '../DefaultSelect';
import Editor from '../Editor';
import arrowUp from '../../../icons/arrow_up.svg';
import accountCircle from '../../../icons/account_circle.svg';
import { CreateToDoSchema } from '../../../config/yup';

import HeaderCard from '../HeaderCard';

class CreateToDoCard extends Component {
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
				<HeaderCard title="Add To Do" onClick={this.handleClick} icon={arrowUp} open={this.state.open} />
				<Formik
					initialValues={{
						name: "",
						nameTask: "",
						date: new Date(),
						time: 1,
						duration: "1:00",
						textarea: ""
					}}
					validationSchema={CreateToDoSchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm({
							name: "",
							nameTask: "",
							date: new Date(),
							time: "00:00",
							duration: "1hour",
							textarea: ""
						})
					}}
					render={({values, errors, touched, setFieldValue}) => {
						return (
							<Form>
								<div className={classes["card-info"]} style={this.state.open ? {height: "auto", padding: "25px"} : {height: "0", padding: "0"}}>
									<DefaultInput name="nameTask" placeholder="Task Name" classDiv={classes["big-input"]} errors={errors} touched={touched} />
									<div className={classes["small-input-wrapper"]}>
										<DatePicker 
											name="date"
											value={values.date}
											onChange={setFieldValue}
										/>
										<DefaultSelect name="time" value={values.time} onChange={setFieldValue} type="0" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="00:00">00:00</option>
											<option value="01:00">01:00</option>
											<option value="02:00">02:00</option>
											<option value="03:00">03:00</option>
											<option value="04:00">04:00</option>
											<option value="05:00">05:00</option>
											<option value="06:00">06:00</option>
											<option value="07:00">07:00</option>
											<option value="08:00">08:00</option>
											<option value="09:00">09:00</option>
											<option value="10:00">10:00</option>
											<option value="11:00">11:00</option>
											<option value="12:00">12:00</option>
										</DefaultSelect>
										<DefaultSelect name="duration" value={values.duration} onChange={setFieldValue} type="0" classDiv={classes["small-input"]} errors={errors} touched={touched} >
											<option value="1hour">1hour</option>
											<option value="2hour">2hour</option>
											<option value="3hour">3hour</option>
											<option value="4hour">4hour</option>
											<option value="5hour">5hour</option>
										</DefaultSelect>
										<DefaultInput name="name" placeholder="Name" icon={accountCircle} classDiv={classes["small-input"]} errors={errors} touched={touched} />
									</div>
									<Editor name="textarea" id="create-todo-textarea" rows="5" />
									<div className={classes["btn-wrapper"]}>
										<button type="button" className={classes.btnCancel}>CANCEL</button>
										<button type="submit" className={classes.btnAdd}>ADD CONTACT</button>
									</div>
								</div>
							</Form>
						)
					}}
				/>
			</div>
		)
	}
}

export default CreateToDoCard;