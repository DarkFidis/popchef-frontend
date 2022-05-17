import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../Home";
import {client} from "../../graphql/client";
import {ApolloProvider} from "@apollo/client";

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </Router>
  </ApolloProvider>
)
