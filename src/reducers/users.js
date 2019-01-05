import { GET_USERS } from '../actions/actionTypes';

import { REGISTER_VOTE } from '../actions/actionTypes';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case 'ADD_QUESTION_TO_USER':
      const user = action.question.formattedQuestion.author;
      const questionId = action.question.formattedQuestion.id;
      console.log({user,questionId});
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat(questionId)
        }
      };
    case REGISTER_VOTE:
    console.log("Most imp part ", state);

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
