import axios from 'axios';

export const getTimeBlocks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/timeBlocks`);
  return {data: response.data};
};