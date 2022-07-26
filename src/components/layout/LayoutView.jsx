/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import AppHeader from '../appHeader/AppHeader'
import { containerStyle } from './layoutStyle'

const Layout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <main css={containerStyle}>
        {children}
      </main>
    </div>
  )
}

export default Layout
