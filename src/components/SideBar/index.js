import React, { Component } from 'react';
import Logo from '../Logo';
import arrowLeft from '../../icons/arrow_left.svg';
import classes from './SideBar.module.css';
import dashboard from '../../icons/dashboard.svg';

const LiElem = (props) => (
	<li onClick={props.onClickLi}>
		<img src={props.src} alt={props.src} /> {props.label ? props.label : null}
	</li>
)

const iconsLi = [
	{icon: dashboard, label: "Dashboard"}
]

class SideBar extends Component {
	stopPropagation = (event) => {
		event.persist();
		event.nativeEvent.stopImmediatePropagation()
	}

	hello = () => {
		console.log('hello')
	}

	render() {
		return (
			<div className={classes["menu-wrapper"]}>
				{this.props.open ?
					(
						<div onClick={this.stopPropagation} className="!">
							<ul className={classes.ul}>
								<h6 className={classes.h6}>Navigation</h6>
								{iconsLi.map(item => (
									<LiElem onClickLi={this.hello} src={item.icon} label={item.label} />
								))}
							</ul>
						</div>
					) :
					(
						<div>
							<ul onClick={this.props.onClickOpen} className={classes.ul}>
								<li>
									<img src={dashboard} alt={dashboard} />
								</li>
							</ul>
						</div>
					)
				}
			</div>
		)
	}
}

export default SideBar;