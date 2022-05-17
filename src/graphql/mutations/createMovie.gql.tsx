import { gql } from '@apollo/client'

export const CREATE_MOVIE = gql`
    mutation getOtp($movie: MovieInput!) {
        importMovie(input: $movie) {
            id
        }
    }
`
