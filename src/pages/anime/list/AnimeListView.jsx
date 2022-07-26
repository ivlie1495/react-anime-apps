/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import Card from '../../../components/card/CardView'
import LoadingOverlay from '../../../components/loadingOverlay'
import PaginationView from '../../../components/pagination'
import ErrorContent from '../../../components/errorContent'

import { containerStyle, paginationContainerStyle } from './animeListStyle'

const AnimeListView = ({ data, loading, error, handleChangePage }) => {
  return (
    <div>
      {loading && (
        <LoadingOverlay />
      )}
      {data && (
        <div data-testid="containerList">
          <h1>Anime List</h1>
          <div css={containerStyle}>
            {data?.media?.map(({ id, title, source, coverImage }) => (
              <Card 
                key={id} 
                id={id}
                title={title?.english || title?.romaji}
                coverImage={coverImage?.large}
                source={source}
              />
            ))}
          </div>
          <div css={paginationContainerStyle}>
            <PaginationView 
              handleChangePage={handleChangePage}
              hasNextPage={data?.pageInfo?.hasNextPage}
              currentPage={data?.pageInfo?.currentPage}
            />
          </div>
        </div>
      )}
      {error && (
        <ErrorContent message="Something went wrong!" />
      )}
    </div>
  )
}

export default AnimeListView