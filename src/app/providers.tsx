'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ThemeProvider } from '@/components/theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  )
}