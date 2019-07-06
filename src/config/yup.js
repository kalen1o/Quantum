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