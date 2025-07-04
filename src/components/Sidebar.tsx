'use client'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { setSelectedSubject } from '@/store/slices/filtersSlice'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { PhosphorIcon } from './PhosphorIcon'

const navigationItems = [
	{
		id: 'Physics',
		title: 'Physics PYQs',
		icon: 'atom',
		subject: 'Physics' as const,
	},
	{
		id: 'Chemistry',
		title: 'Chemistry PYQs',
		icon: 'flask',
		subject: 'Chemistry' as const,
	},
	{
		id: 'Mathematics',
		title: 'Mathematics PYQs',
		icon: 'calculator',
		subject: 'Mathematics' as const,
	},
]

export const Sidebar: React.FC = () => {
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	const selectedSubject = useSelector(
		(state: RootState) => state.filters.selectedSubject
	)

	const handleSubjectChange = (subject: 'Physics' | 'Chemistry' | 'Mathematics') => {
		dispatch(setSelectedSubject(subject))
		setOpen(false) // close sidebar on mobile after selection
	}

	return (
		<>
			{/* Mobile menu button */}
			<button
				className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white rounded-full p-2 shadow-lg"
				onClick={() => setOpen(true)}
				aria-label="Open sidebar"
			>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			</button>

			{/* Sidebar overlay for mobile */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 ${
					open ? 'block' : 'hidden'
				} md:hidden`}
				onClick={() => setOpen(false)}
			/>

			{/* Sidebar itself */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-200 md:static md:translate-x-0 md:w-[272px] md:block ${
					open ? 'translate-x-0' : '-translate-x-full'
				} md:!block`}
			>
				<div className="flex flex-col w-full h-full items-start">
					<div className="flex flex-col w-full items-start py-6 bg-white dark:bg-gray-900">
						<div className="flex flex-col items-start gap-4 w-full px-4">
							<div className="flex items-center justify-center gap-4 w-full">
								<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
									<span className="text-white text-xs font-bold">JEE</span>
								</div>
								<div className="font-bold text-[#101319] dark:text-white text-xl leading-6">
									JEE Main
								</div>
							</div>

							<div className="flex items-center justify-center gap-1 w-full">
								<div className="flex-1 font-body-xs-12 text-[#505d79] dark:text-gray-400 text-center">
									2025 - 2009 | 173 Papers | 15825 Qs
								</div>
							</div>
						</div>
					</div>

					<Card className="border-0 shadow-none w-full bg-transparent">
						<CardContent className="flex flex-col items-start gap-2 pt-0 pb-4 px-4">
							{navigationItems.map((item) => (
								<Button
									key={item.id}
									variant="ghost"
									onClick={() => handleSubjectChange(item.subject)}
									className={`flex h-12 items-center gap-4 pl-4 pr-2 py-3 w-full rounded-xl justify-start transition-all duration-200 ${
										selectedSubject === item.subject
											? 'bg-[#1d2933] dark:bg-blue-600 text-white'
											: 'bg-white dark:bg-gray-800 text-[#101319] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
									}`}
								>
									<PhosphorIcon
										name={item.icon}
										size={24}
										className={
											selectedSubject === item.subject
												? 'text-white'
												: 'text-gray-600 dark:text-gray-400'
										}
									/>
									<span className="flex-1 font-label-sm-14 text-left">
										{item.title}
									</span>
									<ChevronRight className="w-5 h-5" />
								</Button>
							))}
						</CardContent>
					</Card>
				</div>
				{/* Close button for mobile */}
				<button
					className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					onClick={() => setOpen(false)}
					aria-label="Close sidebar"
				>
					<svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
			</div>
		</>
	)
}