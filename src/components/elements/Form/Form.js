import React from 'react'
import axios from 'axios'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = ({ setCep, setData, setMessage, cep }) => {
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
      setData('')
    }
  }

  return (
    <form onSubmit={e => {
      e.preventDefault()
      validatorCep(cep)
    }}>
      <Label htmlFor='cep'>CEP</Label>
      <Input
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
        mask='99999-999'
        maskChar=''
        data-testid='input-form'
      />
      <Button 
        width={['95%', '8em', '8em']} 
        type='submit' 
      >
        Buscar
      </Button>
    </form>
  )
}

export default Form