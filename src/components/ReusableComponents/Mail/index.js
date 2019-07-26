import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

import { Formik, Form, Field } from "formik";

import arrow_back from '../../../icons/arrow_back.svg';
import restore from '../../../icons/restore.svg';
import archive from '../../../icons/archive.svg';
import report from '../../../icons/report.svg';
import folder from '../../../icons/folder.svg';
import bookmark from '../../../icons/bookmark.svg';
import search from '../../../icons/search.svg';
import settings from '../../../icons/settings.svg';
import attachment from '../../../icons/attachment.svg';

import { withRouter } from "react-router";

const useToolbarStyles = makeStyles(theme => ({
root: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 99,
		borderBottom: '2px solid #f5f5f5',
		paddingLeft: 5,
		paddingRight: 0
},
action: {
		display: 'flex',
		alignItems: 'center',
		width: '30%',
		minHeight: 89,
		borderRight: '2px solid #f5f5f5',
},
img: {
		marginLeft: 15
},
input: {
		width: "50%",
		borderRight: '2px solid #f5f5f5',
		padding: "0 30px",
},
form: {
		display: 'flex',
		alignItems: 'center',
		minHeight: 89,
},
"search-input-wrapper": {
		display: "inline-block",
		width: '100%',
		position: "relative",
},
btn: {
		position: "absolute",
		top: 5,
		right: 10,
		border: "none",
		outline: 'none',
		background: "transparent"
},
"search-input": {
		width: '100%',
		fontSize: 14,
		color: "#cccccc",
		border: "none",
		outline: "none",
		padding: 10,
},
settings: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: "10%",
		minHeight: 89,
		borderRight: "2px solid #f5f5f5",
},
settingsBtn: {
		border: "none",
		outline: 'none',
		background: "transparent"
},
backBtn: {
	border: "none",
	outline: 'none',
	background: "transparent"
}
}));

const EnhancedTableToolbar = props => {
	const classes = useToolbarStyles();
	return (
		<Toolbar
		className={classes.root}
		>
			<div className={classes.settings} onClick={props.onClickBack}>
				<button type="button" className={classes.backBtn}>
					<img src={arrow_back} alt={arrow_back} />
				</button>
			</div>
			<div className={classes.action}>
				<img src={restore} alt={restore} className={classes.img} />
				<img src={archive} alt={archive} className={classes.img} />
				<img src={report} alt={report} className={classes.img} />
				<img src={folder} alt={folder} className={classes.img} />
				<img src={bookmark} alt={bookmark} className={classes.img} />
			</div>
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
							<button type="submit" className={classes.btn}>
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
		</Toolbar>
	);
};

const useStyles = makeStyles(theme => ({
root: {
	width: '100%',
},
paper: {
	width: '100%',
	height: '100%'
},
Wrapper: {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "flex-start",
	padding: 30,
	borderBottom: "2px solid #f5f5f5"
},
message: {
	width: "90%",
},
messageHeader: {
	display: "flex",
	width: "100%",
},
h6: {
	color: "#666666",
	marginRight: 15,
	marginBottom: 5
},
emailWrapper: {
	color: "#b3b3b3"
},
text: {
	color: "#808080",
	fontSize: 15,
	lineHeight: "30px"
},
attachments: {
	width: "90%",
},
attachmentImg: {
	marginRight: 10
},
textarea: {
	width: "90%",
	outline: "none",
	resize: "none",
	overflow: "hidden",
	padding: "20px",
	fontSize: "12px",
	fontWeight: 700,
	color: "#999999",
	border: "2px solid #F5F5F5",
	borderRadius: 4
}
}));

function Mail(props) {
const classes = useStyles();
const { mail } = props;

function random_rgba(percent) {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + percent + ')';
}
return (
	<div className={classes.root}>
	<Paper className={classes.paper}>
		<EnhancedTableToolbar 
		onClickBack={props.onClickBack}
		/>
		<div className={classes.Wrapper}>
			{
				mail.avatar ?
					<img src={mail.avatar} alt={mail.avatar} /> :
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "0 auto",
							width: 40,
							height: 40,
							borderRadius: "50%",
							background: random_rgba(0.3),
							color: random_rgba(1),
						}}
					>
						{mail.name.slice(0, 1)}
					</div>
			}
			<div className={classes.message}>
				<div className={classes.messageHeader}>
					<h6 className={classes.h6}>{mail.name}</h6>
					<h6 className={classes.emailWrapper}>{`<${mail.email}>`}</h6>
				</div>
				<h6 className={classes.emailWrapper}>
					{
						mail.type === "Sent Mail" ?
							`to ${mail.name}` :
							"to me"
					}
				</h6>
				<p className={classes.text}>{mail.message}</p>
			</div>
		</div>
		<div className={classes.Wrapper}>
			<img src={attachment} alt={attachment} />
			<div className={classes.attachments}>
				<h6 className={classes.h6}>Attachments</h6>
				{
					mail.attachments.length ?
						<>
							{mail.attachments.map(attachment => <img src={attachment} alt={attachment} className={classes.attachmentImg} key={attachment} />)}
						</> :
						<h6 className={classes.emailWrapper}>No attachments here.</h6>
				}
			</div>
		</div>
		<div className={classes.Wrapper}>
			<img src={props.avatar} alt={props.avatar} />
			<textarea className={classes.textarea} placeholder="Click here to Replay or Forwad" />
		</div>
	</Paper>
	</div>
);
}

export default withRouter(Mail);