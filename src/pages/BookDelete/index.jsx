import React, { useState, useEffect } from 'react'
import { ButtonDeleteBook, ButtonDeleteAll, ButtonSearch, ButtonText, Container, GenreInput, InputId, SectionId, SectionInputs, Title, TitleInput } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useStoreData } from '../../backend'
import { FontAwesome } from '@expo/vector-icons'

export default function BookDelete() {
    const { dataLivros, adicionarLivro, obterLivros, setData } = useStoreData()
    const [idBook, setIdBook] = useState('')
    const [titulo, setTitulo] = useState('')
    const [genero, setGenero] = useState('')
    const [autor, setAutor] = useState('')
    const [type, setType] = useState(false)

    useEffect(() => {
        console.log(dataLivros)
    }, [dataLivros])

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

    function handleBookDelete(){
        adicionarLivro(idBook, titulo, genero, autor, false, false, true)
        setType(false)
        
        alert('Livro removido com sucesso.')
    }

    const limparAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            console.log('AsyncStorage limpo com sucesso.')
            setData({ dataLivros: [] })
            obterLivros()
            alert('Todos os livros foram removidos!')
        } catch (error) {
            console.error('Erro ao limpar AsyncStorage:', error)
        }
    };

    function handleDeleteAll(){
        limparAsyncStorage()
    }
    return (
        <Container>
            <Title>Editar  livro</Title>
            <SectionId>
                <InputId 
                    placeholder="Digite o código do livro..." 
                    value={idBook} 
                    onChangeText={(text)=> setIdBook(text)}
                />
                <ButtonSearch onPress={() => handleIdBook(idBook)}>
                    <FontAwesome name="search" size={20} color="#dcdcf0" />
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
                    <ButtonDeleteBook onPress={handleBookDelete}>
                        <ButtonText>Deletar livro</ButtonText>
                    </ButtonDeleteBook>
                </SectionInputs>
            )}
            <ButtonDeleteAll onPress={handleDeleteAll}>
                <ButtonText>Deletar tudo</ButtonText>
            </ButtonDeleteAll>
        </Container>
    )
}