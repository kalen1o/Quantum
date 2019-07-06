const getLogin = (login = "anonymous@gmail.com") => ({
	type: "SET_LOGIN",
	payload: {login}
})

export default getLogin;