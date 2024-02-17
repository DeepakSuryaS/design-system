import { ComponentProps } from 'react';
import { tokens } from '@dss-ds/foundation';
export interface ButtonProps extends ComponentProps<'button'> {
    /** If button is in disabled state */
    disabled?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Color based on the color props */
    color: keyof typeof tokens.colors;
}
declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
