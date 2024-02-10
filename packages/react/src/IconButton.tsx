import { forwardRef, ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
  'aria-label'?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button ref={ref} disabled={disabled || loading} {...rest}>
        {rest.children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
