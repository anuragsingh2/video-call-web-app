import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getTokenFromTwilio = async (setAccessToken, identity) => {
  const randomId = uuidv4();

  console.log(identity);

  const response = await axios.get(
    `https://zoom-clone-services-8615-dev.twil.io/token-service?identity=${randomId}${identity}`
  );

  const data = response.data;

  if (data.accessToken) {
    setAccessToken(data.accessToken);
  }
};

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://zoom-clone-services-8615-dev.twil.io/room-exists?roomId=${roomId}`
  );

  return response.data.roomExists;
};
