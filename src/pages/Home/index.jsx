import React from 'react'
import { Container, Title, ImgLogo } from './styles'
import ButtonComponent from '../../components/Button'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  
  return (
    <Container>
        <Header />
        <ButtonComponent title="Cadastar livro" color='#3c9234' 
          onPress={() => navigation.navigate('BookAdmin')}
        />
        <ButtonComponent title="Mostrar livros" color='#a167e2'
          onPress={() => navigation.navigate('ListBook')}
        />
        <ButtonComponent title="Editar livro" color='#c5b528'
          onPress={() => navigation.navigate('BookEdit')}
        />
        <ButtonComponent title="Emprestar livro" color='#2fc7c7'
          onPress={() => navigation.navigate('BookLend')}
        />
        <ButtonComponent title="Remover livro" color='#2e6dc0'
          onPress={() => navigation.navigate('BookDelete')}
        />
    </Container>
  )
}