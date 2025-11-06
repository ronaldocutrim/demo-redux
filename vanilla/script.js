import { createStore } from 'redux'

const initialState = {
  message: "Welcome"
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'dispatch':
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer); 

function dispatch() {
  store.dispatch({ type: 'dispatch', payload: { message: 'Bye Bye...' } })
}

function render() {
  const state = store.getState()
  document.getElementById('greeting').innerText = state.message;
}

store.subscribe(render)
render()

document.querySelector('button').addEventListener('click', dispatch)