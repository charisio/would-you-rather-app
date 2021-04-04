import {RECEIVE_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION} from '../actions/questions';

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            const {data} = action;
            return {
                ...state,
                [data.qid]: {
                    ...state[data.qid],
                    [data.answer]: {
                        ...state[data.qid][data.answer],
                        votes: state[data.qid][data.answer].votes.concat([data.authedUser]),
                    }
                }
            }
        case SAVE_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.id]: question,
            }
        default:
            return state;
    }
}