import { css } from '@emotion/react'

export const contentRightStyle = css`
  flex: 1;
  padding: 30px;
  border-left: 1px solid;

  @media (max-width: 768px) {
    border: none;
  }
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

export const scoreStatusStyle = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

export const scoreStatusTitletStyle = css`
  font-size: 18px;
  font-weight: bold;
`

export const scoreStatusValuetStyle = css`
  font-size: 18px;
`

export const likeTextStyle = css`
  font-size: 18px;
  margin-bottom: 20px;
`