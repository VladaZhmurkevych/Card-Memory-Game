export const SECOND = 1000;
export const MINUTE = 60 * 1000;

export const formatTime = (time) => {
  const minutes = Math.floor(time / MINUTE);
  const seconds = Math.floor(time / SECOND) % 60;
  return `${minutes}:${`${seconds}`.padStart(2, '0')}`;
};