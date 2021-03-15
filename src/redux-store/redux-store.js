import drumMachineReducer from "./drum-machine-reducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    drum: drumMachineReducer

});


const store = createStore (reducers);




export default store;