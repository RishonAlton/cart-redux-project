import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CartContainer from './Components/CartContainer'
import Navbar from './Components/Navbar'
import reducer from './reducer'
import cartItems from './data'


const initialStore = {
  cart: cartItems,
  amount: 0,
  total: 0
}

const store = createStore(reducer, initialStore)


const App = () => {

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
  
}


export default App