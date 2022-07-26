import { css } from '@emotion/react'

export const containerStyle = css`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const marginBottomStyle = css`
  margin-bottom: 20px;
`

export const imageContainerStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`

export const descriptionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`