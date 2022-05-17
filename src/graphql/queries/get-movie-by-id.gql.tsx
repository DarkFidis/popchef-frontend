import { gql } from '@apollo/client'

export const GET_MOVIE = gql`
    query getMovie($id: Float!) {
        getMovieById(id: $id) {
            description
            imgUrl
            length
            releaseYear
            title
            id
        }
    }
`
