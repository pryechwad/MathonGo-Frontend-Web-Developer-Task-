import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  selectedSubject: 'Physics' | 'Chemistry' | 'Mathematics'
  selectedClass: string[]
  selectedUnits: string[]
  selectedStatus: string[]
  showWeakChapters: boolean
  sortBy: 'name' | 'year2025' | 'year2024' | 'completion'
  sortOrder: 'asc' | 'desc'
}

const initialState: FiltersState = {
  selectedSubject: 'Physics',
  selectedClass: [],
  selectedUnits: [],
  selectedStatus: [],
  showWeakChapters: false,
  sortBy: 'name',
  sortOrder: 'asc',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedSubject: (state, action: PayloadAction<'Physics' | 'Chemistry' | 'Mathematics'>) => {
      state.selectedSubject = action.payload
    },
    setSelectedClass: (state, action: PayloadAction<string[]>) => {
      state.selectedClass = action.payload
    },
    setSelectedUnits: (state, action: PayloadAction<string[]>) => {
      state.selectedUnits = action.payload
    },
    setSelectedStatus: (state, action: PayloadAction<string[]>) => {
      state.selectedStatus = action.payload
    },
    toggleWeakChapters: (state) => {
      state.showWeakChapters = !state.showWeakChapters
    },
    setSortBy: (state, action: PayloadAction<FiltersState['sortBy']>) => {
      state.sortBy = action.payload
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload
    },
    resetFilters: (state) => {
      state.selectedClass = []
      state.selectedUnits = []
      state.selectedStatus = []
      state.showWeakChapters = false
    },
  },
})

export const {
  setSelectedSubject,
  setSelectedClass,
  setSelectedUnits,
  setSelectedStatus,
  toggleWeakChapters,
  setSortBy,
  setSortOrder,
  resetFilters,
} = filtersSlice.actions

export default filtersSlice.reducer