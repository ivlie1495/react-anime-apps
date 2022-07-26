/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import CollectionCard from '../../../components/collectionCard'
import Snackbar from '../../../components/snackbar'

import ModalCollectionDelete from './modalCollectionDelete'
import ModalCollectionAdd from './modalCollectionAdd'
import ModalCollectionEditName from './modalCollectionEditName'

import { CollectionListContext } from './CollectionListContainer'
import { buttonStyle, containerStyle, containerTitleStyle } from './collectionListStyle'

const CollectionListView = () => {
  const {
    items, 
    showModalAdd,
    handleShowModalAdd,
    showModalDelete,
    handleShowModalDelete,
    showModalEdit,
    handleShowModalEdit,
    successMessage,
    snackbarMessage,
  } = useContext(CollectionListContext)
  
  return (
    <div>
      {successMessage && (
        <Snackbar message={snackbarMessage} />
      )}
      {showModalDelete && (
        <ModalCollectionDelete />
      )}
      {showModalAdd && (
        <ModalCollectionAdd />
      )}
      {showModalEdit && (
        <ModalCollectionEditName />
      )}
      <div css={containerTitleStyle}>
        <h1>Collection List</h1>
        <button css={buttonStyle('add')} onClick={() => handleShowModalAdd(true)}>Add</button>
      </div>
      <div css={containerStyle}>
        {items.map((name) => (
          <CollectionCard 
            key={name} 
            title={name} 
            to={`/collection/${name}`} 
            handleDelete={(event) => handleShowModalDelete(event, name)}
            handleEdit={(event) => handleShowModalEdit(event, name)}
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionListView