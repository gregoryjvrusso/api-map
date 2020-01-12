import React from 'react'
import { render } from '@testing-library/react'
import ContainerMaps from './ContainerMaps.js'

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

describe('Container Maps component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<ContainerMaps data={mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
