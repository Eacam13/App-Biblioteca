import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-Color: #dbdbeb;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const SectionBook = styled.View`
    flex-direction: row;
    flex: 4;
    
`
export const ImgBook = styled.Image`
    width: 90px;
    height: 90px;
`
export const SectionInfoBook = styled.View`
    margin-left: 18px;
    width: 60%;
    align-items: flex-start;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
`
export const Author = styled.Text`
    font-size: 12px;
`
export const Genre = styled.Text`
    font-size: 12px;
`
export const SectionCod = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    margin-right: 8px;
`
export const CodBook = styled.Text`
    font-size: 12px;
`
export const AvailableText = styled.Text`
    font-size: 12px;
`