import styled from '@emotion/styled'
import { media } from '../../../shared/global';

interface menuMobileProps{
  isOpen: boolean;
}

export const Container = styled.header<menuMobileProps>`
  display: flex;
  position:fixed;
  justify-content: space-between;
  top:100px;
  width: 100%;
  color:#f4f9e9;
  h3{
    all:unset;
    font-size:1.2rem;
  }
  ${media.minlaptop}{
    gap:1rem;
    left:2%;  
  }
  ${media.maxMobile}{
    text-align:center;
    justify-content:center;
    align-items:center;
    position: absolute;

    top: -100px;
    height: ${props => (props.isOpen? 'calc(100vh + 100px)' : '0')};
    transition:1s all;
    background-color: black;
    z-index:1;
    
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-top:20px;
  gap:2rem;
a{  
    all:unset;
    cursor:pointer;
    &:hover{
      animation: MoveUpDown 1.2s linear infinite;
      filter:brightness(50%);
    }
   
  }
  ${media.minlaptop}{
   position:relative;
   right:5%;
  }
  
  ${media.maxMobile}{
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;

  
    &:active{
      filter:brightness(50%);
    }

  }
`;

export const MobileButton = styled.div`
    border-top: 2px solid;
    width: 20px;
    color: #f7f7f7;
    position: absolute;
    z-index:10;
    right: 10px;
    top: 10px;
    &::after,
    &::before { 
        width: 20px;
        height: 2px;
        background: currentColor;
        content:''; 
        display:block; 
        margin-top: 5px;
        position: relative;
        transition: .3s;
        
        
    }
    &.active{
        border-top-color: transparent;
    }
    &.active::before{
        transform: rotate(135deg);
    }
    &.active::after{
        transform: rotate(-135deg);
        top: -7px;
    }

    ${media.minlaptop}{
      display: none;
    }
   
`;

