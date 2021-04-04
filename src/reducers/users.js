import {RECEIVE_USERS} from '../actions/users';
import {SAVE_ANSWER, SAVE_QUESTION} from '../actions/questions';

export const users = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case SAVE_ANSWER:
            const {data} = action;
            return {
                ...state,
                [data.authedUser]: {
                    ...state[data.authedUser],
                    answers: {
                        ...state[data.authedUser].answers,
                        ...{[data.qid]: data.answer},
                    }
                }
            }
        case SAVE_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: [...state[question.author].questions, question.id],
                }
            }
        default:
            return state;
    }
}