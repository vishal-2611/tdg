import { combineReducers } from 'redux'


function UserAnswers(state = { answers: [] }, action) {
    switch (action.type) {
        case 'SET_USER_ANSWERS':
            console.log('dispatch', action.payload)
            return Object.assign({},state,{
                answers : [...state.answers,
                    action.payload
                ]
            })
        default:
            return state
    }
}

  function UserId(state = {userId : [] }, action) {
    switch (action.type) {
        case 'SET_USER_ID':
            console.log('redux Username =>'+action.payload)
            return Object.assign({},state, {
                userId : [...state.userId,{
                    userId : action.payload
                }]
            })
        default:
            return state;
    }
}

const reducer = combineReducers({UserAnswers, UserId})

export default reducer;