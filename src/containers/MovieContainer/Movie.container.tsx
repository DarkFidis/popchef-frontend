import React from "react";
import {GET_MOVIES} from "../../graphql/queries/get-users.gql";
import {useQuery} from "@apollo/client";
import {MovieCard} from "../../components/MovieCard/MovieCard.component";

export const MovieContainer: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)
  return (
    <>
      { error ? (
        <p>Cannot fetch movies</p>
      ): ''}
      { !loading && !error && data && data.getMovies && (
        <>
          <h1>Films</h1>
          {data.getMovies.map((movie: any, key: number) => (
            <MovieCard movie={movie} key={key} />
          ))}
        </>
      )}
    </>
  )
}
