import React, { Component } from 'react';
import classes from './InfoBoard.module.css';

class InfoBoard extends Component {
	state = {
		open: false
	}

	handleOpen = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		const visibleInfo = this.props.data.children.length > 4 ? this.props.data.children.slice(0, 4) : this.props.data.children.slice(0, this.props.data.children.length)
		const invisibleInfo = this.props.data.children.length > 4 ? this.props.data.children.slice(4, this.props.data.children.length) : undefined;
		return (
			<div className={classes.card}>
				<div className={classes.header} style={{borderLeft: `2px solid ${this.props.color}`}}>
					{this.props.data.label}
				</div>
				{visibleInfo.map(info => (
					<div className={classes.info}>
						{info}
					</div>
				))}
				<div className={classes["invisible-board-wrapper"]} style={this.state.open ? {height: "auto"} : {height: 0}}>
					{
						invisibleInfo ?
						invisibleInfo.map(info => (
							<div className={classes.info}>
								{info}
							</div>
						)) :
						null
					}
				</div>
				{
					this.props.data.children.length > 4 ? 
						<button type="button" onClick={this.handleOpen} className={classes.btn}>SHOW MORE</button> :
						null
				}
			</div>
		)
	}
}

export default InfoBoard;