import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})

/* 
    appStore is a store that is created using the configureStore function
    it takes a reducer object as an argument
    the reducer object is a object that contains the reducers of the app
    the reducers are the slices of the store
    the slices are the parts of the store that are responsible for managing the state of the app

    u can think is as a big object that contains all the states of the app/all reducers
    it is big Reducer that has many slices in it
*/