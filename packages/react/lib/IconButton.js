import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const IconButton = forwardRef(({ disabled, loading, ...rest }, ref) => {
    return (_jsx("button", { ref: ref, disabled: disabled || loading, ...rest, children: rest.children }));
});
IconButton.displayName = 'IconButton';
export default IconButton;
//# sourceMappingURL=IconButton.js.map