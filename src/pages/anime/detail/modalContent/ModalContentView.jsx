/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useContext } from 'react'

import Modal from '../../../../components/modal'
import { AnimeDetailContext } from '../AnimeDetailContainer'
import { buttonSaveStyle, inputCollectionTextStyle, selectCollectionStyle } from './modalContentStyle'

const ModalContentView = () => {
  const { 
    showModal, 
    setShowModal, 
    collectionName, 
    setCollectionName, 
    handleAddToCollection,
    collectionList,
    newCollection,
    setNewCollection
  } = useContext(AnimeDetailContext)

  return (
    <div>
      {showModal && (
        <Modal title="Add to Collection" handleClose={() => setShowModal(false)}>
          <label htmlFor="collection">Collection</label>
          {collectionList.length && (
            <select 
              name="collection-select" 
              css={selectCollectionStyle}
              onChange={({ target: { value }}) => {
                if (value === 'new') {
                  setCollectionName('')
                  setNewCollection(true)
                } else {
                  setCollectionName(value)
                  setNewCollection(false)
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>Select Collection</option>
              {collectionList.map((item) => (
                <option 
                  key={item} 
                  value={item.replace('anime-','')}
                >
                  {item.replace('anime-','')}
                </option>
              ))}
              <option value="new">New Collection</option>
            </select>
          )}
          {(newCollection || !collectionList.length) && (
            <input 
              type="text" 
              id="collection" 
              name="collection" 
              placeholder="Collection Name" 
              css={inputCollectionTextStyle}
              value={collectionName}
              onChange={({ target: { value }}) => setCollectionName(value.replace(/[^A-Z0-9]/ig, ''))}
            />
          )}
          <button 
            css={buttonSaveStyle} 
            onClick={handleAddToCollection}
            disabled={!collectionName}
          >
            Save
          </button>
        </Modal>
      )}
    </div>
  )
}

export default ModalContentView