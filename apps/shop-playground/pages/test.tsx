import styled from 'styled-components';
import { H1a } from '@shop-playground/ui-elements';
const StyledPage = styled.div`
  .page {
  }
`;

export function Test() {

  return (
    <StyledPage>
     <p>Higgledy Piggledy</p>
     <H1a value="Pong"/>
     <p>fhjskahfjds</p>
    </StyledPage>
  );
}

export default Test;
