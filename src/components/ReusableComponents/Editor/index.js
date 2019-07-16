import React, { Component } from 'react';
import classes from './Editor.module.css';
import bold from '../../../icons/bold.svg';
import italic from '../../../icons/italic.svg';
import insertLink from '../../../icons/insert_link.svg';
import insertPhoto from '../../../icons/insert_photo.svg';
import listBulleted from '../../../icons/list_bulleted.svg';
import listNumbered from '../../../icons/list_numbered.svg';
import quote from '../../../icons/quote.svg';
import { Field } from "formik";

class Editor extends Component {
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
		let textarea = document.querySelector(`#${this.props.id}`);
		textarea.addEventListener('keydown', autosize);

		function autosize(){
			var el = this;
			setTimeout(function(){
				el.style.cssText ='height: auto';
			  	el.style.cssText = 'height:' + el.scrollHeight + 'px' ;
			},0);
		  }
	}

	render() {
		return (
			<div>
				<div className={classes.editor}>
					<img src={bold} alt={bold} onClick={this.handleBoldClick}/>
					<img src={italic} alt={italic} onClick={this.handleItalicClick}/>
					<img src={insertLink} alt={insertLink} />
					<img src={insertPhoto} alt={insertPhoto} />
					<img src={listBulleted} alt={listBulleted} />
					<img src={listNumbered} alt={listNumbered} />
					<img src={quote} alt={quote} />
				</div>
				<Field
					id={this.props.id}
					className={classes.textarea}
					name={this.props.name}
					component="textarea"
					placeholder="Text"
					rows={this.props.rows}
				/>
			</div>
		)
	}
}

export default Editor;