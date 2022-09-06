import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ResponsiveDiv,
  ImgDiv,
  TextContainer,
  Heading,
  Img,
  Nav,
  ButtonElement,
  TextArea,
  UnOrderList,
  ListItem,
  ButtonItalic,
  ButtonUnderline,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textValue: '',
    isBold: false,
    isItalic: false,
    isUnderLine: false,
  }

  onClickBold = () => {
    const {isBold} = this.state
    const a = document.getElementById('text')
    if (isBold) {
      a.style.fontWeight = 'normal'
    } else {
      a.style.fontWeight = 'bold'
    }
    this.setState({
      isBold: !isBold,
    })
  }

  onClickItalic = () => {
    const {isItalic} = this.state
    const a = document.getElementById('text')

    if (isItalic) {
      a.style.fontStyle = 'normal'
    } else {
      a.style.fontStyle = 'italic'
    }
    this.setState({
      isItalic: !isItalic,
    })
  }

  onClickUnderLine = () => {
    const {isUnderLine} = this.state
    const a = document.getElementById('text')

    if (isUnderLine) {
      a.style.textDecoration = 'none'
    } else {
      a.style.textDecoration = 'underline'
    }
    this.setState({
      isUnderLine: !isUnderLine,
    })
  }

  onChangeTextArea = event => {
    this.setState({textValue: event.target.value})
  }

  render() {
    const {textValue, isBold, isItalic, isUnderLine} = this.state

    return (
      <AppContainer>
        <ResponsiveDiv>
          <ImgDiv>
            <Heading>Text Editor</Heading>

            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgDiv>
          <TextContainer>
            <Nav>
              <UnOrderList>
                <ListItem>
                  <ButtonElement
                    data-testid="bold"
                    boldTest={isBold}
                    onClick={this.onClickBold}
                  >
                    <VscBold size={25} />
                  </ButtonElement>
                </ListItem>
                <ListItem>
                  <ButtonItalic
                    data-testid="italic"
                    onClick={this.onClickItalic}
                    italicColor={isItalic}
                  >
                    <GoItalic size={25} />
                  </ButtonItalic>
                </ListItem>
                <ListItem>
                  <ButtonUnderline
                    data-testid="underline"
                    onClick={this.onClickUnderLine}
                    colorUnderline={isUnderLine}
                  >
                    <AiOutlineUnderline size={25} />
                  </ButtonUnderline>
                </ListItem>
              </UnOrderList>
            </Nav>
            <TextArea
              cols="50"
              rows="50"
              onChange={this.onChangeTextArea}
              value={textValue}
              id="text"
            />
          </TextContainer>
        </ResponsiveDiv>
      </AppContainer>
    )
  }
}
export default TextEditor
