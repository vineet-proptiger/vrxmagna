'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { logoImages } from '../lib/images'

const NAV_TEXT = '#684C1B'
const F_JOST   = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS   = 'var(--font-sans), Open Sans, sans-serif'


const aStyle = {
  fontFamily: F_JOST, fontSize: '13px', fontWeight: '600',
  color: NAV_TEXT, letterSpacing: '0.08em',
  textDecoration: 'none', cursor: 'pointer',
  transition: 'color 0.2s',
}

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hover   = e => (e.currentTarget.style.color = '#A9262D')
  const unhover = e => (e.currentTarget.style.color = NAV_TEXT)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#fff',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(104,76,27,0.12)',
    }}>

      {/* ── Desktop bar: all items flow naturally centered ── */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        height: '80px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        gap: '0',
      }}>

        {/* LEFT LINKS */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: 'center', gap: '36px', marginRight: '52px' }}
        >
          <a href="#"         style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>HOME</a>
          <a href="#overview" style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>ABOUT US</a>
        </div>

        {/* CENTER LOGO */}
        <a href="#" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img
            src={logoImages.tarc}
            alt="VRX MAGNA"
            style={{ height: '50px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* RIGHT LINKS */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: 'center', gap: '36px', marginLeft: '52px' }}
        >
          <a href="#" style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>CONTACT US</a>
        </div>

        {/* MOBILE: hamburger pushed to right */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            marginLeft: 'auto',
            background: 'none', border: '1px solid #e5e7eb',
            borderRadius: '6px', padding: '6px',
            color: NAV_TEXT, cursor: 'pointer',
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          {[
            { label: 'HOME',       href: '#'        },
            { label: 'ABOUT US',   href: '#overview' },
            { label: 'CONTACT US', href: '#'        },
          ].map(({ label, href }, i) => (
            <a key={i} href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '14px 24px',
                fontFamily: F_JOST, fontSize: '13px', fontWeight: '600',
                color: NAV_TEXT, borderBottom: '1px solid #f5f5f5',
                letterSpacing: '0.06em', textDecoration: 'none',
              }}
            >{label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
