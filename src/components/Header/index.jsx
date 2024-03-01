import React from 'react'
import { Container, Title, ImgLogo } from './styles'

export default function Header() {
  return (
    <Container>
        <ImgLogo source={require('../../assets/images/logo.png')} />
        <Title>LibTeca</Title>
    </Container>
  )
}