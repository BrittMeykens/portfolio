import {createContext, Dispatch, SetStateAction, useState, useEffect, FunctionComponent, PropsWithChildren} from 'react'

interface DarkLightContextProps {
  theme: 'light' | 'dark'
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const DarkLightContext = createContext<DarkLightContextProps>({
  theme: 'light',
  setTheme: () => {},
})

export const DarkLightProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>((localStorage.getItem('theme') as 'light' | 'dark') || 'light')

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <DarkLightContext.Provider value={{theme, setTheme}}>{children}</DarkLightContext.Provider>
}

export default DarkLightProvider
