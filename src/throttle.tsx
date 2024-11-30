export function throttle(
  callback: (...args: unknown[]) => void,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: unknown[]) => {
    if (!timer) {
      callback(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
