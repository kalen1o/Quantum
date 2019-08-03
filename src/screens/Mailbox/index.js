import React, { Component } from 'react';
import classes from './Mailbox.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import inbox from '../../icons/inbox.svg';
import drafts from '../../icons/drafts.svg';
import send from '../../icons/send.svg';
import deleteicon from '../../icons/delete.svg';

import MailTable from '../../components/ReusableComponents/MailTable';
import Mail from '../../components/ReusableComponents/Mail';

const way = [
	{
		text: "Mails", url: "/mailbox"
	}
]

const columnElemClick = [
	{
		text: "Inbox",
		icon: inbox
	},
	{
		text: "Draft",
		icon: drafts
	},
	{
		text: "Sent Mail",
		icon: send
	},
	{
		text: "Trash",
		icon: deleteicon
	}
]

const columnElem = [
	{
		text: "Project",
		color: "#34CB49"
	},
	{
		text: "Web",
		color: "#F9AD3D"
	},
	{
		text: "Home",
		color: "#1875F0"
	},
	{
		text: "Work",
		color: "#5553CE"
	}
]

class Mailbox extends Component {
	state = {
		active: "Inbox",
		mail: null
	}

	handleClickColumn = (event) => {
		this.setState({
			active: event.target.innerText,
			mail: null
		})
	}

	handleCreateClick = () => {
		this.props.history.push("/create-mail")
	}

	handleClickRow = (event) => {
		console.dir(event.target.id)
		console.log(event.target.id.length)
		if(event.target.id.length) {
			this.setState({mail: event.target.innerText})
		} if(event.target.tagName === "IMG" || event.target.tagName === "DIV") {
			this.setState({mail: event.target.parentNode.parentNode.children[5].innerText})
		} else {
			this.setState({mail: event.target.parentNode.children[5].innerText})
		}
	}

	handleClickBack = () => {
		this.setState({mail: null})
	}

	render() {
		const mail = this.props.user.mail.find(mail => mail.theme === this.state.mail)
		return (
			<div className="content">
				<WayBar label="Email" array={way} />
				<h1 className={classes.h1}>Mailbox CRM</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<div className={classes["column-element"]}>
							<button type="button" className={classes.btn} onClick={this.handleCreateClick}>NEW MAIL</button>
						</div>
						<div style={{borderBottom: "2px solid #f5f5f5"}}>
							{columnElemClick.map(elem => (
								<div className={`${classes["column-elementClick"]} ${this.state.active === elem.text ? classes.active : ''}`} onClick={this.handleClickColumn} key={elem.text}>
									<img
									src={elem.icon}
									alt={elem.icon}
									style={{
										marginRight: 15
									}} />
									{elem.text}
								</div>
							))}
						</div>
						{columnElem.map(elem => (
							<div className={classes["column-element"]} key={elem.text}>
								<div 
								style={{
									marginRight: 25,
									width: 10,
									height: 10,
									borderRadius: 5,
									backgroundColor: elem.color,
								}} />
								{elem.text}
							</div>
						))}
					</div>
					{
						this.state.mail ?
							<Mail mail={mail} onClickBack={this.handleClickBack} avatar={this.props.user.avatar}/> :
							<MailTable rows={this.props.user.mail} sort={this.state.active} onClickRow={this.handleClickRow}/>
					}
				</div>
			</div>
		)
	}
}

export default Mailbox;