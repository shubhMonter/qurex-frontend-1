export const setAuth = (payload) => {
	return {
		type: 'SET_AUTH',
		payload,
	}
}

export const emptyAuth = (payload) => {
	return {
		type: 'EMPTY_AUTH',
		payload,
	}
}
