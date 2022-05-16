import React from "react";

import { MovieProps} from "../../types/movie";
import {CardBody, CardDescription, CardImg, CardInfos, CardTitle} from "./MovieCard.style";

export const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const { description, imgUrl, title } = movie
  return (
    <CardBody>
      <CardImg src={imgUrl} />
      <CardInfos>
        <CardTitle>{ title }</CardTitle>
        <CardDescription>{ description }</CardDescription>
      </CardInfos>
    </CardBody>
  )
}
