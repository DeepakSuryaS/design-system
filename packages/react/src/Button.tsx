import { forwardRef, ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return <button ref={ref} disabled={disabled || loading} {...rest} />;
  },
);

Button.displayName = 'Button';

export default Button;
