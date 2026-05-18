'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const BORDER_COLOR = '#D5C2A8'
const BG = 'var(--color-cream-bg)' // #EAE5D9

/* Arc icon — same as other sections */
const ArcIcon = () => (
  <svg
    width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle', marginBottom: '3px' }}
  >
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

/* Curved concave notch at each corner of the border box */
const CurvedCorners = ({ bg = BG }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    { top: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomRightRadius: '18px' },
    // top-right → curve goes bottom-left
    { top: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomLeftRadius: '18px' },
    // bottom-left → curve goes top-right
    { bottom: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopRightRadius: '18px' },
    // bottom-right → curve goes top-left
    { bottom: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

/* SVG icons */
const IconPin = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconTrees = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M7 12l5-5 5 5"/>
    <path d="M5 17l7-7 7 7"/>
    <circle cx="8" cy="7" r="2.5"/>
    <circle cx="16" cy="7" r="2.5"/>
  </svg>
)
const IconBuilding = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l7-4 7 4v14"/>
    <path d="M9 21v-4h6v4"/>
    <line x1="9" y1="9" x2="9" y2="9.01"/>
    <line x1="15" y1="9" x2="15" y2="9.01"/>
    <line x1="9" y1="13" x2="9" y2="13.01"/>
    <line x1="15" y1="13" x2="15" y2="13.01"/>
  </svg>
)
const IconMap = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
)

const highlights = [
  { title: '10X GROWTH',       desc: 'Prime Thirumazhisai location with exceptional investment potential and 10X growth opportunity.', Icon: IconPin },
  { title: '76% OPEN SPACE',   desc: '76% open and green spaces crafted for fresh air, wellness, and a balanced lifestyle.', Icon: IconTrees },
  { title: 'HOME AUTOMATION',  desc: 'Future-ready smart home automation for a seamless and intelligent living experience.', Icon: IconBuilding },
  { title: 'VIARA EXPERIENCE', desc: 'Exclusive VIARA lifestyle experience with world-class amenities and premium facilities.', Icon: IconMap },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: BG, padding: '60px 0 72px' }}>
    <div className="px-4 sm:px-8" style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#684C1B', letterSpacing: '0.22em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ArcIcon />
          KEY HIGHLIGHTS
        </h2>
      </div>

      {/* Bordered container with curved concave corner notches */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          position: 'relative',
          border: `1px solid ${BORDER_COLOR}`,
          overflow: 'hidden',
        }}
      >
        <CurvedCorners bg={BG} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: BORDER_COLOR }}>
        {highlights.map(({ title, desc, Icon }, i) => (
          <div key={i} style={{
            padding: '36px 20px 28px',
            textAlign: 'center',
            background: BG,
          }}>
            {/* Dark red circle */}
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'var(--color-brand)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Icon />
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: F_JOST, fontSize: '12.5px', fontWeight: '700',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 12px',
            }}>{title}</h3>

            {/* Description */}
            <p style={{
              fontFamily: F_SANS, fontSize: '13px',
              color: '#4A4540',
              lineHeight: 1.65, margin: 0,
            }}>{desc}</p>
          </div>
        ))}
        </div>
      </div>

    </div>
  </section>
)

export default Highlights
