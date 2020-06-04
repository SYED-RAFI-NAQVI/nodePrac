const redux = require('redux')


const BUY_CAKE = 'BUY_CAKE'

// Action Creator
function buyCake() {
    //creating a action - to make a change in store
    return {
        type: BUY_CAKE,
        info: 'helps to buy cake'
    }
}

// intialState of whole app
const intialState = {
    numberOfCakes: 10
}


// Reducer - takes previousState and action gives new state
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}

//Store is the state of app in an object, gives state => getState, take cares of Dispatch and subscribe.
const store = redux.createStore(reducer)
console.log('intialState', store.getState())
const unsub = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsub()