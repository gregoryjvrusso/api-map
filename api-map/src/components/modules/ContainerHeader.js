import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '../elements/Button'
import InputCEP from '../elements/InputCEP'
import Label from '../elements/Label'

const ContainerHeaderElements = styled.div`
  background-color: ${p => p.theme.colors.backgrounds.primary.gray};
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`
const TitleHeader = styled.p`
  font-weight: bold;
`
const MessageError = styled.p`
  color: red;
  margin: 0;
`
const ContainerHeader = ({ setData }) => {
  const [cep, setCep] = useState('')
  const [message, setMessage] = useState(false)
  const fetchData = async (url) => {
    try {
      const result = await axios(url)
      if (result.data.erro) {
        setData('')
        setMessage(true)
      } else {
        setData(result.data)
        setMessage(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const validatorCep = (cep) => {
    const regex = RegExp(/^\d{5}-\d{3}$/)
    if (regex.test(cep)) {
      let cepCheck = cep.replace('-', '')
      fetchData(`https://viacep.com.br/ws/${cepCheck}/json/`)
    } else {
      setMessage(true)
    }
  }
  return (
    <ContainerHeaderElements>
      <TitleHeader>Consultar</TitleHeader>
      {message && <MessageError>Cep inválido</MessageError>}
      <form onSubmit={e => {
        e.preventDefault()
        validatorCep(cep)
      }}>
        <Label htmlFor='cep'>
          CEP
        </Label>
        <InputCEP
          width={['70%', '15em', '15em']}
          name='cep'
          value={cep}
          onChange={(e) => {
            setMessage(false)
            setCep(e.target.value)
          }}
          id='cep'
          type='text'
          placeholder='02250-250'
        />
        <Button width={['95%', '8em', '8em']} type='submit' primary>
          Buscar
        </Button>
      </form>
    </ContainerHeaderElements>
  )
}

export default ContainerHeader