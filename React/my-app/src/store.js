//import  from '@reduxjs/toolkit'

import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import cartReducer from './reducers/cartSlice'
export const store=configureStore({
reducer:{
    counter:counterReducer,
    cart:cartReducer
},
})