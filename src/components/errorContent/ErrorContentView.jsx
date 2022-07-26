/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { containerErrorStyle, textMessageStyle } from './errorContentStyle'

const ErrorContentView = ({ message }) => {
  return (
    <div css={containerErrorStyle}>
      <img 
        src="/images/not-found.png"
        alt="ErrorNotFound"
        width={480}
        height={240}
      />
      <div css={textMessageStyle}>{message}</div>
    </div>
  )
}

export default ErrorContentView