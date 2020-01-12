import React, { useState } from 'react'
import { GlobalStyles } from '../common/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import ContainerHeader from '../components/modules/ContainerHeader/ContainerHeader'
import ContainerMaps from '../components/modules/ContainerMaps/ContainerMaps'

import theme from '../common/theme'

const App = () => {
  const [data, setData] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <ContainerHeader setData={setData} />
        {data !== '' && <ContainerMaps data={data} setData={setData} />}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App