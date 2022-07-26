/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { overlayContentStyle, overlayInnerStyle, overlayStyle, spinnerStyle } from './loadingOverlayStyle'

const LoadingOverlay = () => {
  return (
    <div css={overlayStyle} data-testid="loading">
      <div css={overlayInnerStyle}>
        <div css={overlayContentStyle}>
          <span css={spinnerStyle}></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay