import React from "react";

import { MovieProps} from "../../types/movie";
import {CardBody, CardDescription, CardImg, CardInfos, CardTitle, NeutralLink} from "./MovieCard.style";

export const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const { description, id, imgUrl, title } = movie
  return (
    <NeutralLink to={`/${id}`}>
      <CardBody>
        <CardImg src={imgUrl} />
        <CardInfos>
          <CardTitle>{ title }</CardTitle>
          <CardDescription>{ description }</CardDescription>
        </CardInfos>
      </CardBody>
    </NeutralLink>
  )
}
