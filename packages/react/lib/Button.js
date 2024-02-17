import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { tokens } from '@dss-ds/foundation';
import styled from 'styled-components';
const StyledButton = styled.button `
  /* Static styles */
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  &:disabled {
    opacity: 40%;
  }

  /* Inherit from design tokens */
  transition: ${tokens.animations.default.value};
  color: ${tokens.colors.neutral.white.value};
  border-radius: ${tokens.radius.large.value};
  background-color: ${({ color }) => tokens.colors[color][500].value};
  &:hover {
    background-color: ${({ color }) => tokens.colors[color][700].value};
  }
  &:active {
    background-color: ${({ color }) => tokens.colors[color][800].value};
  }
`;
const Button = forwardRef(({ disabled, loading, color = 'primary', ...rest }, ref) => {
    return (_jsx(StyledButton, { ...rest, ref: ref, color: color, disabled: disabled || loading }));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map