import { useCallback, useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#'

interface ScrambleTextProps {
  text: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
  playOnMount?: boolean
}

export function ScrambleText({ text, className = '', as: Tag = 'span', playOnMount = false }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef<number | undefined>(undefined)
  const mounted = useRef(false)

  const scramble = useCallback(() => {
    let iteration = 0
    clearInterval(intervalRef.current)

    intervalRef.current = window.setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration) return text[i]
            if (char === ' ') return ' '
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )

      iteration += 1 / 3

      if (iteration >= text.length + 2) {
        clearInterval(intervalRef.current)
        setDisplay(text)
      }
    }, 30)
  }, [text])

  useEffect(() => {
    if (playOnMount && !mounted.current) {
      mounted.current = true
      scramble()
    }
  }, [playOnMount, scramble])

  return (
    <Tag className={className} onMouseEnter={scramble}>
      {display}
    </Tag>
  )
}
