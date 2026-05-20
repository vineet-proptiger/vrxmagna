'use client'
import { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    category: 'Connectivity',
    items: [
      { name: 'Poonamallee Bus Stand', dist: '3 km' },
      { name: 'Chennai Metro – Poonamallee Metro Station (Upcoming)', dist: '3.5 km' },
      { name: 'Koyambedu Metro Station & Bus Terminus', dist: '14 km' },
      { name: 'Thirumazhisai Bus Stand', dist: '0.14 km' },
    ],
  },
  {
    category: 'Education',
    items: [
      { name: 'Chennai Public School', dist: '2 km' },
      { name: 'Velammal Vidyalaya', dist: '4 km' },
      { name: 'Saveetha Engineering College', dist: '3 km' },
      { name: 'Panimalar Engineering College', dist: '5 km' },
    ],
  },
  {
    category: 'Healthcare',
    items: [
      { name: 'Sree Sai Dental Care', dist: '0.42 km' },
      { name: 'Sri Dhanvantri Physiotherapy Clinic', dist: '0.46 km' },
      { name: 'Aachi Hospital', dist: '0.94 km' },
      { name: 'Public Healthcare Hospital', dist: '1.5 km' },
    ],
  },
  {
    category: 'Business & Commercial Hubs',
    items: [
      { name: 'DLF IT Park', dist: '12 km' },
      { name: 'RMZ One Paramount', dist: '13 km' },
      { name: 'Commercial Zone', dist: '14 km' },
      { name: 'Ambattur Industrial Estate', dist: '16 km' },
    ],
  },
]

const Location = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}>
               <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
             </svg>
             LOCATION ADVANTAGES
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>

              {/* Table Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                background: '#9b2c2c', color: '#fff',
                fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LOCATION</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>DISTANCE</div>
              </div>

              {/* Accordion Categories */}
              {locationCategories.map((cat, ci) => (
                <div key={ci}>
                  {/* Clickable Category Header */}
                  <button
                    onClick={() => setOpenIdx(openIdx === ci ? -1 : ci)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: '#c9a96e', color: '#fff',
                      fontFamily: F_JOST, fontSize: '11px', fontWeight: '700',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '9px 16px',
                      borderBottom: '1px solid #D5C2A8',
                      cursor: 'pointer', border: 'none', outline: 'none',
                      borderBottom: openIdx === ci ? '1px solid #D5C2A8' : '1px solid #D5C2A8',
                    }}
                  >
                    <span>{cat.category}</span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transition: 'transform 0.25s', transform: openIdx === ci ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Collapsible Rows */}
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: openIdx === ci ? `${cat.items.length * 48}px` : '0',
                    transition: 'max-height 0.3s ease',
                  }}>
                    {cat.items.map((item, i) => (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                        background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC',
                        color: '#684C1B', fontFamily: F_SANS,
                        fontSize: '13px', fontWeight: '600',
                        borderBottom: '1px solid #D5C2A8',
                      }}>
                        <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                          {item.name}
                        </div>
                        <div style={{ padding: '10px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.dist}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.118014592555!2d80.01639757507837!3d13.08349788724228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289828a183d45%3A0xb6e587b3ba3f3371!2sVRX%20Magna!5e1!3m2!1sen!2sin!4v1779079804207!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Thirumazhisai, Chennai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
