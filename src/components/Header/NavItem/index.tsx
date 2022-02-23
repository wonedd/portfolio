
import React from 'react';
import { Link } from './styles' 


interface Linkprops{
  title: string;
 
}

export function NavItem({ title }:Linkprops){
  
  function handleClick( title:string ){
    const id = document.getElementById(title);
    id.scrollIntoView({ behavior: "smooth" });
  }

  return(
    <Link onClick={()=>handleClick(title)}>{title}</Link>
  )

}