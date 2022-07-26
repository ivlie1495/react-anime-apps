/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { pillStyle } from './pillStyle'

const PillView = ({ value }) => {
  return (
    <span css={pillStyle}>{value}</span>
  )
}

export default PillView