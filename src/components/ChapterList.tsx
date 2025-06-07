'use client'

import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { setSortBy, setSortOrder } from '@/store/slices/filtersSlice'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, TrendingUp, TrendingDown } from 'lucide-react'
import { PhosphorIcon } from './PhosphorIcon'
import { Chapter } from '@/store/slices/chaptersSlice'

export const ChapterList: React.FC = () => {
  const dispatch = useDispatch()
  const { chapters } = useSelector((state: RootState) => state.chapters)
  const { 
    selectedSubject, 
    selectedClass, 
    selectedUnits, 
    selectedStatus, 
    showWeakChapters,
    sortBy,
    sortOrder 
  } = useSelector((state: RootState) => state.filters)

  const filteredAndSortedChapters = useMemo(() => {
    let filtered = chapters.filter(chapter => {
      // Filter by subject
      if (chapter.subject !== selectedSubject) return false
      
      // Filter by class
      if (selectedClass.length > 0 && !selectedClass.includes(chapter.class)) return false
      
      // Filter by units
      if (selectedUnits.length > 0 && !selectedUnits.includes(chapter.unit)) return false
      
      // Filter by status
      if (selectedStatus.length > 0 && !selectedStatus.includes(chapter.status)) return false
      
      // Filter by weak chapters
      if (showWeakChapters && !chapter.isWeak) return false
      
      return true
    })

    // Sort chapters
    filtered.sort((a, b) => {
      let aValue: any, bValue: any
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'year2025':
          aValue = a.stats.year2025.count
          bValue = b.stats.year2025.count
          break
        case 'year2024':
          aValue = a.stats.year2024.count
          bValue = b.stats.year2024.count
          break
        case 'completion':
          aValue = parseInt(a.stats.completion.split('/')[0])
          bValue = parseInt(b.stats.completion.split('/')[0])
          break
        default:
          return 0
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    return filtered
  }, [chapters, selectedSubject, selectedClass, selectedUnits, selectedStatus, showWeakChapters, sortBy, sortOrder])

  const handleSort = () => {
    if (sortBy === 'name') {
      dispatch(setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'))
    } else {
      dispatch(setSortBy('name'))
      dispatch(setSortOrder('asc'))
    }
  }

  const getStatusColor = (status: Chapter['status']) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 dark:text-green-400'
      case 'In Progress':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'Not Started':
        return 'text-gray-500 dark:text-gray-400'
      default:
        return 'text-gray-500 dark:text-gray-400'
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Summary and Sort */}
      <div className="flex w-full min-h-12 items-center px-4 py-0 bg-white dark:bg-gray-900 z-[1] border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-start justify-center gap-1 pl-0 pr-2 py-2 flex-1 grow">
          <p className="self-stretch mt-[-1.00px] font-14px-regular text-[#101319] dark:text-white">
            Showing {filteredAndSortedChapters.length} chapters
          </p>
        </div>

        <div className="inline-flex items-center gap-1">
          <Button
            variant="ghost"
            onClick={handleSort}
            className="h-9 flex items-center gap-0.5 px-2 py-2 rounded-[10px] border border-solid border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowUpDown className="w-5 h-5" />
            <span className="font-14px-medium text-[#0065de] dark:text-blue-400 text-center whitespace-nowrap">
              Sort
            </span>
          </Button>
        </div>
      </div>

      {/* Chapter Cards */}
      <div className="flex flex-col w-full items-start gap-4 p-4 bg-[#f2f5fb] dark:bg-gray-800 z-0 min-h-[calc(100vh-300px)]">
        {filteredAndSortedChapters.length === 0 ? (
          <div className="flex items-center justify-center w-full py-12">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              No chapters found matching your filters.
            </p>
          </div>
        ) : (
          filteredAndSortedChapters.map((chapter) => (
            <Card
              key={chapter.id}
              className="flex items-center gap-4 p-4 w-full bg-white dark:bg-gray-900 rounded-xl border border-solid border-[#d1d8e0] dark:border-gray-700 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <CardContent className="flex items-center gap-4 p-0 w-full">
                <PhosphorIcon 
                  name={chapter.icon} 
                  size={24} 
                  className="text-blue-600 dark:text-blue-400 flex-shrink-0" 
                />

                <div className="flex flex-col items-start gap-2 flex-1 grow min-w-0">
                  <div className="flex items-center gap-6 self-stretch w-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-label-base-16 text-[#101319] dark:text-white truncate">
                        {chapter.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(chapter.status)} bg-gray-100 dark:bg-gray-800`}>
                          {chapter.status}
                        </span>
                        {chapter.isWeak && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20">
                            Weak
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-end gap-2 self-stretch">
                      <div className="w-fit mt-[-1.00px] font-body-xs-12 text-right whitespace-nowrap">
                        <span className="text-[#505d79] dark:text-gray-400">2025: </span>
                        <span className="text-[#505d79] dark:text-gray-400">
                          {chapter.stats.year2025.count}Qs
                        </span>
                        {chapter.stats.year2025.trend === "up" && (
                          <TrendingUp className="inline w-3 h-3 ml-1 text-[#007f42] dark:text-green-400" />
                        )}
                        {chapter.stats.year2025.trend === "down" && (
                          <TrendingDown className="inline w-3 h-3 ml-1 text-[#e02a2f] dark:text-red-400" />
                        )}
                        <span className="text-[#505d79] dark:text-gray-400"> | 2024: </span>
                        <span className="text-[#505d79] dark:text-gray-400">
                          {chapter.stats.year2024.count}Qs
                        </span>
                      </div>
                    </div>

                    <div className="w-fit font-body-xs-12 text-[#d1d8e0] dark:text-gray-600 text-right whitespace-nowrap">
                      |
                    </div>

                    <div className="w-fit font-body-xs-12 text-[#505d79] dark:text-gray-400 text-right whitespace-nowrap">
                      {chapter.stats.completion}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}