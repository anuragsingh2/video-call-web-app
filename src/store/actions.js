const Actions = {
  SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
  SET_IDENTITY: "SET_IDENTITY",
};

export const setIdentity = (identity) => {
  return {
    type: Actions.SET_IDENTITY,
    identity,
  };
};

export const setIsRoomHost = (isRoomHost) => {
  return {
    type: Actions.SET_IS_ROOM_HOST,
    isRoomHost,
  };
};

export default Actions;
