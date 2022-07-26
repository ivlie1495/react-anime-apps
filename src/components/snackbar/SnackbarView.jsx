/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { snackbarStyle } from './snackbarStyle'

const SnackbarView = ({ message }) => {
  return (
    <div css={snackbarStyle}>{message}</div>
  )
}

export default SnackbarView