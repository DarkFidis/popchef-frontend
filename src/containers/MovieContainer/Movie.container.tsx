import React from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_MOVIE} from "../../graphql/queries/get-movie-by-id.gql";
import {DeleteButton, MovieImg, MovieInfo, MovieInfoField, MovieInfoValue, MovieWrapper} from "./MovieContainer.style";
import {DELETE_MOVIE} from "../../graphql/mutations/deleteMovie.gql";
import {ErrorText} from "../CreateMovie/CreateMovie.style";

export const MoviePres: React.FC<{id: string}> = ({id}) => {
  const movieId = +id
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: {id: movieId} })
  const [deleteMovie, {error: deleteError}] = useMutation(DELETE_MOVIE)
  const deleteMovieById = (id: string) => {
    deleteMovie({ variables: { id: +id }})
  }
  return (
    <>
      {!loading && !error && data && (
        <MovieWrapper>
          <MovieImg src={data.getMovieById.imgUrl} />
          <MovieInfo>
            <MovieInfoField>Titre</MovieInfoField>
            <MovieInfoValue>{data.getMovieById.title}</MovieInfoValue>
          </MovieInfo>
          <MovieInfo>
            <MovieInfoField>Sortie</MovieInfoField>
            <MovieInfoValue>{data.getMovieById.releaseYear}</MovieInfoValue>
          </MovieInfo>
          <MovieInfo>
            <MovieInfoField>Durée</MovieInfoField>
            <MovieInfoValue>{data.getMovieById.length} minutes</MovieInfoValue>
          </MovieInfo>
          <MovieInfo>
            <MovieInfoField>Description</MovieInfoField>
            <MovieInfoValue>{data.getMovieById.description}</MovieInfoValue>
          </MovieInfo>
          <DeleteButton onClick={() => deleteMovieById(data.getMovieById.id)}>Supprimer</DeleteButton>
          { deleteError && (
            <ErrorText>{ deleteError.message }</ErrorText>
          )}
        </MovieWrapper>
      )}

    </>
  )
}

export default MoviePres
