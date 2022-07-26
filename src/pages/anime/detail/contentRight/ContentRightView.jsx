/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import { AnimeDetailContext } from '../AnimeDetailContainer'
import { 
  contentRightStyle, 
  descriptionStyle, 
  imageContainerStyle, 
  scoreStatusStyle, 
  scoreStatusTitletStyle, 
  scoreStatusValuetStyle, 
  likeTextStyle 
} from './contentRightStyle'

const ContentLeftView = () => {
  const { data } = useContext(AnimeDetailContext)

  return (
    <div css={contentRightStyle}>
      <div css={scoreStatusStyle}>
        <div>
          <div css={scoreStatusTitletStyle}>Average Score</div>  
          <div css={scoreStatusValuetStyle}>{data?.averageScore}</div>
        </div>
        <div>
          <div css={scoreStatusTitletStyle}>Episodes</div>
          <div css={scoreStatusValuetStyle}>{data?.episodes}</div>
        </div>
        <div>
          <div css={scoreStatusTitletStyle}>Status</div>
          <div css={scoreStatusValuetStyle}>{data?.status}</div>
        </div>
      </div>
      <div css={descriptionStyle}>
        <div css={likeTextStyle}>{data?.favourites} peoples liked this.</div>
        <div css={imageContainerStyle}>
          <img src={data?.coverImage?.large} alt={data?.title?.english || data?.title?.romaji} />
        </div>
      </div>
    </div>
  )
}

export default ContentLeftView