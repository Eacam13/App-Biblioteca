import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #b2b2b4;
    align-items: center;
`
export const ImgLogo = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 150px;
    margin-top: 40px;
`
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
`
export const InputText = styled.TextInput`
    width: 70%;
    height: 45px;
    background-color:#fff;
    border-radius:8px;
    margin-bottom:16px;
    padding: 12px;
    font-size: 16px
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    background-color:#3c9234;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`
export const ButtonText = styled.Text`
    font-size: 14px;
    color:#050505;
    font-weight: bold;
`
