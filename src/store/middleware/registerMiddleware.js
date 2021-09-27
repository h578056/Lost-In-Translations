import { LoginAPI } from "../../Components/Login/loginAPI"
import { ACTION_REGISTER_ATTEMPTING, ACTION_REGISTER_SUCCESS, registerErrorAction, registerSuccessAction } from "../actions/registerActions"
import { sessionSetAction } from "../actions/sessionAction"

export const registerMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if (action.type === ACTION_REGISTER_ATTEMPTING) {      
        LoginAPI.register(action.payload)
        .then(profile => {
            dispatch(registerSuccessAction(profile))
        })
        .catch(error => {
            dispatch(registerErrorAction(error.message))
        })
    }

    if (action.type === ACTION_REGISTER_SUCCESS) {
        dispatch(sessionSetAction(action.payload))
    }
}