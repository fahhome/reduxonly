const {createStore} = require('redux');


const initialState = { age : 21 };

// if state is not provided then it takes the initial state 
const myReducer = (state = initialState, action) =>{
    
    const newState  = {...state} ;
    if(action.type === 'ADD'){
        newState.age += 1 ;
    }
    // in reducer all you need to do is return the new state 
    return newState ;
}

const Addaction = {type:'ADD'}

const store = createStore(myReducer) ;

store.dispatch(Addaction)

console.log(store.getState())