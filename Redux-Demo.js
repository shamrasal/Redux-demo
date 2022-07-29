
const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'decreament') {
        return {
            counter: state.counter - 1
        }
    }
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer)

console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increament' })
store.dispatch({ type: 'increament' })
store.dispatch({ type: 'increament' })
store.dispatch({ type: 'increament' })

store.dispatch({ type: 'decreament' })
store.dispatch({ type: 'decreament' })
