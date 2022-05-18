import React from "react";

import { MovieProps} from "../../types/movie";
import {
  CardBody,
  CardButtons,
  CardDescription,
  CardImg,
  CardInfos,
  CardTitle,
  DeleteButton,
  DisplayButton,
} from "./MovieCard.style";
import {Link} from "react-router-dom";

export const MovieCard: React.FC<MovieProps> = ({ movie, deleteMovie }) => {
  const { description, id, imgUrl, title } = movie
  return (
      <>
        <CardBody>
          <CardImg src={imgUrl} />
          <CardInfos>
            <CardTitle>{ title }</CardTitle>
            <CardDescription>{ description }</CardDescription>
          </CardInfos>
          <CardButtons>
            <Link to={`/${id}`}>
              <DisplayButton>Afficher</DisplayButton>
            </Link>
            <DeleteButton onClick={() => deleteMovie(id)}>Supprimer</DeleteButton>
          </CardButtons>
        </CardBody>

      </>
  )
}
