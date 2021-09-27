const API_KEY = '9gBLjmloJSGc4aXYAgCecUmt4RZL1GOGy40wEQwCtQZzMXlgk8ZIWnaBNrOSvwCn';
const API_URL = 'https://noroff-assignment-api-emoye.herokuapp.com/translations';

export const LoginAPI = {
    register(credentials) {
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'X-API-Key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(async (response) => {

            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return await response.json()
        })
    },

    getUser(credentials) {
        return fetch(`${API_URL}?username=${credentials.username}`)
        .then(async (response) => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return await response.json()
        })
        .then(results => {
        })
        .catch(error => {
        })
    }
}