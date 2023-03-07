import { INC, DCR, RESET, LOADING } from "../Constants/ActionType"
export const increment = (data) => {
  return {
    type: INC,
    payload: data
  }
}

export const loading = () => {
  return {
    type: LOADING
  }
}

export const incrementAsync = () => {

  return dispatch => {
    dispatch(loading())
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 3000);
  };
}

export const decrement = (data) => {
  return {
    type: DCR,
    payload: data
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch(loading())
    setTimeout(() => {
      dispatch(decrement());
    }, 3000);
  };
}

export const reset = (data) => {
  return {
    type: RESET,
    payload: data
  }
}

export const resetAsync = () => {
  return dispatch => {
    dispatch(loading())

    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(reset());
    }, 3000);
  };
}