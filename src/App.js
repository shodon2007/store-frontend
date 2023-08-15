import React from 'react'
import AppRouter from './components/AppRouter'
import Header from './components/Header'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <hr />
      <AppRouter />
    </div>
  )
}

export default App