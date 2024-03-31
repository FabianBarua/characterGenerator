import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { MoonIcon, SunIcon } from './Icons'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (

    <Button isIconOnly aria-label='Like' className=' absolute top-3 right-3' onClick={toggleTheme}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>

  )
};
