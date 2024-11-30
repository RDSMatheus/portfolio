export const debounce = (
  callback: (...args: unknown[]) => void,
  delay: number,
) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
};
