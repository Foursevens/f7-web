import { useEffect, useState } from 'react';

import { throttle, window } from './utils';

const BREAKPOINT_MAP = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export type BreakPoint = keyof typeof BREAKPOINT_MAP;

const MILLISECONDS_THROTTLE_RESIZE = 50;

function determineBreakPoint(): BreakPoint {
  const [breakpoint] = Object.entries(BREAKPOINT_MAP)
    .reverse()
    .find(([, size]) => (window?.innerWidth ?? BREAKPOINT_MAP.md) > size) as [
    BreakPoint,
    number,
  ];
  return breakpoint;
}

export function useBreakPoint(): BreakPoint {
  const [breakpoint, setBreakPoint] = useState<BreakPoint>(
    determineBreakPoint(),
  );
  useEffect(() => {
    const onResize = throttle(MILLISECONDS_THROTTLE_RESIZE, (): void => {
      setBreakPoint(determineBreakPoint());
    });
    window?.addEventListener('resize', onResize);
    return (): void => {
      window?.removeEventListener('resize', onResize);
    };
  }, []);
  return breakpoint;
}
