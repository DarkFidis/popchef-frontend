import React from "react";
import {GET_MOVIES} from "../../graphql/queries/get-movies.gql";
import {useMutation, useQuery} from "@apollo/client";
import {MovieCard} from "../../components/MovieCard/MovieCard.component";
import {DELETE_MOVIE} from "../../graphql/mutations/deleteMovie.gql";
import {Link} from "react-router-dom";
import {CreateButton} from "./MovieList.style";

export const MovieListContainer: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_MOVIES)
  const [deleteMovie, {error: deleteError}] = useMutation(DELETE_MOVIE)
  const deleteMovieById = async (id: number) => {
    await deleteMovie({ variables: { id }})
    await refetch()
  }
  return (
    <>
      { error ? (
        <p>Cannot fetch movies</p>
      ): ''}
      { !loading && !error && data && data.getMovies && (
        <>
          <h1>Films</h1>
          {data.getMovies.map((movie: any, key: number) => (
            <MovieCard movie={movie} key={key} deleteMovie={deleteMovieById} />
          ))}
        </>
      )}
      { deleteError && (
        <div>Cannot delete movie : ${deleteError.message}</div>
      )}
      <Link to={'/new'}>
        <CreateButton>Créer un film</CreateButton>
      </Link>
    </>
  )
}
