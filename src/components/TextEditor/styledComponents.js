import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  padding: 30px;
  min-height: 100vh;
  background-color: #25262c;
`
export const ResponsiveDiv = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  background-color: #1b1c22;
`
export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const TextContainer = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  width: 100%;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Img = styled.img`
  width: 500px;
  height: 500px;
  padding-bottom: 60px;
`
export const Nav = styled.nav`
  border-bottom: 2px solid #ffffff;
`
export const ButtonElement = styled.button`
  background-color: transparent;
  color: ${props => (props.boldTest ? ' #faff00' : '#f1f5f9')};
  border: none;
`
export const TextArea = styled.textarea`
  border: 1px solid green;
  background-color: #25262c;
  color: #ffffff;
  padding: 30px;
  border: none;
  outline: none;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 0px;

  display: flex;
`
export const ListItem = styled.li`
  margin: 5px;
`
export const ButtonItalic = styled.button`
  background-color: transparent;
  color: ${props => (props.italicColor ? ' #faff00' : '#f1f5f9')};
  border: none;
`
export const ButtonUnderline = styled.button`
  background-color: transparent;
  color: ${props => (props.colorUnderline ? ' #faff00' : '#f1f5f9')};
  border: none;
`
