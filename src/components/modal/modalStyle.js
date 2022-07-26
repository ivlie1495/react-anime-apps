import { css } from '@emotion/react'

export const modalStyle = css`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

export const modalHeaderStyle = css`
  display: flex;
  align-items: center;
  background-color: #fefefe;
  margin: auto;
  padding: 0 16px;
  width: 40%;
  border-bottom: 1px solid;

  @media (max-width: 768px) {
    width: 80%;
  }
`
export const titleStyle = css`
  flex: 1;
`

export const iconCloseStyle = css`
  font-size: 24px;
  cursor: pointer;
`

export const modalContentStyle = css`
  background-color: #fefefe;
  margin: auto;
  width: 40%;
  padding: 16px;

  @media (max-width: 768px) {
    width: 80%;
  }
`