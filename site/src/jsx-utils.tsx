import React, { ReactElement } from 'react';

export function joinStringsWithLineBreaks(list: string[]): ReactElement[] {
  return list.map((item) => (
    <span key={item}>
      {item}
      <br />
    </span>
  ));
}
