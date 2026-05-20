'use client'
import React from 'react'
import {
  Flower2, PersonStanding, Gamepad2, Trophy,
  Building2, Waves, Dice5, Wifi,
  ShieldCheck, Home, Stethoscope, Coffee
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
  { icon: Flower2,        title: 'LANDSCAPED GARDENS',     desc: 'Beautifully landscaped gardens and green zones for fresh air, relaxation, and wellness every day.' },
  { icon: PersonStanding, title: 'JOGGING & WALKING TRACK', desc: 'Dedicated jogging and walking tracks through green spaces for a healthy and active lifestyle.' },
  { icon: Gamepad2,       title: "CHILDREN'S PLAY COURTS", desc: "Safe and vibrant children's play courts designed for fun, exploration, and active engagement." },
  { icon: Trophy,         title: 'SPORTS FACILITIES',      desc: 'Premium sports facilities including basketball courts and a skating rink for recreation and fitness.' },
  { icon: Building2,      title: 'GRAND CLUBHOUSE',        desc: 'A grand clubhouse and multipurpose hall for community events, celebrations, and social gatherings.' },
  { icon: Waves,          title: 'SWIMMING POOL & GYM',    desc: 'A well-maintained swimming pool and fully equipped gym to support your fitness goals.' },
  { icon: Dice5,          title: 'INDOOR GAMES & RECREATION', desc: 'Vibrant indoor games and recreation rooms for leisure, fun, and community bonding.' },
  { icon: Wifi,           title: 'CO-WORKING LOUNGES',     desc: 'Modern co-working lounges and Wi-Fi-enabled spaces for productive remote work from home.' },
  { icon: ShieldCheck,    title: '24×7 GATED SECURITY',    desc: '24×7 gated security and surveillance ensuring complete safety and peace of mind for all residents.' },
  { icon: Home,           title: 'HOME AUTOMATION',        desc: 'Smart home automation features for enhanced comfort, convenience, and a future-ready living experience.' },
  { icon: Stethoscope,    title: 'CLINIC & CAFÉ ZONES',    desc: 'On-site clinic space, café zones, and daily convenience areas for health and everyday needs.' },
  { icon: Coffee,         title: 'COMMUNITY SPACES',       desc: 'Dedicated community and relaxation pockets for unwinding, socialising, and building connections.' },
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
            LIFESTYLE AMENITIES – Experience More Every Day
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
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
