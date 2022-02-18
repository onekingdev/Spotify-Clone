const username = null;

export default (state = username, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return action.payload;
    default:
      return state;
  }
};
