'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { PhosphorIcon } from './PhosphorIcon'
import { ThemeToggle } from './ThemeToggle'

const subjectIcons = {
  Physics: 'atom',
  Chemistry: 'flask',
  Mathematics: 'calculator',
}

export const Header: React.FC = () => {
  const selectedSubject = useSelector((state: RootState) => state.filters.selectedSubject)

  return (
    <header className="flex flex-col w-full items-start pt-6 pb-4 px-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-start w-full bg-white dark:bg-gray-900 px-4">
        <div className="flex flex-col items-center gap-4 flex-1 grow">
          <div className="inline-flex items-center justify-center gap-4">
            <PhosphorIcon 
              name={subjectIcons[selectedSubject]} 
              size={24} 
              className="text-blue-600 dark:text-blue-400" 
            />
            <h1 className="w-fit mt-[-1.00px] font-bold text-[#101319] dark:text-white text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
              {selectedSubject} PYQs
            </h1>
          </div>
          <p className="w-fit font-normal text-[#505d79] dark:text-gray-400 text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap">
            Chapter-wise Collection of {selectedSubject} PYQs
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}