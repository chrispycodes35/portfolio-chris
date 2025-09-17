'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadStarsPreset } from '@tsparticles/preset-stars'

export default function ParticleBackground() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let isMounted = true
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
      await loadStarsPreset(engine)
    }).then(() => {
      if (isMounted) setIsReady(true)
    })
    return () => {
      isMounted = false
    }
  }, [])

  if (!isReady) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        preset: 'stars',
        background: {
          color: { value: 'transparent' },
        },
        particles: {
          color: {
            value: ['#8b5cf6', '#3b82f6', '#e5e7eb', '#60a5fa', '#a78bfa'],
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  )
}
