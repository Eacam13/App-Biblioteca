import React,{ useState, useEffect } from 'react'
import { Container, InputText, ButtonSubmit, ButtonText, ImgLogo, Title } from './styles'
import { useStoreData } from '../../backend'



export default function BookAdmin() {
    const { adicionarLivro, dataLivros } = useStoreData()
    const [titulo, setTitulo] = useState('')
    const [genero, setGenero] = useState('')
    const [autor, setAutor] = useState('')

    useEffect(() => {
        console.log('DataLivros atualizado:', dataLivros);
    }, [dataLivros])

    const handleCadastrarLivro = () => {
        const id = dataLivros.length + 1
        adicionarLivro(id, titulo, genero, autor)
        setTitulo('')
        setAutor('')
        setGenero('')
    }

    return (
        <Container>
            <ImgLogo source={require('../../assets/images/logo.png')} />
            <Title>Cadastrar livro</Title>
            <InputText 
                value={titulo}
                onChangeText={(text) => setTitulo(text)}
                placeholder='Título do livro' 
            />
            <InputText 
                value={genero}
                onChangeText={(text) => setGenero(text)}
                placeholder='Gênero' />
            <InputText 
                value={autor}
                onChangeText={(text) => setAutor(text)}
                placeholder='Autor(a)' />
            <ButtonSubmit onPress={handleCadastrarLivro}>
                <ButtonText>Cadastrar livro</ButtonText>
            </ButtonSubmit>
        </Container>
    )
}