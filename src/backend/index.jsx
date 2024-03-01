import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export const useStoreData = create((set) => ({
  dataLivros: [],
  setData: set,
  adicionarLivro: async (id, novoTitulo, novoGenero, novoAutor, isEdit = false, isLend = false, isDelete = false) => {
    set((state) => {
      const disponivel = true;
      let newDataLivros

      if (isDelete) {
        const idNumber = parseInt(id, 10);
        newDataLivros = state.dataLivros.filter((livro) => livro.id !== idNumber)
      } else if (isLend) {
        const idNumber = parseInt(id, 10)
        newDataLivros = state.dataLivros.map((livro) => {
          if (livro.id === idNumber) {
            return { ...livro, disponivel: false }
          }
          return livro
        })
      } else if (isEdit) {
        const idNumber = parseInt(id, 10)
        newDataLivros = state.dataLivros.map((livro) => {
          if (livro.id === idNumber) {
            return { ...livro, titulo: novoTitulo, genero: novoGenero, autor: novoAutor }
          }
          return livro
        })
      } else {
        const id = state.dataLivros.length > 0 ? state.dataLivros[state.dataLivros.length - 1].id + 1 : 1
        newDataLivros = [...state.dataLivros, { id, titulo: novoTitulo, genero: novoGenero, autor: novoAutor, disponivel }];
      }

      AsyncStorage.setItem('dataLivros', JSON.stringify(newDataLivros)).catch((error) =>
        console.error('Erro ao salvar dataLivros no AsyncStorage:', error)
      )

      return { ...state, dataLivros: newDataLivros }
    })
  },
  obterLivros: async () => {
    try {
      const livros = await AsyncStorage.getItem('dataLivros');
      if (livros !== null) {
        set({ dataLivros: JSON.parse(livros) });
      }
    } catch (error) {
      console.error('Erro ao obter livros:', error);
    }
  },
}))






