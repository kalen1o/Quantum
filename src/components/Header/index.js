import React, { Component } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo';
import arrowLeft from '../../icons/arrow_left.svg';
import notifications from '../../icons/notifications.svg';
import message from '../../icons/message.svg';
import comment from '../../icons/comment.svg';
import search from '../../icons/search.svg';
import { Formik, Form, Field } from "formik";
import { SearchSchema } from '../../config/yup';

const Icon = (props) => (
	<img src={props.src} alt={props.src} className={classes.icon} />
)

const Icons = (props) => (
	<>
		{props.array.map(item => (
			<Icon src={item} key={item} />
		))}
	</>
)

const icons = [
	notifications,
	message,
	comment
]

class Header extends Component {
	render() {
		return (
			<div className={classes.header}>
				<Logo />
				{this.props.open ? 
					(
						<>
							<button type="button" onClick={this.props.onClickClose} className={classes["btn-back"]}>
								<img src={arrowLeft} alt={arrowLeft} />
							</button>
							<div className={classes["header-wrapper"]}>
								<Icons array={icons} />
								<Formik
									initialValues={{
										search: ''
									}}
									validationSchema={SearchSchema}
									onSubmit={values => {
										console.log(values)
									}}
									render={({errors, touched}) => {
										console.log(errors.search)
										return (
										<Form>
											<span className={classes["search-input-wrapper"]}>
												<img src={search} alt={search} className={classes["search-icon"]} />
												<Field
													className={classes["search-input"] + (errors.search && touched.search ? ` ${classes["is-invalid"]}` : '')}
													name="search"
													type="text"
													placeholder="Search"
												/>
											</span>
										</Form>
									)}}
								/>
								<div className={classes.user}>
									<span className={classes.username}>{this.props.user.name}</span>
									<img src={this.props.user.avatar} alt={this.props.user.avatar} className={classes["user-avatar"]} />
								</div>	
							</div>
						</>
					)
					: 
					<div className={classes["header-wrapper-close"]}>
						<Formik
							initialValues={{
								search: ''
							}}
							validationSchema={SearchSchema}
							onSubmit={values => {
								console.log(values)
							}}
							render={({errors, touched}) => {
								return (
								<Form>
									<span className={classes["search-input-wrapper"]}>
										<img src={search} alt={search} className={classes["search-icon"]} />
										<Field
										className={classes["search-input"] + (errors.search && touched.search ? ` ${classes["is-invalid"]}` : '')}
										name="search"
										type="text"
										placeholder="Search"
									/>
									</span>
								</Form>
							)}}
						/>
						<Icons array={icons} />
						<div className={classes["user-close"]}>
							<span className={classes.username}>{this.props.user.name}</span>
							<img src={this.props.user.avatar} alt={this.props.user.avatar} className={classes["user-avatar"]} />
						</div>	
					</div>
				}
			</div>
		)
	}
}

export default Header;