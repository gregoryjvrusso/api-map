import React, { useState } from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Form from './Form.js'

const ComponentMock = () => {

  const validatorCep = (cep) => {
    const regex = RegExp(/^\d{5}-\d{3}$/)
    if (regex.test(cep)) {
      let cepCheck = cep.replace('-', '')
      setData(cepCheck)
    } else {
      setData('CEP inválido')
    }
  }

  const [cep, setCep] = useState('')
  const [data, setData] = useState(false)
  return (
    <React.Fragment>
      <p data-testid='return-form'>{data}</p>
      <form onSubmit={e => {
        e.preventDefault()
        validatorCep(cep)
      }}>
        <label htmlFor='cep'>CEP</label>
        <input
          width={['70%', '15em', '15em']}
          name='cep'
          value={cep}
          onChange={(e) => {
            setCep(e.target.value)
          }}
          id='cep'
          type='text'
          data-testid='input-form'
        />
        <button
          type='submit'
          data-testid='button-form'
        >
          Buscar
      </button>
      </form>
    </React.Fragment>
  )
}

describe('Form component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<Form />)
    expect(container.firstChild).toMatchSnapshot()

  })
  it('deve conseguir editar o input', async () => {
    const { getByTestId } = render(<ComponentMock />)
    const input = getByTestId('input-form')
    fireEvent.change(input, { target: { value: '11704-690' } })
    expect(input.value).toBe('11704-690')
  })
  it('deve validar o CEP e retornar', async () => {
    const { getByTestId, getByText } = render(<ComponentMock />)
    const input = getByTestId('input-form')
    fireEvent.change(input, { target: { value: '11704-690' } })
    const button = getByTestId('button-form')
    fireEvent.click(button)    
    await waitForElement(() => getByText('11704690'))
  })
  it('deve retornar erro de validação de CEP por falta de número', async () => {
    const { getByTestId, getByText } = render(<ComponentMock />)
    const input = getByTestId('input-form')
    fireEvent.change(input, { target: { value: '11704' } })
    const button = getByTestId('button-form')
    fireEvent.click(button)    
    await waitForElement(() => getByText('CEP inválido'))
  })
  it('deve retornar erro de validação de CEP por passar letra ao invés de número', async () => {
    const { getByTestId, getByText } = render(<ComponentMock />)
    const input = getByTestId('input-form')
    fireEvent.change(input, { target: { value: '11704-AHD' } })
    const button = getByTestId('button-form')
    fireEvent.click(button)    
    await waitForElement(() => getByText('CEP inválido'))
  })
})
