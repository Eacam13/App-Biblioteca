import styled from 'styled-components/native'

export const Container = styled.View`

`
export const ButtonOption = styled.TouchableOpacity`
    background-Color: ${props => props.color};
    width: 50%;
    height: 40px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
export const TextButton = styled.Text`
    font-size: 14px;
    color: #0f0f0f;
    font-weight: bold;
`

