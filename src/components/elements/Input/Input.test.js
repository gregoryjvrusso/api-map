import React from 'react'
import renderer from 'react-test-renderer'
import Input from './Input.js'

describe('Input component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<Input mask='99999-999' maskChar='' />)
    .toJSON()
    expect(render).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] com width de 80 px', async () => {
    const render = renderer
    .create(<Input width='80px'/>)
    .toJSON()
    expect(render).toMatchSnapshot()
  })
})
