import styled from 'styled-components';
import { Button } from '@shop-playground/ui-elements';
import { useEffect, useState } from 'react';
import axios from 'axios';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [message, setMessage] = useState('loading....');
  useEffect(() => {
    const getMessage = async () => {
      const res = await axios.get<{ message: string }>(
        'http://localhost:3333/welcome'
      );
      setMessage(res.data.message);
    };
    getMessage();
  }, []);
  return (
    <StyledPage>
      <Button variant="base" value="abc" />
      <br />
      {message}
    </StyledPage>
  );
}

export default Index;
