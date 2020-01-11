import React from 'react'
import renderer from 'react-test-renderer';
import Text from './Text.js'

describe('Text component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const render = renderer
    .create(<Text text='Texto de teste' />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
  it('deve conseguir renderizar [snapshot] como tag H1', async () => {
    const render = renderer
    .create(<Text text='Texto de teste 2' tag='h1' />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
  it('deve conseguir renderizar [snapshot] como warning', async () => {
    const render = renderer
    .create(<Text text='Texto de teste' warning />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
  it('deve conseguir renderizar [snapshot] como tag H1 e fontSize 15px', async () => {
    const render = renderer
    .create(<Text text='Texto de teste' tag='h1' fontSize='15px' />)
    .toJSON();
    expect(render).toMatchSnapshot();
  })
})
