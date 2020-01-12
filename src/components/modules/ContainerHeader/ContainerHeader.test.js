import React from 'react'
import renderer from 'react-test-renderer'
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
    const render = renderer
      .create(<ContainerHeader data={mock} />)
      .toJSON()
    expect(render).toMatchSnapshot()
  })
})
