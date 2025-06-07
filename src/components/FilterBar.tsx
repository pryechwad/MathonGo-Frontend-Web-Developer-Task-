'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { 
  setSelectedClass, 
  setSelectedUnits, 
  setSelectedStatus, 
  toggleWeakChapters,
  resetFilters 
} from '@/store/slices/filtersSlice'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ChevronDown, X } from 'lucide-react'
import { getUniqueClasses, getUniqueUnits, getUniqueStatuses } from '@/data/mockData'

export const FilterBar: React.FC = () => {
  const dispatch = useDispatch()
  const { 
    selectedClass, 
    selectedUnits, 
    selectedStatus, 
    showWeakChapters,
    selectedSubject 
  } = useSelector((state: RootState) => state.filters)
  const { chapters } = useSelector((state: RootState) => state.chapters)

  const subjectChapters = chapters.filter(chapter => chapter.subject === selectedSubject)
  const uniqueClasses = getUniqueClasses(subjectChapters)
  const uniqueUnits = getUniqueUnits(subjectChapters, selectedClass)
  const uniqueStatuses = getUniqueStatuses(subjectChapters)

  const handleClassChange = (value: string) => {
    const newClasses = selectedClass.includes(value)
      ? selectedClass.filter(c => c !== value)
      : [...selectedClass, value]
    dispatch(setSelectedClass(newClasses))
  }

  const handleUnitChange = (value: string) => {
    const newUnits = selectedUnits.includes(value)
      ? selectedUnits.filter(u => u !== value)
      : [...selectedUnits, value]
    dispatch(setSelectedUnits(newUnits))
  }

  const handleStatusChange = (value: string) => {
    const newStatuses = selectedStatus.includes(value)
      ? selectedStatus.filter(s => s !== value)
      : [...selectedStatus, value]
    dispatch(setSelectedStatus(newStatuses))
  }

  const hasActiveFilters = selectedClass.length > 0 || selectedUnits.length > 0 || selectedStatus.length > 0 || showWeakChapters

  return (
    <div className="flex w-full items-center gap-2 px-4 py-3 bg-white dark:bg-gray-900 z-[2] border-b border-gray-200 dark:border-gray-700">
      {/* Class Filter */}
      <Select>
        <SelectTrigger className="w-auto min-w-[100px] h-9 bg-white dark:bg-gray-800 border border-[#d1d8e0] dark:border-gray-600 rounded-xl">
          <SelectValue placeholder="Class" />
          <ChevronDown className="w-4 h-4 ml-1" />
        </SelectTrigger>
        <SelectContent>
          {uniqueClasses.map((classItem) => (
            <SelectItem 
              key={classItem} 
              value={classItem}
              onClick={() => handleClassChange(classItem)}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedClass.includes(classItem)}
                  onChange={() => handleClassChange(classItem)}
                  className="rounded"
                />
                {classItem}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Units Filter */}
      <Select>
        <SelectTrigger className="w-auto min-w-[100px] h-9 bg-white dark:bg-gray-800 border border-[#d1d8e0] dark:border-gray-600 rounded-xl">
          <SelectValue placeholder="Units" />
          <ChevronDown className="w-4 h-4 ml-1" />
        </SelectTrigger>
        <SelectContent>
          {uniqueUnits.map((unit) => (
            <SelectItem 
              key={unit} 
              value={unit}
              onClick={() => handleUnitChange(unit)}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedUnits.includes(unit)}
                  onChange={() => handleUnitChange(unit)}
                  className="rounded"
                />
                {unit}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6 bg-[#d1d8e0] dark:bg-gray-600 rounded-xl" />

      {/* Status Filter */}
      <Select>
        <SelectTrigger className="w-auto min-w-[120px] h-9 bg-white dark:bg-gray-800 border border-[#d1d8e0] dark:border-gray-600 rounded-xl">
          <SelectValue placeholder="Status" />
          <ChevronDown className="w-4 h-4 ml-1" />
        </SelectTrigger>
        <SelectContent>
          {uniqueStatuses.map((status) => (
            <SelectItem 
              key={status} 
              value={status}
              onClick={() => handleStatusChange(status)}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedStatus.includes(status)}
                  onChange={() => handleStatusChange(status)}
                  className="rounded"
                />
                {status}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Weak Chapters Toggle */}
      <Button
        variant={showWeakChapters ? "default" : "outline"}
        onClick={() => dispatch(toggleWeakChapters())}
        className="h-9 px-3 bg-white dark:bg-gray-800 border border-[#d1d8e0] dark:border-gray-600 rounded-xl font-label-sm-14"
      >
        Weak Chapters
      </Button>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          onClick={() => dispatch(resetFilters())}
          className="h-9 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}