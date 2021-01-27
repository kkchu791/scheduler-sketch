import axios from 'axios';

export const getBlocks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/blocks`);
  return {data: response.data};
};

export const getBlocksByDateRange = async ({startDate, endDate}) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/blocks`, {params: { startDate, endDate }});
  return {data: response.data};
};

export const getUpcomingBlock = async ({userId}) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/blocks/upcoming`, {params: { user_id: userId }});
  return {data: response.data};
};

export const createBlock = async ({
  creator_id,
  time_block_id,
  date
}) => {
  const blockData = { creator_id, time_block_id, date};
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/blocks`, blockData);

  return {data: response.data};
}

export const updateBlock = async ({
  joinerId,
  blockId,
  roomUrl,
}) => {
  const blockData = {joiner_id: joinerId, room_url: roomUrl}
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/blocks/${blockId}`, blockData);

  return {data: response.data};
}

export const removeBlock = async ({
  userId,
  blockId,
}) => {
  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/blocks`, {params: {block_id: blockId, user_id: userId}});
  return {data: response.data};

} 