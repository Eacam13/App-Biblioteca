import React from 'react'
import {
    Container,
    SectionBook,
    ImgBook,
    SectionInfoBook,
    Title,
    Author,
    Genre,
    SectionCod,
    CodBook,
    AvailableText
} from './styles'

export default function BookItem({ data }) {
    const { id, titulo, autor, genero, disponivel } = data

    return (
        <Container>
            <SectionBook>
                <ImgBook source={require('../../assets/images/livro.png')} />
                <SectionInfoBook>
                    <Title numberOfLines={2}>Título: {titulo}</Title>
                    <Genre>Gênero: {genero}</Genre>
                    <Author>Autor: {autor}</Author>
                </SectionInfoBook>
            </SectionBook>
            <SectionCod>
                <CodBook>Código:{id}</CodBook>
                <AvailableText>{disponivel ? 'Disponivel' : 'Não disponível'}</AvailableText>
            </SectionCod>

        </Container>
    )
}