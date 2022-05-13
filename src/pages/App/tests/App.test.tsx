import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import React from 'react'
import {App} from "../";


describe('App', () => {
  const initTest = () => render(<App />)
  it('should render NavBar', () => {
    initTest()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
