import {
  GET_QUESTIONS,
  ADD_QUESTION,
  REGISTER_VOTE,
} from '../actions/actionTypes';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
    console.log("action in add question",action);
    console.log("state in add question",state);
      return {
        ...state,
        [action.question.formattedQuestion.id]: action.question.formattedQuestion,


      };

    case REGISTER_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
