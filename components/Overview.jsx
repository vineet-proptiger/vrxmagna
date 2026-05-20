'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

/* Arc icon — same golden arc visible above the section title */
const ArcIcon = () => (
  <svg
    width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle', marginBottom: '3px' }}
  >
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    { top: '-1px', left: '-1px',
      borderRight: '1px solid #D5C2A8',
      borderBottom: '1px solid #D5C2A8',
      borderBottomRightRadius: '18px' },
    // top-right → curve goes bottom-left
    { top: '-1px', right: '-1px',
      borderLeft: '1px solid #D5C2A8',
      borderBottom: '1px solid #D5C2A8',
      borderBottomLeftRadius: '18px' },
    // bottom-left → curve goes top-right
    { bottom: '-1px', left: '-1px',
      borderRight: '1px solid #D5C2A8',
      borderTop: '1px solid #D5C2A8',
      borderTopRightRadius: '18px' },
    // bottom-right → curve goes top-left
    { bottom: '-1px', right: '-1px',
      borderLeft: '1px solid #D5C2A8',
      borderTop: '1px solid #D5C2A8',
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

const infoItems = [
  { label: 'LOCATION',   value: 'THIRUMAZHISAI, CHENNAI' },
  { label: 'TYPE',       value: 'STUDIO, 1 BHK & 2 BHK'  },
  { label: 'PRICE',      value: 'FROM ₹35 LAKHS'          },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="px-4 sm:px-8" style={{
      maxWidth: '860px', margin: '0 auto',
      textAlign: 'justify',
    }}>

      {/* ── Section Heading ── */}
      <div style={{ marginBottom: '32px' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.22em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ArcIcon />
          PROJECT OVERVIEW
        </h2>
      </div>

      {/* ── Paragraphs ── */}
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="80">
        Vijay Raja Homes introduces VRX Magna, a thoughtfully envisioned residential enclave located in the rapidly developing neighbourhood of Thirumazhisai, Chennai. Designed as a contemporary lifestyle address, the project integrates smart living solutions, efficient space planning, and expansive green environments to create a well-balanced urban community.
      </p>
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="100">
        Set across 6.5 acres with nearly 76% open space, VRX Magna offers intelligently designed Studio, 1 BHK, and 2 BHK homes that prioritise comfort, ventilation, and functionality. The architecture blends modern aesthetics with practical layouts, ensuring homes that feel open, bright, and future-ready.
      </p>
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: '28px', marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="120">
        With over 100 curated amenities, landscaped greens, and community-focused spaces, the development delivers a vibrant yet secure living experience. Positioned along a high-growth infrastructure corridor, VRX Magna presents a compelling opportunity for both first-time homeowners and investors seeking long-term appreciation in Chennai&rsquo;s expanding western belt.
      </p>

      {/* ── RERA ── */}
      <p style={{
        fontFamily: F_SANS, fontSize: '13.5px', color: '#3A2A0E',
        margin: '0 0 52px', lineHeight: 1.7,
        letterSpacing: '0.01em',
      }} data-aos="fade-up" data-aos-delay="140">
        <strong style={{ fontFamily: F_JOST, letterSpacing: '0.06em', fontWeight: '700' }}>
          RERA NO:
        </strong>{' '}
        TN/02/Building/0036/2021
      </p>

      {/* ── Info Box — thin border + L-shaped corner brackets ── */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          position: 'relative',
          border: '1px solid #D5C2A8',
          maxWidth: '780px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <CurvedCorners />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: '#D5C2A8' }}>
        {infoItems.map((item, i) => (
          <div key={i} className="bg-white" style={{
            padding: '26px 20px',
            textAlign: 'justify',
          }}>
            {/* Label */}
            <p style={{
              fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
              color: '#b5a99a', letterSpacing: '0.18em',
              textTransform: 'uppercase', margin: '0 0 8px',
            }}>
              {item.label}:
            </p>
            {/* Value */}
            <p style={{
              fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
              color: '#3A2A0E', letterSpacing: '0.08em',
              textTransform: 'uppercase', margin: 0,
            }}>
              {item.value}
            </p>
          </div>
        ))}
        </div>
      </div>

      {/* ── Request A Brochure CTA ── */}
      <div style={{ marginTop: '40px' }} data-aos="fade-up" data-aos-delay="260">
        <button
          onClick={() => setIsOpen && setIsOpen(true)}
          className="btn-brand"
          style={{ fontFamily: F_JOST, fontSize: '12px', letterSpacing: '0.16em' }}
        >
          Request A Brochure
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

    </div>
  </section>
)

export default Overview
