import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '../elements/Button'
import InputCEP from '../elements/InputCEP'
import Label from '../elements/Label'

const ContainerHeaderElements = styled.div`
    background-color: ${p => p.theme.colors.backgrounds.primary.gray};
`
const ContainerHeader = ({ setData }) => {
  const [cep, setCep] = useState('')
  const [state, setState] = useState(false)
  const fetchData = async (url) => {
    console.log(url)
    try {
      const result = await axios(url)
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerHeaderElements>
      <form onSubmit={e => {
        e.preventDefault()
        let cepCheck = cep.replace('-', '')
        fetchData(`https://viacep.com.br/ws/${cepCheck}/json/`)
      }}>
        <Label htmlFor='cep'>
          CEP
        </Label>
        <InputCEP
          name='cep'
          value={cep}
          onChange={(e) => {
            setCep(e.target.value)
          }}
          id='cep'
          type='text'
          placeholder='02250-250'
        />
        <Button type='submit' primary>
          Buscar
        </Button>
      </form>
    </ContainerHeaderElements>
  )
}

export default ContainerHeader