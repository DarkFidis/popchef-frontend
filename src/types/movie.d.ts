export type Movie = {
  description: string
  id: number
  imgUrl: string
  length: string
  releaseYear: string
  title: string
}

export type MovieProps = {
  movie: Movie
  deleteMovie: (id: number) => void
}
