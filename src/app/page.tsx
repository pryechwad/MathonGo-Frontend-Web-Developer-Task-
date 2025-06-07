'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setChapters } from '@/store/slices/chaptersSlice'
import { mockChapters } from '@/data/mockData'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { FilterBar } from '@/components/FilterBar'
import { ChapterList } from '@/components/ChapterList'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Load mock data on component mount
    dispatch(setChapters(mockChapters))
  }, [dispatch])

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col w-full min-h-screen overflow-x-hidden md:flex-row md:justify-center">
      <div className="bg-white dark:bg-gray-900 w-full relative flex flex-col md:max-w-[1360px] md:flex-row">
        <Sidebar />
        <main className="flex flex-col w-full items-start bg-[#f2f5fb] dark:bg-gray-800 border border-solid border-[#eaedf1] dark:border-gray-700">
          <Header />
          <FilterBar />
          <ChapterList />
        </main>
      </div>
    </div>
  )
}