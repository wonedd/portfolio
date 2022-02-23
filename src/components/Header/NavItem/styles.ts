import styled from '@emotion/styled'
import { media } from '../../../../shared/global';


export const Link = styled.span`
  display: initial;
  cursor: pointer;

  &:hover{
      animation: MoveUpDown 1.2s linear infinite;
      filter:brightness(50%);
    }
   
`;