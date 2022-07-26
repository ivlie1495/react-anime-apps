/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import { linkStyle } from './appHeaderLinkStyle'

const HeaderLink = ({ to, children, ...props }) => {
  return (
    <Link to={to} css={linkStyle} {...props}>
      {children}
    </Link>
  )
}

export default HeaderLink