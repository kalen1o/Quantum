import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
	login: Yup.string()
		.required("Required")
		.email("Please specify a valid email.")
})

export const SearchSchema = Yup.object().shape({
	search: Yup.string()
		.required("Required")
})

export const CreateEventSchema = Yup.object().shape({
	title: Yup.string()
		.required("Required"),
	contact: Yup.string()
		.required("Required"),
	sales: Yup.number()
		.min(10, "Minimal salary is 10$")
		.required("Required"),
	status: Yup.string()
		.required("Required"),
	// company: Yup.string()
	// 	.required("Required")
})

export const CreateContactSchema =  Yup.object().shape({
	name: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid first name.'
		}),
	company: Yup.string()
		.required("Required"),
	phone: Yup.string()
		.matches(/^[0-9]*$/, {
			message: 'Please specify a phone number.'
		})
		.min(10, "Please specify a phone number.")
		.required("Required"),
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required"),
	social: Yup.string()
		.required("Required"),
})

export const CreateToDoSchema = Yup.object().shape({
	name: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid first name.'
		}),
	nameTask: Yup.string()
		.required("Required"),
	date: Yup.string()
		.required("Required"),
})