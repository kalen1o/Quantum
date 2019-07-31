import React, { Component } from 'react';
import classes from './NoteEditor.module.css';

import { Formik, Form, Field } from "formik";
import bold from '../../../icons/bold.svg';
import italic from '../../../icons/italic.svg';
import insertLink from '../../../icons/insert_link.svg';
import insertPhoto from '../../../icons/insert_photo.svg';
import listBulleted from '../../../icons/list_bulleted.svg';
import listNumbered from '../../../icons/list_numbered.svg';
import quote from '../../../icons/quote.svg';
import printshop from '../../../icons/printshop.svg';
import deleteTrash from '../../../icons/delete.svg';

class NoteEditor extends Component {
	state = {
		bold: false,
		italic: false
	}

	handleBoldClick = () => {
		this.setState(state => ({
			bold: !state.bold
		}))
	}

	handleItalicClick = () => {
		this.setState(state => ({
			italic: !state.italic
		}))
	}

	componentDidMount() {
		let textareaTitle = document.querySelector(`#title`);
		textareaTitle.addEventListener('keydown', autosize);

		function autosize(){
			var el = this;
			setTimeout(function(){
				el.style.cssText +='height: auto';
			  	el.style.cssText += 'height:' + el.scrollHeight + 'px' ;
			},0);
		  }
	}

	render() {
		let values = this.props.initialValues
		console.log(values, 'here')
		return (
			<>
				<div className={classes.editor}>
					<img src={bold} alt={bold} onClick={this.handleBoldClick} style={this.state.bold ? {border: "2px solid #f5f5f5"} : {border: "2px solid transparent"}}/>
					<img src={italic} alt={italic} onClick={this.handleItalicClick} style={this.state.italic ? {border: "2px solid #f5f5f5"} : {border: "2px solid transparent"}} />
					<img src={insertLink} alt={insertLink} />
					<img src={insertPhoto} alt={insertPhoto} />
					<img src={listBulleted} alt={listBulleted} />
					<img src={listNumbered} alt={listNumbered} />
					<img src={quote} alt={quote} />
					<img src={printshop} alt={printshop} className={classes.img} />
					<img src={deleteTrash} alt={deleteTrash} />
				</div>
				{
					this.props.initialValues ?
					<Formik
						initialValues={values}
						enableReinitialize="true"
						onSubmit={values => {
							console.log(values)
						}}
						render={({errors, touched}) => {
							return (
								<Form>
									<div style={{padding: 30, borderBottom: "2px solid #f5f5f5"}}>
										<Field
											id="title"
											name="title"
											component="textarea"
											placeholder="Title"
											rows="1"
											className={classes["textarea-title"]}
										/>
										<Field
											name="note"
											component="textarea"
											placeholder="Note"
											rows="13"
											className={classes["textarea-note"]}
										/>
									</div>
									<div style={{padding: 30}}>
										<button type="submit" className={classes.btn}>SAVE</button>
										<button type="button" className={classes.btnCancel}>CANCEL</button>
									</div>
								</Form>
							)
						}}
					/> : null
				}
			</>
		)
	}
}

export default NoteEditor;