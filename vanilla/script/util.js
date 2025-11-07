export function createReducer(initialState, actions) {
	return (state = initialState, action) => {
		if (Object.hasOwn(actions, action.type)) {
			return actions[action.type](state, action.payload);
		}
		return state;
	};
}
