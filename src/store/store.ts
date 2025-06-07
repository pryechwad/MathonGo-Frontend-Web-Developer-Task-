import { configureStore } from '@reduxjs/toolkit'
import chaptersReducer from './slices/chaptersSlice'
import filtersReducer from './slices/filtersSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch