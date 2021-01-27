export const convertTimeTo24 = (timeString) => {
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = (H < 12 || H === 24) ? ":A" : ":P";
  return h + timeString.substr(2, 3) + ampm;
};

export const roundMinutes = (date) => {
  date.setHours(date.getHours() + Math.floor(date.getMinutes()/60));
  date.setMinutes(0, 0, 0);
  date = date.toTimeString().split(' ')[0];
  return date;
};

export const isStartOfHour = (time) => {
  return time.split(":")[1] === '00';
};
