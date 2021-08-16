import Actions from "./actions";

const initialState = {
  identity: "",
  isRoomHost: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    default:
      return state;
  }
};

export default reducer;
