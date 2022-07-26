import { createContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { COLLECTION_KEY } from '../../../constants/collections';

import CollectionDetailView from './CollectionDetailView'

export const CollectionDetailContext = createContext();

const CollectionDetailContainer = () => {
  const { name } = useParams()
  const collectionItems = JSON.parse(localStorage.getItem(`anime-${name}`) || '[]')

  const [ animeId, setAnimeId ] = useState(0)
  const [ animeName, setAnimeName ] = useState('')
  const [ snackbarMessage, setSnackbarMessage ] = useState('')
  const [ showModalDelete, setShowModalDelete ] = useState(false)
  
  const handleShowDelete = (event, value) => {
    if (event) {
      event.preventDefault()
    }

    if (value) {
      setShowModalDelete(true)
      setAnimeName(value.title)
      setAnimeId(value.id)
    } else {
      setShowModalDelete(false)
      setAnimeName('')
      setAnimeId(0)
    }
  }

  const handleDelete = () => {
    const collections = JSON.parse(localStorage.getItem(`anime-${name}`) || '[]')
    const newCollections = collections.filter((item) => +item.id !== animeId)
    localStorage.setItem(`anime-${name}`, JSON.stringify(newCollections))

    const collectionItems = JSON.parse(localStorage.getItem(COLLECTION_KEY) || '[]')
    const newCollectionItems = collectionItems.filter((item) => +item.id !== animeId)
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollectionItems))

    setShowModalDelete(false)
    setAnimeName('')
    setAnimeId(0)
    setSnackbarMessage('Success')
    setTimeout(() => setSnackbarMessage(''), 2000)
  }

  return (
    <CollectionDetailContext.Provider
      value={{
        name,
        collectionItems,
        showModalDelete,
        handleShowDelete,
        handleDelete,
        animeName,
        snackbarMessage
      }}
    >
      <CollectionDetailView />
    </CollectionDetailContext.Provider>
  )
}

export default CollectionDetailContainer