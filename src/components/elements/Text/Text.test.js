import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text.js'

describe('Text component', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<Text text='Texto de teste' />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] como tag H1', async () => {
    const { container } = render(<Text text='Texto de teste 2' tag='h1' />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] como warning', async () => {
    const { container } = render(<Text text='Texto de teste' warning />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('deve conseguir renderizar [snapshot] como tag H1 e fontSize 15px', async () => {
    const { container } = render(<Text text='Texto de teste' tag='h1' fontSize='15px' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
