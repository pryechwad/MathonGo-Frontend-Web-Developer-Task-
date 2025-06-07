import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Chapter {
  id: number
  name: string
  icon: string
  subject: 'Physics' | 'Chemistry' | 'Mathematics'
  class: string
  unit: string
  status: 'Not Started' | 'In Progress' | 'Completed'
  isWeak: boolean
  stats: {
    year2025: { count: number; trend?: 'up' | 'down' }
    year2024: { count: number }
    completion: string
  }
}

interface ChaptersState {
  chapters: Chapter[]
  loading: boolean
  error: string | null
}

const initialState: ChaptersState = {
  chapters: [],
  loading: false,
  error: null,
}

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {
    setChapters: (state, action: PayloadAction<Chapter[]>) => {
      state.chapters = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    updateChapterStatus: (state, action: PayloadAction<{ id: number; status: Chapter['status'] }>) => {
      const chapter = state.chapters.find(c => c.id === action.payload.id)
      if (chapter) {
        chapter.status = action.payload.status
      }
    },
  },
})

export const { setChapters, setLoading, setError, updateChapterStatus } = chaptersSlice.actions
export default chaptersSlice.reducer