import { useState } from 'react'

// ─── iPad Mockup Component ──────────────────────────────────────────────────
function IPadMockup({ className = '', size = 'lg', src = '/lockscreen.png', alt = 'iPad screen' }) {
  const sizes = {
    sm: 'max-w-[100px]',
    md: 'max-w-[200px]',
    lg: 'max-w-[320px]',
  }
  return (
    <div className={`${sizes[size]} w-full mx-auto ${className}`}>
      <div className="relative bg-[#1a1a1a] rounded-[2rem] p-[3%] shadow-[0_0_0_2px_#333,0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Camera notch */}
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#2a2a2a] border border-[#333] z-10" />
        {/* Screen bezel */}
        <div className="relative bg-black rounded-[1.4rem] overflow-hidden">
          {/* Screen reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent z-10 pointer-events-none rounded-[1.4rem]" />
          <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        </div>
        {/* Bottom edge detail */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[12%] h-[3px] rounded-full bg-[#333]" />
      </div>
    </div>
  )
}

// ─── iPad Home Screen Mockup ────────────────────────────────────────────────
function IPadHomeScreen({ className = '', size = 'lg' }) {
  const sizes = {
    sm: 'max-w-[100px]',
    md: 'max-w-[200px]',
    lg: 'max-w-[320px]',
  }
  const apps = [
    { name: 'Slack', color: '#4A154B', letter: 'S' },
    { name: 'Trane', color: '#E31837', letter: 'T' },
    { name: 'Camera', color: '#6B7280', letter: '📷' },
    { name: 'Calculator', color: '#F97316', letter: '+' },
    { name: 'Bluon', color: '#1E40AF', letter: 'B' },
    { name: 'LennoxPros', color: '#111827', letter: 'L' },
    { name: 'CE HVAC', color: '#1F2937', letter: 'CE' },
    { name: 'Milwaukee', color: '#DC2626', letter: 'M' },
    { name: 'CoolCloud', color: '#2563EB', letter: 'C' },
    { name: 'Ruud', color: '#374151', letter: 'R' },
  ]
  const dock = [
    { name: 'ServiceTitan', color: '#1F2937', letter: '⚙' },
    { name: 'Maps', color: '#34D399', letter: '📍' },
    { name: 'Chrome', color: '#FBBF24', letter: '🌐' },
    { name: 'ChatGPT', color: '#111827', letter: 'AI' },
  ]
  return (
    <div className={`${sizes[size]} w-full mx-auto ${className}`}>
      <div className="relative bg-[#1a1a1a] rounded-[2rem] p-[3%] shadow-[0_0_0_2px_#333,0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#2a2a2a] border border-[#333] z-10" />
        <div className="relative bg-black rounded-[1.4rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent z-10 pointer-events-none rounded-[1.4rem]" />
          {/* Home screen content */}
          <div className="aspect-[3/4] p-[8%] flex flex-col justify-between">
            {/* App grid */}
            <div className="grid grid-cols-5 gap-[6%] mt-[5%]">
              {apps.map((app, i) => (
                <div key={i} className="flex flex-col items-center gap-[3px]">
                  <div className="w-full aspect-square rounded-[22%] flex items-center justify-center text-white font-bold" style={{ backgroundColor: app.color, fontSize: 'clamp(6px, 2.5vw, 11px)' }}>
                    {app.letter}
                  </div>
                  <span className="text-white/70 truncate w-full text-center" style={{ fontSize: 'clamp(4px, 1.5vw, 7px)' }}>{app.name}</span>
                </div>
              ))}
            </div>
            {/* Spacer */}
            <div className="flex-1" />
            {/* Dock */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[16%] p-[4%] mt-auto">
              <div className="grid grid-cols-4 gap-[8%]">
                {dock.map((app, i) => (
                  <div key={i} className="flex flex-col items-center gap-[2px]">
                    <div className="w-full aspect-square rounded-[22%] flex items-center justify-center text-white font-bold" style={{ backgroundColor: app.color, fontSize: 'clamp(6px, 2.5vw, 11px)' }}>
                      {app.letter}
                    </div>
                    <span className="text-white/70 truncate w-full text-center" style={{ fontSize: 'clamp(3px, 1.2vw, 6px)' }}>{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[12%] h-[3px] rounded-full bg-[#333]" />
      </div>
    </div>
  )
}

// ─── Icons (inline SVGs for zero dependencies) ─────────────────────────────
const IconShield = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)
const IconDevice = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)
const IconLock = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
)
const IconWrench = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.08a2.25 2.25 0 010-3.18l.59-.59a2.25 2.25 0 013.18 0l4.08 4.08m-4.08-4.08l7.14-3.57m-7.14 3.57l3.57 7.14m7.14-3.57l5.1 5.1a2.121 2.121 0 01-3 3l-5.1-5.1m0 0l-3.57-7.14" />
  </svg>
)
const IconCheck = () => (
  <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)
const IconChevron = ({ open }) => (
  <svg className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)
const IconMapPin = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)
const IconStar = () => (
  <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Services', href: '#pricing' },
    { label: 'Case Study', href: '#casestudy' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            Fleet<span className="text-orange">Ready</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="bg-orange hover:bg-orange-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Free Assessment
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              }
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2 text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block bg-orange text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold mt-2">
            Free Assessment
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <IconMapPin />
              Serving DFW from Flower Mound
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              We Manage Your Business Devices{' '}
              <span className="text-orange">So You Don't Have To</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              iPad, iPhone, Mac & Android setup for DFW small businesses. No IT department. No Apple IDs for your crew. Just devices that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 text-center shadow-lg shadow-orange/25">
                Start Enrollment
              </a>
              <a href="#calculator" className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all text-center">
                Get an Estimate
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <IconCheck /> No contracts
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck /> Local to DFW
              </span>
            </div>
          </div>
          <div className="relative flex justify-center">
            <IPadMockup size="lg" src="/ipad-screen.png" alt="iPad showing managed home screen with business apps configured by FleetReady MDM" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Lock Screen Feature ────────────────────────────────────────────────────
function LockScreenFeature() {
  return (
    <section className="bg-orange relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">Optional Feature</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Turn Every Device Into a Marketing Tool
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Want a custom lock screen on every device? We can set it up. You provide your logo, branding, and a QR code link — we configure and push it to every device in your fleet.
            </p>
            <p className="text-white/75 text-base leading-relaxed mb-6">
              Popular use: a QR code that sends customers straight to your Google review page. Passive, always-on, zero effort after setup.
            </p>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold text-lg italic">
                "Our HVAC client saw technician review rates jump after deployment."
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <IPadMockup size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Physical Setup Feature ─────────────────────────────────────────────────
function PhysicalSetup() {
  const features = [
    {
      title: 'Physical Asset Labels',
      desc: 'Every device gets a label with its serial number, employee name, barcode, QR code, or whatever identifier your business needs. Pick it up, know exactly what it is.',
      optional: false,
    },
    {
      title: 'Cases & Screen Protectors',
      desc: 'Send us the cases and screen protectors before pickup and we\'ll install them while we have the devices. They arrive fully protected and ready to hand out.',
      optional: true,
      note: 'You provide the cases/accessories',
    },
    {
      title: 'Hand-Ready Delivery',
      desc: 'Every device comes back enrolled, labeled, protected, and configured. Your team just picks one up and gets to work — no IT setup, no Apple IDs, nothing to figure out.',
      optional: false,
    },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">White-Glove Deployment</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Devices Ready to Hand Straight to Your Team</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">While we have your devices, we can do more than just enroll them. Every device can leave fully labeled, protected, and ready — no assembly required on your end.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-light rounded-2xl p-8 border border-gray-medium relative">
              {f.optional && (
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-light text-orange">Optional</span>
              )}
              <h3 className="text-lg font-bold text-navy mb-3 pr-16">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              {f.note && (
                <p className="mt-3 text-xs font-semibold text-orange bg-orange-light rounded-lg px-3 py-2">{f.note}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">Have specific labeling or packaging requirements? Mention it when you get in touch and we'll work it out.</p>
      </div>
    </section>
  )
}

// ─── Pain Points ────────────────────────────────────────────────────────────
const IconDownload = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

function PainPoints() {
  const cards = [
    { icon: <IconDevice />, color: 'bg-blue-50 text-blue-600', headline: 'Employees using company iPads for personal stuff?', text: 'Lock devices down to only the apps and features your business needs. No Netflix. No games. Just work.' },
    { icon: <IconShield />, color: 'bg-red-50 text-red-500', headline: 'Lost or stolen device with no way to wipe it remotely?', text: 'One click and the device is wiped clean. No company data left behind. Ever.' },
    { icon: <IconLock />, color: 'bg-amber-50 text-amber-600', headline: 'Handing out phones with zero control over what\'s on them?', text: 'Every device is configured, monitored, and managed from day one. You stay in control.' },
    { icon: <IconDownload />, color: 'bg-purple-50 text-purple-600', headline: 'Tired of dealing with Apple ID and app download headaches?', text: 'We eliminate Apple IDs entirely. Apps are pushed silently to every device. No logins, no passwords, no calls from confused employees.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Common iPad & Device Management Challenges</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">These are the problems every DFW small business hits when they hand out devices without a plan.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-gray-light border border-gray-medium rounded-2xl p-7 hover:border-orange/40 hover:shadow-lg transition-all group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${c.color} group-hover:bg-orange/10 group-hover:text-orange transition-colors`}>
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{c.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ───────────────────────────────────────────────────────────
function StepFeatures({ items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="text-sm text-orange font-semibold flex items-center gap-1 hover:text-orange-light transition-colors"
      >
        {open ? 'Hide details' : "What's included"}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <ul className="mt-3 space-y-2 bg-white/5 border border-white/10 rounded-xl p-4">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/70 items-start">
              <IconCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function HowItWorksAndPricing() {
  const steps = [
    {
      num: '1',
      title: 'Apple Business Manager Verification',
      price: 'Included',
      priceLabel: '1–5 business days',
      badge: null,
      desc: 'Requires a DUNS number and Apple verification. We can handle the application for you, or you can complete it yourself and come to us once approved. Must be completed before any devices are enrolled.',
      items: null,
    },
    {
      num: '2',
      title: 'We Build Your System',
      price: '$750',
      priceLabel: 'one-time',
      badge: 'One-Time',
      desc: 'MDM platform configured, app library set up, device policies created. Optional: custom lock screen configured if you provide your branding.',
      items: [
        'Apple Business Manager setup',
        'MDM platform configuration (SimpleMDM)',
        'Device policies and restrictions configured',
        'App library configured',
        'Optional: custom lock screen (you provide the branding)',
        'All pickup/dropoff trips free within 20 mi of Flower Mound',
      ],
    },
    {
      num: '3',
      title: 'We Pick Up Your Devices',
      price: 'Free within 20 mi',
      priceLabel: null,
      badge: null,
      desc: "We come to you — every time. All pickup and dropoff trips for device setup are free within 20 miles of Flower Mound. Outside that? We'll quote a travel fee, but we'll still come.",
      items: null,
    },
    {
      num: '4',
      title: 'Every Device Enrolled & Ready',
      price: '$45',
      priceLabel: 'per device',
      badge: 'Per Device',
      desc: 'Each device wiped, enrolled via ADE, apps pushed silently, serial-number labeled, and tested.',
      items: [
        'Device wiped or unboxed',
        'Auto-enrolled via ADE — no Apple ID needed for end users',
        'Apps pushed silently',
        'Custom lock screen applied (if opted in)',
        'Serial number labeled & verified in MDM',
        'Asset labels, cases & screen protectors installed (if requested)',
      ],
    },
    {
      num: '5',
      title: 'We Handle Everything',
      price: '$12',
      priceLabel: 'per device/mo — MDM subscription included',
      badge: 'Monthly',
      desc: "Need to lock a device, push an app, wipe a phone, or onboard a new hire? Just text or call us — we take care of it. You never have to log into a dashboard.",
      items: [
        'MDM platform subscription included — no separate platform fee',
        'Just text or call — we action it for you',
        'Remote lock, wipe & passcode reset',
        'App pushes & updates on demand',
        'Location tracking',
        'New employee onboarding support',
        'Email/text support — real person, no tickets',
      ],
    },
  ]
  return (
    <section id="pricing" className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How It Works — and What It Costs</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Five steps from setup to full device control, with transparent pricing at every stage.</p>
        </div>
        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-white/15" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 ring-2 ring-white/10 relative z-10">
                  <span className="text-sm font-black text-orange">{s.num}</span>
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                    <h3 className="text-white font-bold text-base leading-snug">{s.title}</h3>
                    <span className="inline-flex items-baseline gap-1.5">
                      <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${s.badge ? 'bg-orange/15 text-orange' : 'bg-white/10 text-orange'}`}>{s.price}</span>
                      {s.priceLabel && <span className="text-white/35 text-xs">{s.priceLabel}</span>}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  {s.items && <StepFeatures items={s.items} />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/30 text-xs mt-10 text-center">* Apple Business Manager verification timeline is controlled by Apple and varies by business. We handle the application process for you, or you can complete it yourself before coming to us.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative mt-16">
        <PricingCalculator />
      </div>
    </section>
  )
}

// ─── Remote Capabilities ────────────────────────────────────────────────────
function RemoteCapabilities() {
  const capabilities = [
    { icon: '📲', label: 'Push Apps & Media', desc: 'Install apps on any device instantly, no Apple ID needed' },
    { icon: '🔒', label: 'Remote Lock', desc: 'Lock a device immediately from anywhere' },
    { icon: '🧹', label: 'Full Remote Wipe', desc: 'Erase all data in seconds if a device is lost or stolen' },
    { icon: '🔑', label: 'Clear Passcode', desc: 'Reset a forgotten passcode without touching the device' },
    { icon: '📍', label: 'Enable Lost Mode', desc: 'Track location and display a custom message on screen' },
    { icon: '🛡️', label: 'Disable Activation Lock', desc: 'Remove activation lock so devices can be reassigned' },
    { icon: '📋', label: 'Device Inventory', desc: 'See real-time status, storage, battery, and OS version' },
    { icon: '🔄', label: 'Remote Restart', desc: 'Restart or shut down devices without being there' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-navy/10 text-navy text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">Full Remote Control</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Remote Device Management Capabilities</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every device you enroll gets the full suite of remote management tools. Here's what's at your fingertips. No device pickup required.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((c, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-light rounded-xl p-4 border border-gray-medium hover:border-orange/40 hover:shadow-md transition-all group">
              <span className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</span>
              <div>
                <h4 className="font-bold text-navy text-sm group-hover:text-orange transition-colors">{c.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">On the management plan, you never have to touch any of this yourself. Just text or call us and we'll handle it — same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block bg-orange hover:bg-orange-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange/25">
              Get a Free Assessment
            </a>
            <a href="#pricing" className="inline-block bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-xl font-bold transition-all border border-navy-light">
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Case Study ─────────────────────────────────────────────────────────────
function CaseStudy() {
  const stats = [
    { num: '30', label: 'iPads Deployed' },
    { num: '4', label: 'Delivery Phases' },
    { num: '0', label: 'Apple IDs Required' },
    { num: '$2,100', label: 'Total Upfront Cost' },
  ]

  return (
    <section id="casestudy" className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange/15 text-orange text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">Case Study</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Christmas Air Conditioning & Plumbing</h2>
          <p className="text-white/50 text-lg">30 iPads deployed for field technicians in Flower Mound, TX</p>
        </div>

        {/* Stat cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-orange text-3xl sm:text-4xl font-black mb-1">{s.num}</div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column: Story + Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Story */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
            <p className="text-white/70 leading-relaxed">
              Christmas Air Conditioning & Plumbing needed 30 iPads set up for their field technicians. Each one locked down with company apps, restricted settings, custom lock screens, and full remote management. Devices came in across four separate phases as inventory became available.
            </p>
            <h3 className="text-xl font-bold text-white mb-2 pt-2">What FleetReady Delivered</h3>
            <ul className="space-y-3">
              {[
                'Built the full MDM system from scratch: Apple Business Manager, SimpleMDM, device policies',
                'Designed a custom lock screen with company logo and QR code linking to their Google review page',
                'Picked up, enrolled, and configured each batch of iPads same-day as they arrived',
                'Labeled every iPad with its serial number and verified each device in MDM',
                'Installed all company apps silently, no Apple ID needed for any technician',
                'Hands-on training for ownership on the MDM dashboard, remote lock/wipe, and new hire onboarding',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-white/70 text-sm">
                  <IconCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost Breakdown */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">Project Cost Breakdown</h3>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-white font-medium text-sm">System Setup</p>
                    <p className="text-white/40 text-xs">ABM + MDM + lock screen + policies</p>
                  </div>
                  <span className="font-bold text-white text-lg">$750</span>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-white font-medium text-sm">Device Enrollment</p>
                    <p className="text-white/40 text-xs">30 devices @ $45, enrolled, labeled, configured</p>
                  </div>
                  <span className="font-bold text-white text-lg">$1,350</span>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-white font-medium text-sm">Monthly Management</p>
                    <p className="text-white/40 text-xs">30 devices @ $12/mo, ongoing remote control</p>
                  </div>
                  <span className="font-bold text-white text-lg">$360<span className="text-sm text-white/50">/mo</span></span>
                </div>
              </div>
              <div className="border-t border-orange/30 mt-6 pt-6 flex justify-between items-baseline">
                <span className="font-bold text-white text-lg">Total Upfront</span>
                <span className="font-black text-orange text-3xl">$2,100</span>
              </div>
              <p className="text-white/30 text-xs mt-3 text-right">+ $360/mo ongoing management</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-orange rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/10 text-[120px] font-serif leading-none pointer-events-none select-none" aria-hidden="true">"</div>
          <div className="relative">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <IconStar key={i} />)}
            </div>
            <p className="text-white text-xl sm:text-2xl font-semibold italic leading-relaxed mb-6 max-w-3xl">
              "FleetReady handled everything in batches as we got the iPads in. Every one came back labeled, locked down, and ready to hand to a tech. We didn't touch a thing."
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">ST</div>
                <div>
                  <p className="text-white font-bold">Scott Titensor</p>
                  <p className="text-white/70 text-sm">President, Christmas Air Conditioning & Plumbing</p>
                </div>
              </div>
              <a href="#contact" className="bg-white text-orange px-8 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all text-center flex-shrink-0 shadow-lg">
                Get a Free Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing Calculator ─────────────────────────────────────────────────────
function PricingCalculator() {
  const [devices, setDevices] = useState(10)
  const [months, setMonths] = useState(12)
  const setup = 750
  const perDevice = 45
  const perMonth = 12

  const enrollmentCost = devices * perDevice
  const managementCost = devices * perMonth
  const totalMonthly = managementCost
  const totalUpfront = setup + enrollmentCost
  const totalOverTime = totalMonthly * months

  return (
    <div id="calculator" className="mt-16 max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-navy/10 shadow-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
            <IconWrench />
            Pricing Calculator
          </div>
          <h3 className="text-2xl font-black text-navy">See What Your Fleet Would Cost</h3>
        </div>
        {/* Sliders + Inputs */}
        <div className="space-y-8 mb-8">
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-sm font-semibold text-navy">Number of Devices</label>
              <input
                type="number"
                min="1"
                max="500"
                value={devices}
                onChange={(e) => setDevices(Math.max(1, Math.min(500, Number(e.target.value) || 1)))}
                className="w-20 text-right text-2xl font-black text-orange bg-transparent border-b-2 border-orange/40 focus:border-orange outline-none"
              />
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={Math.min(devices, 100)}
              onChange={(e) => setDevices(Number(e.target.value))}
              className="w-full h-2 bg-gray-medium rounded-full appearance-none cursor-pointer accent-orange"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100+</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-sm font-semibold text-navy">Months of Management</label>
              <input
                type="number"
                min="1"
                max="120"
                value={months}
                onChange={(e) => setMonths(Math.max(1, Math.min(120, Number(e.target.value) || 1)))}
                className="w-20 text-right text-2xl font-black text-orange bg-transparent border-b-2 border-orange/40 focus:border-orange outline-none"
              />
            </div>
            <input
              type="range"
              min="1"
              max="24"
              value={Math.min(months, 24)}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-2 bg-gray-medium rounded-full appearance-none cursor-pointer accent-orange"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 mo</span>
              <span>6 mo</span>
              <span>12 mo</span>
              <span>18 mo</span>
              <span>24+ mo</span>
            </div>
          </div>
        </div>
        {/* Results */}
        <div className="bg-gray-light rounded-xl p-6 space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>System setup (one-time)</span>
            <span className="font-semibold text-navy">${setup.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{devices} device{devices !== 1 ? 's' : ''} enrolled @ $45 each</span>
            <span className="font-semibold text-navy">${enrollmentCost.toLocaleString()}</span>
          </div>
          <div className="border-t border-navy/10 pt-3 flex justify-between">
            <span className="font-bold text-navy">Total upfront</span>
            <span className="font-black text-navy text-lg">${totalUpfront.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 pt-2">
            <span>Our management ({devices} x ${perMonth}/mo)</span>
            <span className="font-semibold text-navy">${managementCost.toLocaleString()}/mo</span>
          </div>
          <div className="flex justify-between text-sm text-navy font-medium border-t border-navy/10 pt-2">
            <span>Total monthly cost</span>
            <span>${totalMonthly.toLocaleString()}/mo</span>
          </div>
          <div className="border-t border-orange/30 pt-3 mt-2 flex justify-between bg-orange/5 -mx-6 px-6 py-4 rounded-b-xl">
            <span className="font-bold text-navy text-lg">Total over {months} month{months !== 1 ? 's' : ''}</span>
            <span className="font-black text-orange text-2xl">~${(totalUpfront + totalOverTime).toLocaleString()}</span>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-3 text-center">MDM platform subscription included in the $12/device/mo management fee. No separate platform charges.</p>
        <div className="text-center mt-6">
          <a href="#contact" className="inline-block bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-orange/25">
            Get a Free Assessment
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const faqs = [
    { q: 'What is Apple Business Manager and do I need it?', a: "Yes — Apple Business Manager (ABM) is a mandatory first step. No Apple devices can be enrolled into MDM without it. You have two options: we can handle the entire ABM application for you if you provide your business details (DUNS number, business info), or you can complete it yourself and come to us once Apple approves it. Apple's verification process takes a few business days regardless of who handles it, so the sooner it's started the better." },
    { q: 'Do my employees need Apple IDs?', a: "No. That's one of the biggest advantages of our setup. Using Apple Business Manager and Automated Device Enrollment, we configure every device so employees never need a personal Apple ID. Apps are pushed silently from your business account." },
    { q: 'What happens if a device is lost or stolen?', a: 'You contact us and we remotely wipe it immediately. No data left on the device. We can also lock it and display a custom message if you want to give the employee a chance to return it first.' },
    { q: 'Can I add more devices later?', a: "Absolutely. Once your system is set up, adding a new device is just $45. We can pick it up or walk you through enrolling it remotely." },
    { q: 'What MDM software do you use?', a: "We primarily use SimpleMDM, which is built specifically for Apple device fleets. For Android, we use Google's Android Enterprise. You'll have your own dashboard login so you can see all your devices in one place." },
    { q: 'Do I need to be technical to use this?', a: "Not at all. Day-to-day, your devices just work. If you need to lock or wipe something, you text or call us and we handle it. The monthly management plan means you never have to think about it." },
    { q: 'How long does setup take?', a: 'System setup (ABM + MDM configuration + policies) takes 2 to 3 business days. Device deployment is typically done same-day or next-day once we have the devices. If you want a custom lock screen, have your branding ready before setup and we\'ll configure it at the same time.' },
    { q: 'Are there any other monthly costs?', a: "On our management plan, no — the $12/device/month covers everything, including the SimpleMDM platform subscription. If you ever cancel our management plan, you'd need to pay SimpleMDM directly to keep your devices enrolled, which runs $2–$4/device/month depending on their plan. As long as you're with us, that cost is covered." },
    { q: 'Is there a contract?', a: 'No long-term contracts. Monthly management is month-to-month. Cancel anytime with 30 days notice.' },
    { q: 'What areas do you serve?', a: "We're based in Flower Mound and serve the entire DFW metroplex. All device setup trips — including any additional pickups after your initial deployment — are free within 20 miles. No per-trip charges, no surprise fees. Need us outside that radius? We'll still make the trip, just ask and we'll give you a travel quote." },
    { q: 'What if a device breaks or needs a hardware repair?', a: 'We handle MDM and software. Hardware repairs go through Apple or your carrier. But we can help you re-enroll and reconfigure a repaired or replacement device.' },
    { q: 'Can you set up a custom lock screen with a QR code?', a: "Yes, it's an optional feature. You provide your logo, branding, and the link you want the QR code to point to — most clients use their Google Business review page. We configure and push the lock screen to every device in your fleet. We don't design the artwork, but once you have your assets ready, we handle the rest." },
    { q: 'Can you physically label and prep devices while you have them?', a: "Yes. While we have your devices we can apply physical labels — serial numbers, employee names, barcodes, QR codes, asset tags, whatever you need to tell them apart. If you want cases or screen protectors installed, send them to us before pickup and we'll put everything together. Devices come back enrolled, labeled, protected, and ready to hand straight to your team." },
  ]
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">MDM & Device Management FAQ</h2>
          <p className="text-gray-500 text-lg">Got questions about mobile device management? We've got answers.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-medium rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-light/50 transition-colors"
              >
                <span className="font-semibold text-navy pr-4">{f.q}</span>
                <IconChevron open={openIdx === i} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Local ──────────────────────────────────────────────────────────────
function WhyLocal() {
  const cities = ['Flower Mound', 'Lewisville', 'Southlake', 'Grapevine', 'Keller', 'Coppell', 'Carrollton', 'Argyle', 'Roanoke', 'Trophy Club', 'Irving', 'Denton']
  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <div className="w-16 h-16 bg-orange/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <IconMapPin />
          <span className="sr-only">Location</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
          Local IT Device Management in DFW — Not a Help Desk in Another State
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          FleetReady is based in Flower Mound. We pick up your devices, deploy them, and we're real people you can text. No tickets. No hold music. No offshore support.
        </p>
        <div className="inline-flex items-center gap-3 bg-orange/15 border border-orange/30 rounded-2xl px-6 py-4 mb-10">
          <IconMapPin />
          <p className="text-white text-sm text-left leading-snug">
            <span className="font-bold text-orange block">Free pickup & dropoff — every trip</span>
            Every device setup trip is on us within 20 miles. Adding devices later? Still free. Outside 20 miles? We'll still come — just ask for a travel quote.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map(c => (
            <span key={c} className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-orange/40 hover:text-orange transition-colors">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact Form ───────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)
    try {
      await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-navy mb-4">We Got Your Message!</h2>
          <p className="text-gray-500 text-lg">We'll get back to you within 1 business day. If it's urgent, give us a call.</p>
        </div>
      </section>
    )
  }

  const [intent, setIntent] = useState(null)

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 text-lg">Pick the option that fits where you're at.</p>
        </div>

        {/* Dual funnel selector */}
        {!intent && (
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button onClick={() => setIntent('learn')} className="bg-white rounded-2xl p-8 border-2 border-gray-medium hover:border-orange/60 hover:shadow-xl transition-all text-left group">
              <div className="w-14 h-14 bg-orange-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                <svg className="w-7 h-7 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Free Device Assessment</h3>
              <p className="text-gray-500 text-sm">Not sure what you need yet? Tell us about your setup and we'll put together a plan and quote for you. No commitment.</p>
            </button>
            <button onClick={() => setIntent('signup')} className="bg-navy rounded-2xl p-8 border-2 border-orange hover:shadow-xl transition-all text-left group relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Fastest</div>
              <div className="w-14 h-14 bg-orange/15 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sign Up Now</h3>
              <p className="text-white/60 text-sm">Ready to go? Let's get your system set up. We'll start the Apple Business Manager process right away and get your devices in the queue.</p>
            </button>
          </div>
        )}

        {/* Form (shown after selecting intent) */}
        {intent && (
          <div className="max-w-2xl mx-auto">
            <button onClick={() => setIntent(null)} className="text-gray-400 hover:text-navy text-sm mb-6 flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              Back to options
            </button>
            <div className={`rounded-xl px-5 py-3 mb-6 text-sm font-medium ${intent === 'signup' ? 'bg-navy text-orange' : 'bg-orange-light text-orange'}`}>
              {intent === 'signup' ? "Let's get you set up. We'll reach out within 1 business day to kick things off." : "No commitment. We'll review your setup and send you a custom plan and quote."}
            </div>
            <form action="https://formspree.io/f/mojnzeae" method="POST" onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-medium space-y-6">
              <input type="hidden" name="intent" value={intent === 'signup' ? 'Sign Up' : 'Free Assessment'} />
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy" />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-navy mb-2">Business Name *</label>
                  <input type="text" id="business" name="business" required className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="devices" className="block text-sm font-semibold text-navy mb-2">Number of Devices</label>
                  <select id="devices" name="devices" className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy bg-white">
                    <option value="">Select...</option>
                    <option value="1-5">1-5</option>
                    <option value="6-15">6-15</option>
                    <option value="16-30">16-30</option>
                    <option value="30+">30+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="source" className="block text-sm font-semibold text-navy mb-2">How did you hear about us?</label>
                  <select id="source" name="source" className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy bg-white">
                    <option value="">Select...</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Device Types</label>
                <div className="flex flex-wrap gap-4">
                  {['iPads', 'iPhones', 'Androids', 'Macs', 'Mixed'].map(t => (
                    <label key={t} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="checkbox" name="device_types" value={t} className="w-4 h-4 rounded border-gray-medium text-orange focus:ring-orange" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-navy mb-2">Anything else we should know?</label>
                <textarea id="notes" name="notes" rows={3} className="w-full px-4 py-3 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-navy resize-none" placeholder="Tell us about your situation..." />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full disabled:opacity-60 text-white py-4 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] shadow-lg ${intent === 'signup' ? 'bg-navy hover:bg-navy-light shadow-navy/25' : 'bg-orange hover:bg-orange-hover shadow-orange/25'}`}
              >
                {loading ? 'Sending...' : intent === 'signup' ? "Let's Go" : 'Request My Free Assessment'}
              </button>
              <p className="text-center text-gray-400 text-xs">We'll never share your info. Response within 1 business day.</p>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy-dark py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-xl mb-2">
              Fleet<span className="text-orange">Ready</span> MDM
            </div>
            <p className="text-white/50 text-sm">Device Setup & Management for DFW Small Businesses</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-white/50 text-sm">
              <a href="tel:8174054799" className="block hover:text-orange transition-colors">(817) 405-4799</a>
              <a href="#contact" className="block hover:text-orange transition-colors">Get in Touch</a>
              <p>Flower Mound, TX</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2 text-white/50 text-sm">
              <a href="#pricing" className="block hover:text-orange transition-colors">Pricing</a>
              <a href="#faq" className="block hover:text-orange transition-colors">FAQ</a>
              <a href="#contact" className="block hover:text-orange transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">Serving the DFW Metroplex from Flower Mound, TX</p>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span>&copy; {new Date().getFullYear()} FleetReady MDM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Mobile Call Button ─────────────────────────────────────────────────────
function MobileCallButton() {
  return (
    <a href="tel:8174054799" className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-orange text-white text-center py-4 font-bold text-lg flex items-center justify-center gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <IconPhone /> Call Us Now
    </a>
  )
}

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LockScreenFeature />
      <PhysicalSetup />
      <PainPoints />
      <HowItWorksAndPricing />
      <RemoteCapabilities />
      <CaseStudy />
      <ContactForm />
      <WhyLocal />
      <FAQ />
      <Footer />
      <MobileCallButton />
      {/* Spacer for mobile call button */}
      <div className="h-16 md:hidden" />
    </>
  )
}
