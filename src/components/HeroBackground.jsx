import { useEffect, useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'https://images.unsplash.com/photo-1571645163064-77faa9676a46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
]

const INTERVAL = 6000

export default function HeroBackground() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, INTERVAL)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="hero-bg" aria-hidden="true">
      {IMAGES.map((src, i) => (
        <div className={`hero-bg-slide ${i === index ? 'active' : ''}`} key={src}>
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  )
}
