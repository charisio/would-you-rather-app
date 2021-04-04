import {showLoading, hideLoading} from 'react-redux-loading';
import {getInitialStoreData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';

export function getInitialStateData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialStoreData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}