import { Container, Nav, MobileButton } from './styles'
import { Logo } from '../Logo'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavItem } from './NavItem'

export function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const handleButton = () => {
    var btn = document.getElementById('btn')

    btn.classList.toggle('active')

    setIsOpen(!isOpen)

  }

  return (
    <>
      <MobileButton id="btn" onClick={handleButton} />
      <Container isOpen={isOpen}>
        <Logo />
        <Nav>
          <NavItem title="WORK" />
          <Link href="/Contact">CONTACT</Link>
          <Link href="/Waiting">STORE</Link>
          <Link href="/Waiting">ARTICLES</Link>
        </Nav>
      </Container>
    </>
  )
}