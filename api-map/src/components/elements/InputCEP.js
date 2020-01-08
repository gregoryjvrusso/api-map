import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask';
import { theme, ifProp } from 'styled-tools'

const warning = css`
    color: ${p => p.theme.colors.texts.warning};
`

const Input = styled(InputMask)`
    padding: 5px;
    margin: 8px 0px;
    box-sizing: border-box; 
    color: ${theme('color')};
    ${ifProp('warning', warning)}
`

const InputCEP = (props) => {
  return <Input {...props}  mask="99999-999" maskChar="" />
}
export default InputCEP