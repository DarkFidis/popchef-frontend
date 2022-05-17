import {useParams} from "react-router-dom";
import React from "react";
import {MoviePres} from "../../containers/MovieContainer/Movie.container";

export const Movie: React.FC = () => {
  const { id } = useParams()
  return (
    <>
      {id && (
        <MoviePres id={id} />
      )}
    </>
  )
}

export default Movie
