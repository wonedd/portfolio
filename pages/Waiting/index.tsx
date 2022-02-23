import { Container, Content, Loader} from '../../shared/Waiting/styles'

export default function Waiting (){

  return(
    <Container>
      <Content>
        <h1>Not yet.</h1>
        <Loader>
        <iframe src="https://embed.lottiefiles.com/animation/96181" style={{border:'none'}}/>
        </Loader>
      </Content>
    </Container>
  )
}