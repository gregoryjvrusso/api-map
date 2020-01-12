import React from 'react'
import { render } from '@testing-library/react'
import ContainerAdress from './ContainerAdress.js'

const mock = {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "unidade": "",
    "ibge": "3550308",
    "gia": "1004"
  }
describe('Container Adress component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<ContainerAdress data={mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
