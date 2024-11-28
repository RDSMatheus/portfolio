export const debounce = (
  callback: (...args: unknown[]) => void,
  delay: number,
) => {
  let timer: NodeJS.Timeout
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
