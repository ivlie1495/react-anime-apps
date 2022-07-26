import { useState, createContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { ANIME_DETAIL } from '../../../graphql/query'
import { COLLECTION_KEY } from '../../../constants/collections'
import AnimeDetail from './AnimeDetailView'

export const AnimeDetailContext = createContext();

const AnimeDetailContainer = () => {
  const { id } = useParams();

  const [ showModal, setShowModal ] = useState(false)
  const [ successSave, setSuccessSave ] = useState(false)
  const [ newCollection, setNewCollection ] = useState(false)
  const [ collectionName, setCollectionName ] = useState('')
  const localStorageItems = Object.keys(localStorage)
  const collections = JSON.parse(localStorage.getItem(COLLECTION_KEY) || '[]')

  const { loading, data, error } = useQuery(ANIME_DETAIL, {
    variables: { id }
  })

  const handleAddToCollection = () => {
    const collectionNameAnime = `anime-${collectionName}`
    const collectionItems = JSON.parse(localStorage.getItem(collectionNameAnime) || '[]')

    collectionItems.push(data?.Media)
    collections.push({
      id: data?.Media?.id,
      collectionName: collectionNameAnime
    })

    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collections))
    localStorage.setItem(collectionNameAnime, JSON.stringify(collectionItems))

    setShowModal(false)
    setCollectionName('')
    setSuccessSave(true)
    setTimeout(() => setSuccessSave(false), 2000)
  }

  const handleRemoveFromCollection = () => {
    const currentAnime = collections.find((item) => +item.id === +data?.Media?.id)

    const collectionItems = JSON.parse(localStorage.getItem(currentAnime.collectionName) || '[]')
    const currentCollectionNameItems = collectionItems.filter((item) => +item.id !== +data?.Media?.id)

    if (currentCollectionNameItems.length) {
      localStorage.setItem(currentAnime.collectionName, JSON.stringify(currentCollectionNameItems))
    } else {
      localStorage.removeItem(`anime-${currentAnime.collectionName}`)
    }
    
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collections.filter((item) => +item.id !== +data?.Media?.id)))

    setSuccessSave(true)
    setTimeout(() => setSuccessSave(false), 2000)
  }

  return (
    <AnimeDetailContext.Provider value={{
      loading,
      data: data?.Media,
      error,
      collectionName,
      setCollectionName,
      showModal,
      setShowModal,
      handleAddToCollection,
      handleRemoveFromCollection,
      successSave,
      collectionList: localStorageItems.filter((item) => item.startsWith('anime')),
      itemExist: collections.find((item) => +item.id === +data?.Media?.id),
      newCollection,
      setNewCollection
    }}>
      <AnimeDetail
        loading={loading}
        error={error}
        data={data?.Media}
        collectionName={collectionName}
        setCollectionName={setCollectionName}
      />
    </AnimeDetailContext.Provider>
    
  )
}

export default AnimeDetailContainer