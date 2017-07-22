import * as types from '../actions/actionTypes';

export  function postReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case types.LOAD_POST_SUCCESS:
      return action;
    default:
      return state;
  }
}
