import React from 'react'

import ToDO from './components/ToDo'
import LoginProvider from './context/login'
export default function App() {
  return (
    <LoginProvider>
      <ToDO />
    </LoginProvider>


  )
}
