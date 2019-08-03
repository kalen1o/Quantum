import React from 'react';
import classes from './PersonalChat.module.css';
import search from '../../../icons/search.svg';
import dots from '../../../icons/dots.svg';
import smile from '../../../icons/smile.svg';
import { Formik, Form, Field } from "formik";

const Message = props => (
	<div 
		style={{
			position: "relative",
			padding: 30,
			display: "flex",
			justifyContent: props.data.from ? "flex-end" : "flex-start",
		}}
	>
		<div
			className={classes.message}
			style={{
				position: "relative",
				borderRadius: 16,
				background: props.data.from ? "#1875F0" : "#F5F5F5",
				color: props.data.from ? "#ffffff" : "#666666",
				maxWidth: 425,
				padding: 20,
			}}
		>
			{props.data.message}
			{
				props.data.attachments.length ? 
					<div style={{marginTop: 10}}>
						{
							props.data.attachments[0].type === "video" ?
								<video className={classes.video} controls>
									<source src={props.data.attachments[0].video} type="video/mp4"/>
									Your browser does not support HTML5 video.
								</video> :
								<img src={props.data.attachments[0].img} alt={props.data.attachments.img} />
						}
					</div> :
					null
			}
		</div>
		<span className={classes.time} style={props.data.from ? {right: 35} : {left: 35}}>{props.data.time}</span>
	</div>
)

const PersonalChat = props => {
	if(!props.data) {
		return (
			<div style={{width: "70%", display: "flex", justifyContent: "center", alignItems: "center"}}>
				Choose the dialog...
			</div>
		)
	}
	return (
		<div style={{width: "70%"}}>
			<div className={classes.header}>
				{props.data.name}
				<img src={search} alt={search} style={{marginLeft: "auto"}}/>
				<img src={dots} alt={dots} />
				<p className={classes.day}>{props.data.day}</p>
			</div>
			<div style={{minHeight: "calc(100% - 89px)"}}>
				{props.data.children.map(message => (
					<Message data={message} key={Math.random()} />
				))}
				<Formik
					initialValues={{
						message: ""
					}}
					onSubmit={values => {
						console.log(values)
					}}
					render={() => {
						return (
							<Form className={classes.form}>
								<img src={props.user.avatar} alt={props.user.avatar} />
								<Field
									className={classes.textarea}
									name="message"
									component="textarea"
									placeholder="Type your text here"
									rows="1"
								/>
								<img src={smile} alt={smile} />
								<button type="submit" className={classes.btn}>SEND</button>
							</Form>
						)
					}}
				/>
			</div>
		</div>
	)
}

export default PersonalChat;