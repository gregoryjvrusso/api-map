import React from 'react'
import { render } from '@testing-library/react'
import ContainerHeader from './ContainerHeader.js'

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

describe('Container Header component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<ContainerHeader data={mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
