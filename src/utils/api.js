import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA';


export function getInitialStoreData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => {
        return {
            users,
            questions
        }
    });
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(data) {
    return _saveQuestionAnswer(data);
}