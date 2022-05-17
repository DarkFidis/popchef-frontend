import React from "react";
import {useQuery} from "@apollo/client";
import {GET_MOVIE} from "../../graphql/queries/get-movie-by-id.gql";
import {MovieImg, MovieInfo, MovieInfoField, MovieInfoValue, MovieWrapper} from "./MovieContainer.style";

export const MoviePres: React.FC<{id: string}> = ({id}) => {
  const movieId = +id
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: {id: movieId} })
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
        </MovieWrapper>
      )}
    </>
  )
}

export default MoviePres
