import { combineReducers } from "redux";
import { lessonReducer } from "./lesson.js";
import { studentReducer } from "./student.js";

const devtools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
	lesson: lessonReducer,
	student: studentReducer,
});

const store = Redux.createStore(reducer, devtools);
