'use client'
import React from 'react'
import {
  Umbrella, Waves, Trees, Presentation, Map, Activity, Gamepad2, Droplets, Droplet, SunDim
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const ArcIcon = () => (
  <svg
    width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}
  >
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Umbrella, title: 'POOL BAR', desc: 'Unwind at our elegant pool bar with refreshing drinks and serene vibes.' },
  { icon: Trees, title: 'OUTDOOR GAZEBO', desc: 'Relax at the outdoor gazebo with serene surroundings and peaceful vibes.' },
  { icon: Waves, title: 'WATERSCAPE', desc: 'Enjoy the calming waterscape with serene views and relaxing ambiance.' },
  { icon: Presentation, title: 'MULTIPURPOSE HALL', desc: 'Host gatherings in the multipurpose hall with modern amenities and flexible space.' },
  { icon: Map, title: 'AMPHITHEATRE', desc: 'Host gatherings and events in a versatile, well-designed space.' },
  { icon: Droplets, title: 'KID\'S STREAM', desc: 'Enjoy playful moments at the kid\'s stream with fun water activities.' },
  { icon: Activity, title: 'KID\'S WATER PARK', desc: 'Have fun at the kid\'s water park with safe and playful water features.' },
  { icon: Gamepad2, title: 'KID\'S PLAY AREA', desc: 'A safe and vibrant space for kids to play, explore, and enjoy.' },
  { icon: Droplet, title: 'MIST POND', desc: 'Relax by the mist pond with a calm and refreshing ambiance.' },
  { icon: SunDim, title: 'RESTING PLACE', desc: 'Unwind at the resting place with peaceful surroundings and comfort.' },
  { icon: Waves, title: 'SOURCE FOUNTAIN', desc: 'Enjoy the source fountain with soothing water flow and serene vibes.' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ArcIcon />
            PROJECT AMENITIES
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e5e7eb',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e5e7eb" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e5e7eb]">
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: '#A9262D' }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#684C1B', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Empty 12th cell to complete the grid nicely on desktop */}
            <div className="hidden lg:block bg-white" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
