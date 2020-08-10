const redux = require('redux')


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// Action Creator
function buyCake() {
    //creating a action - to make a change in store
    return {
        type: BUY_CAKE,
        info: 'helps to buy cake'
    }
}

function buyIceCream() {
    //creating a action - to make a change in store
    return {
        type: BUY_ICE_CREAM,
        info: 'helps to buy ice cream'
    }
}

// intialState of whole app
const cakeIntialState = {
    numberOfCakes: 10
}

const iceCreamIntialState = {
    numberOfIceCream: 30
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
const cakeReducer = (state = cakeIntialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = iceCreamIntialState, action) => {
    switch (action.type) {
        case 'BUY_ICE_CREAM': return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }
        default: return state
    }
}
//Store is the state of app in an object, gives state => getState, take cares of Dispatch and subscribe.

const rootReducer = redux.combineReducers({
    cakeReducer,
    iceCreamReducer
})
const store = redux.createStore(rootReducer)
console.log('intialState', store.getState())
const unsub = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// unsub()