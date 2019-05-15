import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_START:
    console.log("CR", state);
    return {
      ...state,
      fetching: true,
      // error:
      //   "Uh oh... You haven't built out your action file yet! Go to actions/index.js and use redux-thunk to make a call to the NASA api."
    };
  case FETCH_SUCCESS:
    console.log("CR", state);
    return {
      ...state,
      characters: [...action.payload],
      fetching: false,
    };
  case FETCH_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
