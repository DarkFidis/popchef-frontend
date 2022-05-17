import { gql } from '@apollo/client'

export const DELETE_MOVIE = gql`
    mutation getOtp($id: Float!) {
        deleteMovie(movieId: $id) {
            id
        }
    }
`
