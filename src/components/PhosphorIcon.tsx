'use client'

import React from 'react'
import * as PhosphorIcons from 'phosphor-react'

interface PhosphorIconProps {
  name: string
  size?: number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  className?: string
}

export const PhosphorIcon: React.FC<PhosphorIconProps> = ({ 
  name, 
  size = 24, 
  weight = 'regular',
  className 
}) => {
  // Convert kebab-case to PascalCase for icon names
  const iconName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  // Get the icon component from phosphor-react
  const IconComponent = (PhosphorIcons as any)[iconName]

  if (!IconComponent) {
    // Fallback to a default icon if the specified icon doesn't exist
    return <PhosphorIcons.Question size={size} weight={weight} className={className} />
  }

  return <IconComponent size={size} weight={weight} className={className} />
}