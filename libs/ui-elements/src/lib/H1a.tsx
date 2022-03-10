import { FC } from 'react';
import styled from 'styled-components';

type Variant = 'king' | 'kong';

export type Props2 = {
  value: string;
  variant?: Variant;
};

const size = {
  king: 'small',
  kong: 'large',
  hello: 'aaaa',
};

const H1Wrapper = styled.h1<{ variant: Variant }>`
  font-size: ${(props) => size[props.variant]};
`;

export const H1a: FC<Props2> = ({ value, variant = 'king' }) => {
  return <H1Wrapper variant={variant}>{value}</H1Wrapper>;
};
