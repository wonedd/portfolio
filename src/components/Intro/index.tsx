import { Container, Main, Title, Cta, SubTitle } from './styles'
import { useRouter } from 'next/router'
import { IoPrism } from "react-icons/io5";

export function Intro() {

  const { push } = useRouter()

  return (
    <Container>
      <Main>
        <IoPrism style={{fontSize:'5rem', color:'#f7f7f7',transformStyle:'preserve-3d', animation:'flip 10s linear infinite'}}/>
        <div>
        <Title><strong>Hi, I'm Marcos.</strong></Title>
        <SubTitle>web developer also writer and a cat lover</SubTitle>
        </div>
        <Cta onClick={()=>{ push('/Contact')}}>VIEW PORTFOLIO</Cta>
      </Main>
      
    </Container>
  )
}