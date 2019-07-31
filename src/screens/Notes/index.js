import React, { Component } from 'react';
import classes from './Notes.module.css';

import WayBar from '../../components/ReusableComponents/WayBar';
import Note from '../../components/ReusableComponents/Note';
import NoteEditor from '../../components/ReusableComponents/NoteEditor';
import { Formik, Form, Field } from "formik";
import search from '../../icons/search.svg';
import settings from '../../icons/settings.svg';

const way = [
	{
		text: "Notes", url: "/notes"
	}
]

const columnElem = [
	{
		text: "All notes",
		color: "transparent"
	},
	{
		text: "Work Category",
		color: "transparent"
	},
	{
		text: "Groups",
		color: "transparent"
	},
	{
		text: "Find duplicates",
		color: "transparent"
	},
	{
		text: "More",
		color: "transparent"
	}
]

class Notes extends Component {
	state = {
		active: "All notes",
		activeNote: 0
	}

	handleClickColumn = (event) => {
		this.setState({
			active: event.target.innerText,
			activeNote: 0
		})
	}

	handleCreateClick = () => {
		this.props.history.push("/create-deal-dashboard")
	}

	handleClickNote = (event) => {
		if(event.target.nodeName === "DIV") {
			this.setState({activeNote: +event.target.attributes[0].value})
		} else {
			this.setState({activeNote: +event.target.parentNode.attributes[0].value})
		}
	}

	render() {
		let notes = this.props.user.notes
			.filter(note => {
				if(this.state.active === "All notes") return note.status
				return note.status === this.state.active 
			})

		let initialValues = notes.length ?
			{
				title: notes[this.state.activeNote].title,
				note: notes[this.state.activeNote].note
			} : 
			null
		return (
			<div className="content">
				<WayBar label="Social" array={way} />
				<h1 className={classes.h1}>Notes</h1>
				<div className={classes.card}>
					<div className={classes.column}>
						<div className={classes["column-element"]}>
							<button type="button" className={classes.btn} onClick={this.handleCreateClick}>ADD CLIENT</button>
						</div>
						{columnElem.map(elem => (
							<div className={`${classes["column-element"]} ${this.state.active === elem.text ? classes.active : ''}`} onClick={this.handleClickColumn} key={elem.text}>
								<div 
								style={{
									marginRight: 15,
									width: 10,
									height: 10,
									borderRadius: 5,
									backgroundColor: elem.color,
								}} />
								{elem.text}
							</div>
						))}
					</div>
					<div style={{width: "100%"}}>
						<div className={classes.header}>
							<div className={classes.input}>
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
													placeholder="Search"
												/>
												<button type="submit" className={classes.btnSearch}>
													<img src={search} alt={search} />
												</button>
											</span>
										</Form>
									)}}
								/>
							</div>
							<div className={classes.settings}>
								<button type="submit" className={classes.settingsBtn}>
									<img src={settings} alt={settings} />
								</button>
							</div>
						</div>
						<div className={classes["notes-holder"]}>
							<div style={{width: "30%", borderRight: "2px solid #f5f5f5"}}>
								{
									notes
										.map((note, index) => <Note data={note} key={note.title} index={index} onClickNote={this.handleClickNote} activeNote={index === this.state.activeNote} />)
								}
							</div>
							<div style={{width: "70%"}}>
								<NoteEditor initialValues={initialValues}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Notes;