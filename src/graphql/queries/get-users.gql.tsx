import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
    query getUsers {
        getMovies {
            description
            imgUrl
            length
            releaseYear
            title
        }
    }
`
