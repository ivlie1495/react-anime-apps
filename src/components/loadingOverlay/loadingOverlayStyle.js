import { css, keyframes  } from '@emotion/react'

export const overlayStyle = css`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(255,255,255,0.5);
`

export const overlayInnerStyle = css`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const overlayContentStyle = css`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const spinnerStyle = css`
  width: 75px;
  height: 75px;
  display: inline-block;
  border-width: 2px;
  border-color: rgb(0 0 0 / 5%);
  border-top-color: #fff;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
  animation: ${spin} 1s ease infinite;
`