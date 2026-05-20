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
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

/* Curved concave notch at each corner of the border box */
const CurvedCorners = ({ bg = BG }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    {
      top: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomRightRadius: '18px'
    },
    // top-right → curve goes bottom-left
    {
      top: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomLeftRadius: '18px'
    },
    // bottom-left → curve goes top-right
    {
      bottom: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopRightRadius: '18px'
    },
    // bottom-right → curve goes top-left
    {
      bottom: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopLeftRadius: '18px'
    },
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
const IconGate = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4h6v4" />
    <rect x="2" y="9" width="3" height="8" rx="1" />
    <rect x="19" y="9" width="3" height="8" rx="1" />
  </svg>
)
const IconTrees = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M7 12l5-5 5 5" />
    <path d="M5 17l7-7 7 7" />
  </svg>
)
const IconHome = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IconSmart = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M9 9l2 2 4-4" />
  </svg>
)
const IconStar = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const IconRoad = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconRupee = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13l8 8M6 8a5 5 0 005 5" />
  </svg>
)
const IconKey = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="17" r="4" />
    <path d="M10.5 13.5L21 3" />
    <path d="M19 5l2 2M16 8l2 2" />
  </svg>
)

const highlights = [
  { title: 'PREMIUM GATED COMMUNITY', desc: 'Premium gated community in Thirumazhisai by Vijay Raja Homes, crafted with quality and trust.', Icon: IconGate },
  { title: '76% OPEN SPACES', desc: 'Sprawled across 6.5 acres with an impressive 76% open and green spaces for wellness and fresh air.', Icon: IconTrees },
  { title: 'SMART HOME DESIGNS', desc: 'Intelligently designed Studio, 1 & 2 BHK homes with efficient layouts for modern urban living.', Icon: IconHome },
  { title: 'HOME AUTOMATION', desc: 'Integrated smart home features for enhanced comfort, convenience, and a future-ready lifestyle.', Icon: IconSmart },
  { title: '100+ AMENITIES', desc: 'Over 100 lifestyle amenities promoting wellness, recreation, and vibrant community engagement.', Icon: IconStar },
  { title: 'STRATEGIC LOCATION', desc: 'Located on Poonamallee High Road in a fast-growing residential and infrastructure corridor.', Icon: IconRoad },
  { title: '₹15,000 RENTAL INCOME', desc: 'Attractive pre-signed rental income opportunity of ₹15,000/- for strong investment returns.', Icon: IconRupee },
  { title: 'HANDING OVER SOON', desc: 'Handing over soon with excellent investment potential and long-term appreciation in Chennai\'s western belt.', Icon: IconKey },
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
          PROJECT HIGHLIGHTS &amp; USPs
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
