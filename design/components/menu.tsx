import React from 'react';

export interface MenuProps {
  children: React.ReactNodeArray;
}

export function Menu({ children }: MenuProps): React.ReactElement {
  return (
    <nav>
      <ul>
        {children.map(
          (child): React.ReactElement => (
            <li>{child}</li>
          ),
        )}
      </ul>
    </nav>
  );
}
