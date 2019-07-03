import React, { Component } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo';
import arrowLeft from '../../icons/arrow_left.svg';

class Header extends Component {
	render() {
		return (
			<div className={classes.header}>
				<Logo />
				{this.props.open ? 
					<button type="button" onClick={this.props.onClickClose} className={classes["btn-back"]}>
						<img src={arrowLeft} alt={arrowLeft} />
					</button> 
					: null
				}
				<div>Hello</div>
			</div>
		)
	}
}

export default Header;