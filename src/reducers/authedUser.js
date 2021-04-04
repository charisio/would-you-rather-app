import {REMOVE_AUTHED_USER, SET_AUTHED_USER} from '../actions/authedUser';

export const authedUser = (state=null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.userId
        case REMOVE_AUTHED_USER:
            return null;
        default:
            return state
    }
}