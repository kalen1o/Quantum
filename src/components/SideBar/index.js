import React, { Component } from 'react';
import classes from './SideBar.module.css';

import sizeMe from 'react-sizeme';
import { withRouter } from 'react-router-dom';

import dashboard from '../../icons/dashboard.svg';
import widgets from '../../icons/widgets.svg';
import email from '../../icons/email.svg';
import social from '../../icons/social.svg';
import settings from '../../icons/settings.svg';
import lock from '../../icons/lock.svg';
import accountCircle from '../../icons/account_circle.svg';
import exit from '../../icons/exit.svg';
import arrowRight from '../../icons/arrow_right.svg';
import { Link } from 'react-router-dom';

let LiElem = (props) => {
	const { width } = props.size;
	return (
		<div>
			<li value={props.index} className={props.active === props.index ? classes.active : ''} onClick={props.onChoose}>
				<img src={props.src} alt={props.src} /> 
				{props.open ? <span className={classes.label}>{props.label}</span> : null}
				{props.open ? <img src={arrowRight} alt={arrowRight} className={classes.arrow} /> : null}
			</li>
			<div className={classes.drop} style={width > 200 && props.active === props.index && props.openDrop ? {height: `calc(${props.children.length} * 55px)`}: {height: "0"}}>
				<ul>
					{props.children.map(item => (
						<li key={item.text}>
							<Link to={item.url}>{item.text}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

LiElem = sizeMe()(LiElem)

const iconsLi = [
	{
		icon: dashboard, 
		label: "Dashboard", 
		children: [
			{text: "Commerce Dashboard", url: "/commerce-dashboard"},
			{text: "Analytics Dashboard", url: "/analytics-dashboard"},
			{text: "All Deals", url: "/deals-dashboard"},
			{text: "Create Deal", url: "/create-deal-dashboard"},
		]
	},
	{
		icon: widgets, 
		label: "Widgets",
		children: [
			{text: "Clients", url: "/clients"},
			{text: "Companies", url: "/companies"},
			{text: "Calendar", url: "/calendar"},
			{text: "Statistic", url: "/statistic"},
		]
	},
	{
		icon: email, 
		label: "Email",
		children: [
			{text: "Mailbox CRM", url: "/mailbox"},
			{text: "New Mail", url: "/create-mail"},
		]
	},
	{
		icon: social, 
		label: "Social",
		children: [
			{text: "Notes", url: "/notes"},
			{text: "To Do List", url: "/to-do-list"},
			{text: "Messages", url: "/messages"},
		]
	},
]

const FuncBtn = (props) => (
	<div className={classes["functional-btn"]}>
		<Link to="/"><img src={props.src} alt={props.src} /></Link>
	</div>
)

const iconsFuncBtn = [
	{icon: settings},
	{icon: lock},
	{icon: accountCircle},
	{icon: exit},
]

class SideBar extends Component {
	state = {
		active: 0,
		openDrop: false
	}

	handleChoose = (event) => {
		let active = event.target.tagName === "LI" ? event.target.value : event.target.parentElement.value
		this.setState({active})
		this.handleOpenDrop(active)
	}

	handleOpenDrop = (value) => {
		console.log(this.state.active, value)
		this.state.active === value && this.state.openDrop ?
		this.setState(state => ({
			openDrop: !state.openDrop
		})) :
		this.setState({openDrop: true})
	}

	componentDidMount() {
		switch(this.props.location.pathname) {
			case "/clients":
			case "/companies":
			case "/calendar":
			case "/statistic": this.setState({active: 1}); break;
			case "/mailbox":
			case "/create-mail": this.setState({active: 2}); break;
			case "/notes":
			case "/to-do-list":
			case "/messages": this.setState({active: 3}); break;
			default:
				this.setState({active: 0})
		}
	}

	render() {
		let style = this.props.open ? {minWidth: "255px"} : {width: "80px"}
		let handleClick = !this.props.open ? this.props.onClickOpen : null;
		return (
			<div ref={this.ref} style={style} className={classes["menu-wrapper"]}>
				<ul onClick={handleClick} className={classes.ul}>
					{this.props.open ? <h6 className={classes.h6}>Navigation</h6> : null}
					{iconsLi.map((item, index) => (
						<LiElem 
							src={item.icon} 
							label={item.label} 
							open={this.props.open}
							index={index} 
							active={this.state.active}
							onChoose={this.handleChoose} 
							key={item.icon}
							url={item.url}
							children={item.children}
							openDrop={this.state.openDrop}
						/>
					))}
				</ul>
				<div className={classes["functional-wrapper"]} style={this.props.open ? {flexDirection: "row"} : {flexDirection: "column"}}>
						{iconsFuncBtn.map(item => (
							<FuncBtn src={item.icon} key={item.icon} />
						))}
				</div>
			</div>
		)
	}
}

export default withRouter(SideBar);