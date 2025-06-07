import { Chapter } from '@/store/slices/chaptersSlice'

// Mock data based on the provided JSON structure
export const mockChapters: Chapter[] = [
  {
    id: 1,
    name: "Gravitation",
    icon: "planet",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 1",
    status: "Not Started",
    isWeak: false,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "113/205 Qs"
    }
  },
  {
    id: 2,
    name: "Math in Physics",
    icon: "calculator",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 1",
    status: "In Progress",
    isWeak: true,
    stats: {
      year2025: { count: 2, trend: "down" },
      year2024: { count: 6 },
      completion: "45/120 Qs"
    }
  },
  {
    id: 3,
    name: "Units and Dimensions",
    icon: "ruler",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 1",
    status: "Completed",
    isWeak: false,
    stats: {
      year2025: { count: 6 },
      year2024: { count: 6 },
      completion: "89/89 Qs"
    }
  },
  {
    id: 4,
    name: "Motion in One Dimension",
    icon: "arrow-right",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 2",
    status: "Not Started",
    isWeak: false,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "0/156 Qs"
    }
  },
  {
    id: 5,
    name: "Motion in Two Dimensions",
    icon: "arrows-out",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 2",
    status: "In Progress",
    isWeak: false,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "67/134 Qs"
    }
  },
  {
    id: 6,
    name: "Laws of Motion",
    icon: "arrows-clockwise",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 2",
    status: "Not Started",
    isWeak: true,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "0/178 Qs"
    }
  },
  {
    id: 7,
    name: "Centre of Mass Equilibrium and Momentum",
    icon: "target",
    subject: "Physics",
    class: "Class 11",
    unit: "Unit 3",
    status: "In Progress",
    isWeak: false,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "23/98 Qs"
    }
  },
  {
    id: 8,
    name: "Work Power Energy",
    icon: "lightning",
    subject: "Physics",
    class: "Class 12",
    unit: "Unit 3",
    status: "Completed",
    isWeak: false,
    stats: {
      year2025: { count: 8, trend: "up" },
      year2024: { count: 6 },
      completion: "145/145 Qs"
    }
  },
  // Chemistry chapters
  {
    id: 9,
    name: "Atomic Structure",
    icon: "atom",
    subject: "Chemistry",
    class: "Class 11",
    unit: "Unit 1",
    status: "Not Started",
    isWeak: false,
    stats: {
      year2025: { count: 5, trend: "up" },
      year2024: { count: 4 },
      completion: "0/89 Qs"
    }
  },
  {
    id: 10,
    name: "Chemical Bonding",
    icon: "link",
    subject: "Chemistry",
    class: "Class 11",
    unit: "Unit 2",
    status: "In Progress",
    isWeak: true,
    stats: {
      year2025: { count: 7, trend: "up" },
      year2024: { count: 5 },
      completion: "34/112 Qs"
    }
  },
  // Mathematics chapters
  {
    id: 11,
    name: "Sets and Functions",
    icon: "function",
    subject: "Mathematics",
    class: "Class 11",
    unit: "Unit 1",
    status: "Completed",
    isWeak: false,
    stats: {
      year2025: { count: 6, trend: "up" },
      year2024: { count: 4 },
      completion: "78/78 Qs"
    }
  },
  {
    id: 12,
    name: "Trigonometry",
    icon: "triangle",
    subject: "Mathematics",
    class: "Class 11",
    unit: "Unit 2",
    status: "In Progress",
    isWeak: false,
    stats: {
      year2025: { count: 9, trend: "up" },
      year2024: { count: 7 },
      completion: "56/134 Qs"
    }
  }
]

// Helper functions to get unique values for filters
export const getUniqueClasses = (chapters: Chapter[]): string[] => {
  return Array.from(new Set(chapters.map(chapter => chapter.class)))
}

export const getUniqueUnits = (chapters: Chapter[], selectedClass?: string[]): string[] => {
  const filteredChapters = selectedClass?.length 
    ? chapters.filter(chapter => selectedClass.includes(chapter.class))
    : chapters
  return Array.from(new Set(filteredChapters.map(chapter => chapter.unit)))
}

export const getUniqueStatuses = (chapters: Chapter[]): string[] => {
  return Array.from(new Set(chapters.map(chapter => chapter.status)))
}