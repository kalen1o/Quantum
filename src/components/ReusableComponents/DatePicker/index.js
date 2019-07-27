import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import today from '../../../icons/today.svg';
import classes from './DatePicker.module.css'

class ExampleCustomInput extends Component {
	render() {
		return (
			<button
				type="button"
				className={classes["custom-input"]}
				onClick={this.props.onClick}
			>
				<img src={today} alt={today} />
				{this.props.value}
			</button>
		)
	}
  }

class DatePickerField extends Component {
  render() {
	const {value, name, onChange} = this.props;
	return (
		<DatePicker
			customInput={<ExampleCustomInput value={value} classDiv={this.props.classDiv} />}
			selected={value}
			dateFormat="dd MMMM yyyy"
			onChange={val => {
				onChange(name, val);
			}} 
			minDate={new Date()}
		/>
	  );
  }
};

export default DatePickerField;