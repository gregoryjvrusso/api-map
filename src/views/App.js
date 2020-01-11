import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../common/GlobalStyles'
import ContainerHeader from '../components/modules/ContainerHeader'
import ContainerMaps from '../components/modules/ContainerMaps'

import theme from '../common/theme'

const App = () => {
  const [data, setData] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <React.Fragment>
          <ContainerHeader setData={setData} />
          {data !== '' && <ContainerMaps data={data} setData={setData} />}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App