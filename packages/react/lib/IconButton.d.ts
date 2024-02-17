import { ComponentProps } from 'react';
interface IconButtonProps extends ComponentProps<'button'> {
    disabled?: boolean;
    loading?: boolean;
    'aria-label'?: string;
}
declare const IconButton: import("react").ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default IconButton;
