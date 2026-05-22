'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

// Carousel disabled in favor of device-optimized static banners
// const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  // const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  // useEffect(() => {
  //   const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section className="hero-container">
      <style>{`
        .hero-container {
          position: relative;
          margin-top: 80px;
          height: auto;
          aspect-ratio: 16/7; /* Shorter desktop aspect ratio to fit within 1 viewport height */
          overflow: hidden;
          background: transparent;
          display: block;
        }

        .hero-carousel {
          position: absolute;
          inset: 0;
        }

        .hero-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(to top, rgba(169,38,45,0.82) 0%, rgba(169,38,45,0.45) 40%, rgba(169,38,45,0.10) 75%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        .hero-bottom-row {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          padding-left: 40px;
          padding-right: 40px;
          padding-bottom: 28px;
          z-index: 10;
        }

        .hero-dots {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          bottom: 80px;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-container {
            aspect-ratio: 4/3 !important; /* Shorter tablet aspect ratio (4:3) to fit viewport perfectly */
          }
        }

        @media (max-width: 767px) {
          .hero-container {
            margin-top: 0px !important;
            padding-top: 80px !important;
            height: auto !important;
            min-height: auto !important;
            aspect-ratio: auto !important;
            display: flex !important;
            flex-direction: column !important;
            background: transparent !important;
            border-radius: 0px !important;
            box-shadow: none !important;
          }

          .hero-carousel {
            position: relative !important;
            width: 100% !important;
            aspect-ratio: 3/4 !important; /* Shorter mobile aspect ratio (3:4) to fit viewport perfectly */
            height: auto !important;
            inset: auto !important;
          }

          .hero-gradient {
            display: none !important;
          }

          .hero-bottom-row {
            position: static !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 20px 32px !important;
            background: #111827 !important;
            gap: 20px !important;
          }

          .hero-dots {
            display: none !important;
          }
        }

        @keyframes priceBlink {
          0%, 84% { opacity: 1; }
          85%, 100% { opacity: 0; }
        }
      `}</style>

      {/* ── Desktop Banner (lg:block, hidden on tablet and mobile) ── */}
      <div className="hidden lg:block hero-carousel">
        <Image
          src={heroImages.banner1Desk}
          alt="VRX MAGNA Desktop Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Tablet Banner (md:block, hidden on mobile and desktop) ── */}
      <div className="hidden md:block lg:hidden hero-carousel">
        <Image
          src={heroImages.banner1tab}
          alt="VRX MAGNA Tablet Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Mobile Banner (block, hidden on tablet and desktop) ── */}
      <div className="block md:hidden hero-carousel">
        <Image
          src={heroImages.bnnner1sm}
          alt="VRX MAGNA Mobile Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Brand red gradient at bottom — matches krisumi.com ── */}
      {false && <div className="hero-gradient" />}

      {/* ── Dot indicators ── */}
      {false && (
      <div className="hero-dots">
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
      )}

      {/* ── Bottom row: left identity + right CTA ── */}
      {false && (
      <div className="hero-bottom-row">

        {/* Bottom-left: designed content block */}
        <div style={{
          color: '#fff', maxWidth: '400px',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '12px',
          padding: '18px 20px 16px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>

          {/* Badge — above main heading */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'linear-gradient(135deg, #A9262D 0%, #c9362e 100%)',
            border: '1px solid rgba(244,192,112,0.45)',
            borderRadius: '50px',
            padding: '6px 16px 6px 11px',
            marginBottom: '12px',
            boxShadow: '0 2px 12px rgba(169,38,45,0.5)',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#f4c070', flexShrink: 0,
              boxShadow: '0 0 6px #f4c070',
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff',
            }}>Register Your Interest</span>
          </div>

          {/* Main Heading */}
          <p style={{
            fontFamily: 'var(--font-jost)', fontSize: '36px', fontWeight: '800',
            letterSpacing: '0.04em', margin: '0 0 4px',
            textTransform: 'uppercase', lineHeight: 1.05,
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>VRX MAGNA</p>

          {/* Divider line */}
          <div style={{
            width: '48px', height: '2px', borderRadius: '2px',
            background: 'linear-gradient(90deg, #f4c070, rgba(244,192,112,0.3))',
            margin: '8px 0 10px',
          }} />

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: '500',
            letterSpacing: '0.14em', margin: '0 0 14px',
            opacity: 0.78, textTransform: 'uppercase',
          }}>Smart Luxury Homes at Thirumazhisai, Chennai</p>

          {/* Bullet list */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px' }}>
            {[
              'Modern Studio, 1 & 2 BHK Residences',
              'Expansive 6.5-Acre Community with 76% Open Spaces',
              '100+ Lifestyle Amenities & Smart Home Features',
              'Strategic Growth Corridor on Poonamallee High Road',
              'Get a Pre-Signed Rental Income of ₹15,000/- | Handing Over Soon',
            ].map((item, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-sans)', fontSize: '12.5px', fontWeight: '400',
                letterSpacing: '0.03em', opacity: 0.9,
                display: 'flex', alignItems: 'flex-start', gap: '9px',
                marginBottom: '6px', lineHeight: 1.4,
              }}>
                <span style={{ color: '#f4c070', fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>▸</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #A9262D 0%, #c9362e 100%)',
            border: '1px solid rgba(244,192,112,0.45)',
            borderRadius: '8px',
            padding: '6px 18px 6px 14px',
            animation: 'priceBlink 2.5s step-end infinite',
          }}>
            <span style={{
              fontFamily: 'var(--font-jost)', fontSize: '20px', fontWeight: '800',
              letterSpacing: '0.05em', color: '#fff',
            }}>₹35 L*</span>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: '600',
              letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase',
            }}>Onwards</span>
          </div>
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
            BOOK A VISIT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}

export default Hero
