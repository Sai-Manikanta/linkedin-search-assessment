import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import peopleReducer from './people'
import companiesReducer from './companies'
import postsReducer from './posts'

export const store = configureStore({
    reducer: {
        user: userReducer,
        people: peopleReducer,
        companies: companiesReducer,
        posts: postsReducer
    }
});