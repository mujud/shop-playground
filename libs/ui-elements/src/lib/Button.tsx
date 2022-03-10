import { FC } from 'react';
import styled from 'styled-components';

type Variant = 'base' | 'warning' | 'destruct';

export type Props = {
  value: string;
  variant?: Variant;
};

const colors = {
  base: 'gray',
  warning: 'yellow',
  xyz: 'abc',
  destruct: 'red',
};

const ButtonWrapper = styled.button<{ variant: Variant }>`
  background: ${(props) => colors[props.variant]};
`;

export const Button: FC<Props> = ({ value, variant = 'base' }) => {
  return <ButtonWrapper variant={variant}>{value} *</ButtonWrapper>;
};
