/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { iconCloseStyle, modalContentStyle, modalHeaderStyle, modalStyle, titleStyle } from './modalStyle'

const ModalView = ({ title, handleClose, children }) => {
  return (
    <div css={modalStyle}>
      <div css={modalHeaderStyle}>
        <h4 css={titleStyle}>{title}</h4>
        <span css={iconCloseStyle} onClick={handleClose}>&times;</span>
      </div>
      <div css={modalContentStyle}>
        {children}
      </div>
    </div>
  )
}

export default ModalView