import styled from 'styled-components'
import InputMask from 'react-input-mask';
import { width } from 'styled-system'

const Input = styled(InputMask)`
  padding: 5px;
  ${width}
  margin: 8px 0px;
  box-sizing: border-box; 
`
export default Input