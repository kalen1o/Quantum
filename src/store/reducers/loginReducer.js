const initialState = {
	login: "tonyalvarez@gmail.com"
}

function loginReducer (state = initialState, action) {
	switch (action.type) {
		case 'SET_LOGIN':
			return {
				...state,
				login: action.payload.login
			}

		default:
			return state;
	}
}

export default loginReducer;