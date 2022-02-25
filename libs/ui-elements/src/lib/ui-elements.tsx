import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiElementsProps {}

const StyledUiElements = styled.div`
  color: pink;
`;

export function UiElements(props: UiElementsProps) {
  return (
    <StyledUiElements>
      <h1>Welcome to UiElements!</h1>
    </StyledUiElements>
  );
}

export default UiElements;
