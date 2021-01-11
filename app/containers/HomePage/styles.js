import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px 200px;
  display: flex;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px 100px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Container = styled.div``;
