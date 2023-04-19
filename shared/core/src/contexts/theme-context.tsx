import { ReactNode } from 'react'
import { ThemeProvider } from "styled-components"
import { useThemeMode } from '../hooks'
import { dark, light } from '@procedural-render/styles'

type Props = {
  children: ReactNode
}

export const ThemeContext = ({ children }: Props) => {
  const { theme } = useThemeMode()

  const themeMode = theme === 'light' ? light : dark;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}