/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Card from '../../../components/card'
import ModalCollectionDelete from './modalCollectionDelete/ModalCollectionDeleteView'
import Snackbar from '../../../components/snackbar'

import { CollectionDetailContext } from './CollectionDetailContainer'
import { containerStyle } from './collectionDetailStyle'

const CollectionDetailView = () => {
  const { name, collectionItems, showModalDelete, handleShowDelete, snackbarMessage } = useContext(CollectionDetailContext)

  return (
    <div>
      {snackbarMessage && (
        <Snackbar message={snackbarMessage} />
      )}
      {showModalDelete && (
        <ModalCollectionDelete />
      )}
      <h1>{name}</h1>
      <div css={containerStyle}>
        {collectionItems?.map(({ id, title, source, coverImage }) => (
          <Card 
            key={id} 
            id={id}
            title={title?.english || title?.romaji}
            coverImage={coverImage?.large}
            source={source}
            handleDelete={(event) => handleShowDelete(event, {
              id,
              title: title?.english || title?.romaji,
            })}
          />
        ))}
        {!collectionItems.length && (
          <div>No anime data in this collection</div>
        )}
      </div>
    </div>
  )
}

export default CollectionDetailView