import { Container, Content, Title, Goat, Icon, SubmitButton, MessageBox } from '../../shared/Contact/styles'
import { IoPrism } from "react-icons/io5";
import { useRouter } from 'next/router';

export default function Contact() {
  
  const {push} = useRouter()

  return (
    <Container>
      <Goat src="/assets/goat.jpg" />
      <Content>        
         <Title>Contact Me</Title>
         <Icon onClick={()=>{push('/')}}><IoPrism style={{fontSize:'3rem', color:'#f7f7f7',transformStyle:'preserve-3d', animation:'flip 10s linear infinite'}}/></Icon>
      <SubmitButton onClick={()=>push('https://api.whatsapp.com/send?phone=5527992558381&text=Wait%20a%20minute%20%3A)')}type="submit">CONTINUE</SubmitButton>  
      </Content>
    </Container>
  ) 
} 