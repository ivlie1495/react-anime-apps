import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import { ANIME_LIST } from '../../../../graphql/query'
import AnimeList from '../'

const mocks = [
  {
    request: {
      query: ANIME_LIST,
      variables: {
        page: 1,
        perPage: 12
      }
    },
    result: {
      data: {
        Page: {
          pageInfo: {
            total: 5000,
            perPage: 10,
            lastPage: 500,
            currentPage: 1,
            hasNextPage: true
          },
          media: [
            {
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
              source: "ORIGINAL"
            },
          ]
        }
      }
    }
  }
]

describe('Test Anime List', () => {
  it('render anime list', async () => {
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <AnimeList />
        </MockedProvider>
      </BrowserRouter>
    )

    expect(await screen.findByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByTestId('containerList')).toBeInTheDocument()
  })
})