import { FC } from 'react';
import styled from 'styled-components';

type Variant = 'king' | 'kong';

export type H1aProps = {
  value: string;
  variant?: Variant;
};

const size = {
  king: 'small',
  kong: 'large',
<<<<<<< HEAD
=======
  hey: 'xyz',
>>>>>>> fe906d2ad6f23a1c29c4dcbf7b99515c7a4d13fe
};

const H1Wrapper = styled.h1<{ variant: Variant }>`
  font-size: ${(props) => size[props.variant]};
`;

export const H1a: FC<H1aProps> = ({ value, variant = 'king' }) => {
  return <H1Wrapper variant={variant}>{value}</H1Wrapper>;
};
