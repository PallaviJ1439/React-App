let initialState = {
  list: [],
};

let todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        list: [...state.list, action.payload],
      };
    case "DELETE_TODO":
      state.list.splice(action.payload, 1);
      return {
        list: [...state.list],
      };
    case "REMOVE_ALL_TODOS":
      return {
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducer;