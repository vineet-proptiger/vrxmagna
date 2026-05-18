'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      position: 'relative',
      marginTop: '80px',
      height: 'max(calc(100vh - 80px), 56.25vw)',
      minHeight: '520px',
      overflow: 'hidden',
      background: '#1a1a1a',
    }}>

      {/* ── Image Carousel ── */}
      {slides.map((src, idx) => (
        <div key={idx} style={{
          position: 'absolute', inset: 0,
          opacity: current === idx ? 1 : 0,
          transition: 'opacity 1s ease',
        }}>
          <Image
            src={src}
            alt={`VRX MAGNA ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Brand red gradient at bottom — matches krisumi.com ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '45%',
        background: 'linear-gradient(to top, rgba(169,38,45,0.82) 0%, rgba(169,38,45,0.45) 40%, rgba(169,38,45,0.10) 75%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* ── Dot indicators ── */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 z-10 bottom-[150px] sm:bottom-20"
        style={{ }}>
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} style={{
            width: current === idx ? '32px' : '8px',
            height: '3px',
            background: '#fff',
            opacity: current === idx ? 1 : 0.5,
            border: 'none', borderRadius: '2px',
            cursor: 'pointer', padding: 0,
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* ── Bottom row: left identity + right CTA ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row items-start sm:items-end justify-between px-4 sm:px-10 pb-5 sm:pb-7 gap-4 sm:gap-0"
        style={{ zIndex: 10 }}
      >

        {/* Bottom-left: wave + project name */}
        <div style={{ color: '#fff' }}>
          {/* Wave lines */}
          <svg width="52" height="22" viewBox="0 0 52 22" fill="none"
            style={{ display: 'block', marginBottom: '8px' }}>
            <path d="M2 16 Q10 4 18 16 Q26 28 34 16 Q42 4 50 16"
              stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <path d="M6 20 Q14 11 22 20 Q30 29 38 20 Q44 13 50 20"
              stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '400',
            letterSpacing: '0.22em', margin: '0 0 2px',
            opacity: 0.85, textTransform: 'uppercase',
          }}>SMART HOMES GATED COMMUNITY</p>
          <p style={{
            fontFamily: 'var(--font-jost)', fontSize: '18px', fontWeight: '700',
            letterSpacing: '0.05em', margin: '0 0 3px',
            textTransform: 'uppercase', lineHeight: 1.1,
          }}>VRX MAGNA</p>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: '400',
            letterSpacing: '0.2em', margin: 0,
            opacity: 0.65, textTransform: 'uppercase',
          }}>THIRUMAZHISAI, CHENNAI</p>
        </div>

        {/* Bottom-right: CTA — cut-corner button like krisumi.com */}
        {/* Outer wrapper = red border via background + clip-path */}
        <div
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: '#A9262D',
            WebkitMask: 'radial-gradient(circle at 0 0, transparent 6px, black 6.5px) top left, radial-gradient(circle at 100% 0, transparent 6px, black 6.5px) top right, radial-gradient(circle at 0 100%, transparent 6px, black 6.5px) bottom left, radial-gradient(circle at 100% 100%, transparent 6px, black 6.5px) bottom right',
            WebkitMaskSize: '51% 51%',
            WebkitMaskRepeat: 'no-repeat',
            padding: '1.5px',
            flexShrink: 0,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Inner = white bg (or red on hover) */}
          <div style={{
            background: hovered ? '#A9262D' : '#ffffff',
            color: hovered ? '#ffffff' : '#A9262D',
            WebkitMask: 'radial-gradient(circle at 0 0, transparent 5px, black 5.5px) top left, radial-gradient(circle at 100% 0, transparent 5px, black 5.5px) top right, radial-gradient(circle at 0 100%, transparent 5px, black 5.5px) bottom left, radial-gradient(circle at 100% 100%, transparent 5px, black 5.5px) bottom right',
            WebkitMaskSize: '51% 51%',
            WebkitMaskRepeat: 'no-repeat',
            padding: '14px 30px',
            display: 'flex', alignItems: 'center', gap: '12px',
            fontFamily: 'var(--font-jost)',
            fontSize: '12px', fontWeight: '700',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            transition: 'background 0.3s ease, color 0.3s ease',
            pointerEvents: 'none',
          }}>
            MAKE AN ENQUIRY
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
