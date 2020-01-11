import React from 'react'
import renderer from 'react-test-renderer'
import InputCEP from './InputCEP.js'

describe('InputCEP component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<InputCEP />)
    .toJSON()
    expect(render).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] com width de 80 px', async () => {
    const render = renderer
    .create(<InputCEP width='80px'/>)
    .toJSON()
    expect(render).toMatchSnapshot()
  })
})
