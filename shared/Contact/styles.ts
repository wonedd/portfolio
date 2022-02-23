import styled from '@emotion/styled'
import { media } from '../global';

export const Container = styled.div`
  display:flex;
  height: 100vh;
  padding:100px;
  background-color:black;
  opacity: 0;
  animation: fadeInUp 7s ease forwards;

  ${media.maxMobile}{
    background:#26262c; 
  }
`;


export const Content = styled.div`
  width: 70%;
  height: 100%;
  background: linear-gradient(-90deg,#26262c,#232323,#5554,#0000);
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:#f7f7f7;
  gap:5rem;
  border-radius:5px;
  
  input{
    all:unset;
    border-bottom: 1px solid #66707a;
    &:hover {
      border-bottom:1px solid #f7f7f7;
    }
  }
  ${media.maxMobile}{
    width:0;
    margin:0 auto;
  }

  form{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap:5rem;
    opacity: 0;
    animation: fadeInUp 9s ease forwards;
    margin-top:9%;
     
  }


`;

export const MessageBox = styled.textarea`
    all:unset;
    width:100%;
    height:50px;
    border-radius:5px;
    overflow:hidden;
    resize:none;

    &:hover {
      
      background-color:rgba(255,255,255,0.1)
    }
`;
 
export const Title = styled.h3`
  font-family: Comfortaa;
  font-size:3rem;
  font-weight:400;
  color:#eff1f3;

  ${media.maxMobile}{
    font-size:2.5rem;
  }
  
`;


export const Goat = styled.img` 
  width: 30%;
  height: 100%;
  animation: fadeInUpGoat 7s ease forwards; 
  opacity: 0;

  ${media.maxMobile}{
  display: none;
  }
  ${media.minlaptop}{
    width:50%;
  }
  ${media.desktop}{
    width:30%;
  }
 `;

export const Icon = styled.div`
width: 80px;
height: 80px;
position:relative;
opacity:0.5;
cursor: pointer;

display: flex;
text-align: center;
justify-content:center;
align-items:center;


font-family:'Poppins';
font-weight: 300;
font-size:1.7rem;
border: 1px solid;
border-radius:50%;

&:hover{
  opacity:1;
}


`;

export const SubmitButton = styled.button`
  all:unset;
  text-align:center;
  height: 30px;
  width: 250px;

  padding:5px;
  margin-top:25px;
  color:#f7f7f7;
  border: 1px solid #f7f7f7;
  transition:0.5s all;
  cursor:pointer;
  position: relative;
  
  &:hover{  
    background-color:rgba(255,255,255,0.1);
  }
  &:active {
  animation: grow 0.5s ease 1;
}
${media.maxMobile}{
    width:140px;
  }
  
`;