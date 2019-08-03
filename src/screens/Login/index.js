import React, { Component } from 'react';
import classes from './Login.module.css';
import { Formik, Form, Field } from "formik";
import { LoginSchema } from '../../config/yup';
import {connect}   from 'react-redux';
import getLogin from '../../store/actions/getLogin';

class Login extends Component {
	render() {
		return (
			<div className="content">
				<div className={classes["login-wrapper"]}>
					<div>
						<h2 className={classes.h2}>Login</h2>
						<Formik
							initialValues={{
								login: ''
							}}
							validationSchema={LoginSchema}
							onSubmit={values => {
								this.props.getLogin(values.login)
								this.props.history.push("/commerce-dashboard")
							}}
							render={({errors, touched}) => {
								return (
									<div className={classes["login-holder"]}>
										<Form>
											<label className={classes.label} htmlFor="login">Login</label>
											<Field
												className={classes["login-input"] + (errors.login && touched.login ? ` ${classes["is-invalid"]}` : '')}
												name="login"
												type="text"
												placeholder="Enter your email"
												id="login"
											/>
											{errors.login && touched.login && (
												<div className={classes.error}>{errors.login}</div>
											)}
											<button className={classes.btn} type="submit">OK</button>
										</Form>
									</div>
								)
							}}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(state => ({login: state.login}), {getLogin})(Login);