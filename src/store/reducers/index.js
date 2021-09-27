import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import { sessionReducer } from './sessionReducer'

const appReducer = combineReducers({
    loginReducer,
    registerReducer,
    sessionReducer
})

export default appReducer