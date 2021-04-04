import {showLoading, hideLoading} from 'react-redux-loading';
import {saveQuestionAnswer, saveQuestion} from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export const saveUserAnswer = (data) => {
    return {
        type: SAVE_ANSWER,
        data,
    }
}

export const saveNewQuestion = (question) => {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export const handleSaveQuestionAnswer = (data) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestionAnswer(data).then(() =>  {
            dispatch(saveUserAnswer(data));
            dispatch(hideLoading());
        });
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {authedUser} = getState();
        return saveQuestion({optionOneText, optionTwoText, author: authedUser})
            .then(question => {
                dispatch(saveNewQuestion(question));
                dispatch(hideLoading());
            });
    }
}
