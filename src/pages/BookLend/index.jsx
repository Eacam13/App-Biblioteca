import React, { useState } from 'react'
import { ButtonLend, ButtonSearch, ButtonText, Container, GenreInput, InputId, SectionId, SectionInputs, Title, TitleInput } from './styles'
import { useStoreData } from '../../backend'
import { FontAwesome } from '@expo/vector-icons'

export default function BookLend() {
    const { dataLivros, adicionarLivro } = useStoreData()
    const [idBook, setIdBook] = useState('')
    const [titulo, setTitulo] = useState('')
    const [genero, setGenero] = useState('')
    const [autor, setAutor] = useState('')
    const [type, setType] = useState(false)



    function handleIdBook(id){
        const idNumber = parseInt(id, 10)
        const livroEncontrado = dataLivros.find((livro) => livro.id === idNumber)
        if (livroEncontrado) {
            setIdBook(id)
            setTitulo(livroEncontrado.titulo)
            setGenero(livroEncontrado.genero)
            setAutor(livroEncontrado.autor)
            setType(true)
        } else {
            alert('Livro não encontrado.')
        }
    }

    function handleLendBook(){
        adicionarLivro(idBook, titulo, genero, autor, false, true)
        setType(false)
        
        alert('Livro emprestado sucesso.')
    }

    return (
        <Container>
            <Title>Emprestar livro</Title>
            <SectionId>
                <InputId 
                    placeholder="Digite o código do livro..." 
                    value={idBook} 
                    onChangeText={(text)=> setIdBook(text)}
                />
                <ButtonSearch onPress={() => handleIdBook(idBook)}>
                    <FontAwesome name="search" size={20} color="black" />
                </ButtonSearch>
            </SectionId>
            { type && (
                <SectionInputs>
                    <TitleInput 
                        placeholder='Título'
                        value={titulo}
                        onChangeText={(text) => setTitulo(text)}  
                    />
                    <TitleInput 
                        placeholder='Gênero'
                        value={genero}
                        onChangeText={(text) => setGenero(text)} 
                    />
                    <TitleInput 
                        placeholder='Autor(a)'
                        value={autor}
                        onChangeText={(text) => setAutor(text)} 
                    />
                    <ButtonLend onPress={handleLendBook}>
                        <ButtonText>Emprestar livro</ButtonText>
                    </ButtonLend>
                </SectionInputs>
            )}
        </Container>
    )
}