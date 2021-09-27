export const ACTION_REGISTER_ATTEMPTING = '[register] ATTEMPT'
export const ACTION_REGISTER_SUCCESS = '[register] SUCCESS'
export const ACTION_REGISTER_ERROR = '[register] ERROR'

export const registerAttemptAction = credentials => ({
    type: ACTION_REGISTER_ATTEMPTING,
    payload: credentials
})

export const registerSuccessAction = profile => ({
    type: ACTION_REGISTER_SUCCESS,
    payload: profile
})

export const registerErrorAction = error => ({
    type: ACTION_REGISTER_ERROR,
    payload: error
})