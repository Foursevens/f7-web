import React from 'react';

export interface MenuProps {
  children: Array<React.ReactElement<{ key: string }>>;
}

export function Menu({ children }: MenuProps): React.ReactElement {
  return (
    <nav>
      <ul>
        {children.map((child) => (
          <li key={child.key}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}
