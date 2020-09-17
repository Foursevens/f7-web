import React from 'react';
import './button.css';

export interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick: (event: React.MouseEvent) => void;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label,
  primary = false,
  size = 'medium',
  ...props
}: ButtonProps): React.ReactElement => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={backgroundColor == null ? {} : { backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
