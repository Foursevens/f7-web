export function throttle<T extends (...argumentz: unknown[]) => unknown>(
  limit: number,
  func: T,
): (...argumentz: Parameters<T>) => ReturnType<T> {
  let waiting = false;
  let result: ReturnType<T>;
  return (...argumentz: Parameters<T>): ReturnType<T> => {
    if (waiting) {
      return result;
    }
    result = func(...argumentz) as ReturnType<T>;
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
    return result;
  };
}

export const window: Window | undefined =
  'window' in globalThis ? globalThis.window : undefined;
