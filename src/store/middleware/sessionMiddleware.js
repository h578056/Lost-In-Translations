import { ACTION_SESSION_SET } from "../actions/sessionAction"

export const sessionMiddleware = ({ dispatch }) => next => action => {
    next(action)

    console.log(JSON.stringify(action.payload) + "herro")

    if (action.type === ACTION_SESSION_SET) {
        localStorage.setItem('rslt-ss', JSON.stringify(action.payload))
    }
}