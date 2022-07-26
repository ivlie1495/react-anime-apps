import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import { ANIME_DETAIL } from '../../../../graphql/query'
import AnimeDetail from '../'

const mocks = [
  {
    request: {
      query: ANIME_DETAIL,
      // variables: {
      //   id: 1,
      // }
    },
    result: {
      data: {
        Media: {
          id: 1,
          title: {
            romaji: "Cowboy Bebop",
            english: "Cowboy Bebop",
            native: "カウボーイビバップ",
            userPreferred: "Cowboy Bebop"
          },
          description: "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
          episodes: 26,
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
          },
          bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
          source: "ORIGINAL",
          genres: [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          averageScore: 86,
          favourites: 18847,
          duration: 24,
          status: "FINISHED"
        }
      }
    }
  }
]

describe('Test Anime Detali', () => {
  it('render anime detail', async () => {
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <AnimeDetail />
        </MockedProvider>
      </BrowserRouter>
    )

    expect(await screen.findByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByTestId('containerDetail')).toBeInTheDocument()
  })
})