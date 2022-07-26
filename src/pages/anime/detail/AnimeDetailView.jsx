/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import LoadingOverlay from '../../../components/loadingOverlay'
import ErrorContent from '../../../components/errorContent'
import Snackbar from '../../../components/snackbar'

import ContentLeft from './contentLeft'
import ContentRight from './contentRight'
import ModalContent from './modalContent'
import { AnimeDetailContext } from './AnimeDetailContainer'
import { containerStyle } from './animeDetailStyle'

const AnimeDetail = () => {
  const { loading, data, error, successSave } = useContext(AnimeDetailContext)

  return (
    <div>
      {successSave && (
        <Snackbar message="succes" />
      )}
      {loading && (
        <LoadingOverlay />
      )}
      {data && (
        <div css={containerStyle} data-testid="containerDetail">
          <ModalContent />
          <ContentLeft />
          <ContentRight />
        </div>
      )}
      {error && (
        <ErrorContent message="Something went wrong!" />
      )}
    </div>
  )
}

export default AnimeDetail