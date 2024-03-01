import React from 'react'
import { ButtonOption, TextButton, Container } from './styles'


export default function ButtonComponent({ title, color, onPress }) {

  return (
    <ButtonOption onPress={onPress} color={color}>
      <TextButton>{title}</TextButton>
    </ButtonOption>
  )
}