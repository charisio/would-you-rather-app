export const constructQuestion = optionText => 'Would you rather ' + optionText + '?';

export const calculatePercentage = (optionOne, optionTwo) =>
    Math.round((optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length) * 100) * 10) / 10;