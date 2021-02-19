import styled, {keyframes} from 'styled-components'
import theme from './theme'

const StyledApp = styled.div`
  .charContainer{ //allows room for header animation
    margin-top: 8%;
    border-radius: 5px;
  }
  color: ${props => props.theme.primaryColor};
  text-shadow: 1px 1px 5px #fff;
  font-weight: bold;

  .container{ //fit nicely around attributes text
    width:30%;
  }

  #cName{
    color:${props => props.theme.secondaryColor};
    text-shadow: 1px 1px 5px ${props => props.theme.black};
  }
  span{
    color: white;
    text-shadow: 1px 1px 5px ${props => props.theme.primaryColor};
  }

  h1 { //animation - slides the header onto page from the left to the center
        text-align:center;
        position: absolute;
        left: -100%;
        width: 100%;
        animation: slide 2s forwards;
      }
  @keyframes slide{
      100% {left: 0; }
  }
  #hoverAttr p{ //animation when hovering individual attributes, scale
    &:hover{
      transform: scale(1.5);
      transition: .2s ease-in-out;
    }transition: .5s ease-in-out;
  }

  button { //button hover animation, color change
      &:hover{
        transition: .5s ease-in-out;
        background-color: ${props => props.theme.secondaryColor};
        border-color: ${props => props.theme.white}
      }transition: .2s ease-in-out;
      margin-top:2%;
      margin-bottom:4%;
      margin-left: 2%;
      border-radius: 5px;
    }
`;

export default StyledApp;