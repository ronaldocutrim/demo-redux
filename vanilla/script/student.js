export const STUDENT_TYPES = {
	INCREMENTAR_TEMPO: "STUDENT/INCREMENTAR_TEMPO",
	REDUZIR_TEMPO: "STUDENT/REDUZIR_TEMPO",
	MODIFICAR_EMAIL: "STUDENT/MODIFICAR_EMAIL",
};

export const STUDENT_ACTIONS = {
	[STUDENT_TYPES.INCREMENTAR_TEMPO](state, days) {
		console.log(days);
		return {
			...state,
			accessDays: state.accessDays + days,
		};
	},
	[STUDENT_TYPES.REDUZIR_TEMPO](state, days) {
		return {
			...state,
			accessDays: state.accessDays - days,
		};
	},
	[STUDENT_TYPES.MODIFICAR_EMAIL](state, email) {
		return {
			...state,
			email: email,
		};
	},
};

const initialStudentState = {
	name: "Ronaldo",
	email: "ronaldocutrim@gmail.com",
	accessDays: 30,
};

export const studentReducer = createReducer(
	initialStudentState,
	STUDENT_ACTIONS,
);
