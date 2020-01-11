import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask';
import { width } from 'styled-system'

const Input = styled(InputMask)`
  padding: 5px;
  ${width}
  margin: 8px 0px;
  box-sizing: border-box; 
`

const InputCEP = (props) => {
  return <Input {...props}  mask="99999-999" maskChar="" />
}

export default InputCEP