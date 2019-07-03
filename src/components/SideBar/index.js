import React, { Component } from 'react';
import classes from './SideBar.module.css';
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

const LiElem = (props) => {
	return (
		<li value={props.index} className={props.active === props.index ? classes.active : ''} onClick={props.onChoose}>
			<Link to={props.url}>
				<img src={props.src} alt={props.src} /> 
				{props.open ? <span className={classes.label}>{props.label}</span> : null}
				{props.open ? <img src={arrowRight} alt={arrowRight} className={classes.arrow} /> : null}
			</Link>
		</li>
	)
}

const iconsLi = [
	{icon: dashboard, label: "Dashboard", url: "/"},
	{icon: widgets, label: "Widgets", url: "/widgets"},
	{icon: email, label: "Email", url: "/email"},
	{icon: social, label: "Social", url: "/social"},
]

const FuncBtn = (props) => (
	<div className={classes["functional-btn"]}>
		<img src={props.src} alt={props.src} />
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
		active: 0
	}

	handleChoose = (event) => {
		console.log(event.target.tagName)
		event.target.tagName === "LI" ? 
		this.setState({active: event.target.value}) :
		event.target.tagName === "A" ?
			this.setState({active: event.target.parentElement.value}) :
			this.setState({active: event.target.parentElement.parentElement.value})
	}

	render() {
		let style = this.props.open ? {width: "255px"} : {width: "80px"}
		let handleClick = !this.props.open ? this.props.onClickOpen : null;
		return (
			<div style={style} className={classes["menu-wrapper"]}>
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

export default SideBar;