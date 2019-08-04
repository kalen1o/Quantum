import React, { Component } from 'react';
import classes from './Chat.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import PersonalChart from '../../components/ReusableComponents/PersonalChat';
import { Formik, Form, Field } from "formik";
import search from '../../icons/search.svg';

const way = [
	{
		text: "Messages", url: "/messages"
	}
]

class Chat extends Component {
	state = {
		active: null
	}

	handleClick = (event) => {
		
		if(event.target.id) {
			return this.setState({active: event.target.id})
		} if (!event.target.parentNode.id) {
			return this.setState({active: event.target.parentNode.parentNode.id})
		} else {
			this.setState({active: event.target.parentNode.id})
		}
	}

	render() {
		let data = this.props.user.chat.find(dialog => dialog.id === +this.state.active)
		return (
			<div className="content">
				<WayBar label="Social" array={way} />
				<h1 className={classes.h1}>Messages</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<Formik
							initialValues={{
								search: ''
							}}
							onSubmit={values => {
								console.log(values)
							}}
							render={({errors}) => {
								return (
								<Form className={classes.form}>
									<span className={classes["search-input-wrapper"]}>
										<Field
											className={classes["search-input"]}
											name="search"
											type="text"
											placeholder="Search contacts"
										/>
										<button type="submit" className={classes.btnSearch}>
											<img src={search} alt={search} />
										</button>
									</span>
								</Form>
							)}}
						/>
						{this.props.user.chat.map(dialog => (
							<div 
								style={{
									display: "flex",
									alignItems: "center",
									padding: "20px 15px",
									borderBottom: "2px solid #f5f5f5",
									cursor: "pointer",
								}}
								className={+this.state.active === dialog.id ? classes.active : ''}
								onClick={this.handleClick}
								key={dialog.id}
								id={dialog.id}
							>
								<div 
									style={{
										marginRight: 15,
										width: 8,
										height: 8,
										borderRadius: "50%",
										background: dialog.online ? "#34CB49" : "#D8D8D8"
									}}
								/>
								<img src={dialog.avatar} alt={dialog.avatar} />
								<div style={{
									marginLeft: 15
								}}>
									<h6 className={classes.name}>{dialog.name}</h6>
									<span className={classes.time}>{dialog.time()}</span>
									<p className={classes["last-message"]}>{dialog.lastMessage()}</p>
								</div>
							</div>
						))}
					</div>
					<PersonalChart data={data} user={this.props.user} />
				</div>
			</div>
		)
	}
}

export default Chat;