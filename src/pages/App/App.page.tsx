import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../Home";
import {client} from "../../graphql/client";
import {ApolloProvider} from "@apollo/client";
import {Movie} from "../Movie/Movie.page";
import {CreateMovie} from "../CreateMovie/CreateMovie.page";
import {Layout} from "../../components/Layout/Layout.component";

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'new'} element={<CreateMovie />} />
          <Route path={':id'} element={<Movie />} />
        </Routes>
      </Router>
    </Layout>
  </ApolloProvider>
)
