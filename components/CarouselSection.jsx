'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ArcIcon = () => (
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}>
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const CarouselSection = ({ setIsOpen }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const currentImage = galleryImages[index]

  return (
    <section id="homes-designed" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* ── Header Row ── */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-8 gap-6 w-full min-h-[50px]">
          
          {/* Centered Heading */}
          <div className="flex items-center justify-center">
            <ArcIcon />
            <h2 style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
              color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
            }} className="text-center">HOMES DESIGNED AROUND YOU</h2>
          </div>

          {/* Right side Buttons */}
          <div className="flex items-center gap-4 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <button className="btn-brand hidden sm:flex" onClick={() => setIsOpen(true)} style={{ padding: '12px 24px', fontSize: '12px' }}>
              ENQUIRE NOW
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            
            {/* Arrows */}
            <div className="flex" style={{
               WebkitMask: 'radial-gradient(circle at 0 0, transparent 4px, black 4.5px) top left, radial-gradient(circle at 100% 0, transparent 4px, black 4.5px) top right, radial-gradient(circle at 0 100%, transparent 4px, black 4.5px) bottom left, radial-gradient(circle at 100% 100%, transparent 4px, black 4.5px) bottom right',
               WebkitMaskSize: '51% 51%',
               WebkitMaskRepeat: 'no-repeat',
               border: '1px solid #D5C2A8'
            }}>
              <button onClick={prevSlide} style={{
                width: '46px', height: '44px', background: '#fff', color: '#684C1B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRight: '1px solid #D5C2A8', cursor: 'pointer', transition: 'background 0.2s'
              }} onMouseEnter={e => e.currentTarget.style.background = '#fef9f0'} onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
              </button>
              <button onClick={nextSlide} style={{
                width: '46px', height: '44px', background: '#fff', color: '#684C1B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'background 0.2s'
              }} onMouseEnter={e => e.currentTarget.style.background = '#fef9f0'} onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Main Single Image ── */}
        <div className="relative w-full aspect-[16/8] min-h-[400px] bg-gray-100 overflow-hidden">
          <Image 
            src={currentImage.src} 
            alt={currentImage.alt || 'Gallery Image'} 
            fill 
            className="object-cover transition-opacity duration-500 ease-in-out" 
            key={index} // Force re-render for simple fade effect
          />
          
          {/* Enquire Now Overlay */}
          <button className="btn-brand absolute" onClick={() => setIsOpen(true)} style={{
            bottom: '24px', right: '24px', padding: '12px 24px', fontSize: '12px', zIndex: 10
          }}>
            ENQUIRE NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default CarouselSection
