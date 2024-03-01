import React, { useEffect } from 'react'
import { Container, FlatBookList } from './styles'
import BookList from '../../components/BookList'
import { useStoreData } from '../../backend'

export default function ListBook() {
    const { dataLivros, obterLivros } = useStoreData()
    useEffect(() => {
        obterLivros()
        console.log('ListBook', dataLivros)
      }, [])
    
      return (
        <Container>
          <FlatBookList
            data={dataLivros} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <BookList
                data={item}
              />
            )}
          />
        </Container>
      )
    }