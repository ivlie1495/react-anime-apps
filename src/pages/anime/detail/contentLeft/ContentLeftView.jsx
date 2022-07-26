/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'
import parse from 'html-react-parser'

import { AnimeDetailContext } from '../AnimeDetailContainer'
import { 
  contentLeftStyle, 
  descriptionStyle, 
  imageContainerStyle, 
  titleStyle, 
  marginBottomStyle, 
  buttonStyle, 
  imageStyle, 
  collectionContainerStyle,
  collectionTextStyle
} from './contentLeftStyle'
import Pill from '../../../../components/pill'
import CollectionCard from '../../../../components/collectionCard'

const ContentLeftView = () => {
  const { 
    data, 
    showModal, 
    setShowModal, 
    itemExist,
    handleRemoveFromCollection
  } = useContext(AnimeDetailContext)

  return (
    <div css={contentLeftStyle}>
      <div css={imageContainerStyle}>
        <img 
          src={data?.bannerImage ?? data?.coverImage.large} 
          alt={data?.title?.english || data?.title?.romaji}
          css={imageStyle}
        />
      </div>
      <div css={descriptionStyle}>
        <h2 css={titleStyle}>{data?.title?.english || data?.title?.romaji}</h2>
        <div css={marginBottomStyle}>{data?.duration} mins</div>
        <div css={marginBottomStyle}>
          {data?.genres.map((genre) => (
            <Pill key={genre} value={genre} />
          ))}
        </div>
        <div>
          {itemExist ? (
            <div>
              <h1 css={collectionTextStyle}>Collection</h1>
              <div css={collectionContainerStyle}>
                <CollectionCard 
                  title={itemExist.collectionName.replace('anime-', '')} 
                  to={`/collection/${itemExist.collectionName.replace('anime-', '')}`} 
                />
                <button css={buttonStyle('remove')} onClick={handleRemoveFromCollection}>
                  Remove from Collection
                </button>
              </div>
            </div>
          ) : (
            <button css={buttonStyle('add')} onClick={() => setShowModal(!showModal)}>
              Add to Collection
            </button>
          )}
        </div>
        <p>{parse(data?.description)}</p>
      </div>
    </div>
  )
}

export default ContentLeftView