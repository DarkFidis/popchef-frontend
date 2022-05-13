import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../Home";

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  </Router>
)
