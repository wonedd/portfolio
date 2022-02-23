import { Icon, Balls } from './styles'
import { IoPrism } from "react-icons/io5";

export function Logo (){

  return(
    <>
    <Icon><IoPrism /></Icon>
    <Balls style={{width:'20px',height:'20px', border:'1px solid', position:'absolute',left:'-8px',borderRadius:'50%', animation:'circle 2s linear', backgroundColor:'#f4f9e9'}} />
    <Balls style={{width:'20px',height:'20px', border:'1px solid', position:'absolute',left:'38px',borderRadius:'50%',top:'30px', animation:'circle 3s linear', }} />
    </>
  )
}