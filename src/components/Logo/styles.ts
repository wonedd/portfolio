import styled from '@emotion/styled'
import { media } from '../../../shared/global';



export const Icon = styled.div`
  width: 50px;
  height: 50px;

  
  display: flex;
  text-align: center;
  justify-content:center;
  align-items:center;
  
  
  font-family:'Poppins';
  font-weight: 300;
  font-size:1.7rem;
  border: 1px solid;
  border-radius:50%;

  ${media.maxMobile}{
    display:none;
  }
 
`;

export const Balls = styled.div `
    ${media.maxMobile}{
    display:none;
  }
`;
