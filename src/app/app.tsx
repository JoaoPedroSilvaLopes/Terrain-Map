import { ProceduralRender } from "@terrain-map/modules/render"
import { GlobalStyle } from '@terrain-map/shared/styles'
import { ThemeContext, useThemeMode } from '@terrain-map/shared/core'

export const App = () => {
  const { themeToggler } = useThemeMode()

  return (
    <>
      <ThemeContext>
        <GlobalStyle />
        <ProceduralRender themeToggler={themeToggler} />
      </ThemeContext>
    </>
  )
}