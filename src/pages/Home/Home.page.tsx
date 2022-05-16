import React from "react";
import {MovieContainer} from "../../containers/MovieContainer/Movie.container";
import {ApolloProvider} from "@apollo/client";
import {client} from "../../graphql/client";

export const Home: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MovieContainer />
    </ApolloProvider>
  )
}

export default Home
