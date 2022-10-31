import React, { Fragment } from 'react'

import { GlobalStyle } from 'global/GlobalStyle'
import { Header } from 'components'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
        <GlobalStyle />
        <Header />
        {children}
    </Fragment>
  )
}

export default Wrapper