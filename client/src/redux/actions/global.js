import { SET_GLOBAL_DATA } from '../../constants/actionTypes';

export function setGlobalData(content) {
  return {
    type: SET_GLOBAL_DATA,
    content,
  };
}

export function updateGlobalData(obj) {
  return (dispatch) => {
    dispatch(setGlobalData(obj));
  };
}
