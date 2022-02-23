import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color:#f7fff7;
  justify-content:center;
  align-items:center;
  text-align:center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap:3rem;

  color: #00607a;
  font-family: Comfortaa;
  font-size:2rem;
  h1{
    animation:blinkText 2s linear infinite;
  }
`;

export const Loader = styled.div``;