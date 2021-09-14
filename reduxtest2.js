const {createStore} = require('redux');


const initialState = { age : 21 };

// if state is not provided then it takes the initial state 
const myReducer = (state = initialState, action) =>{
    
    const newState  = {...state} ;
    if(action.type === 'ADD'){
        newState.age += 1 ;
    }
    if(action.type === 'SUB'){
        newState.age -= action.val ;
    }
    // in reducer all you need to do is return the new state 
    return newState ;
}

const Addaction = {type:'ADD'} ;
const Subaction = {type:'SUB' , val: 5};

const store = createStore(myReducer) ;
// you have to subscribe after the store creation
store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(Subaction)
