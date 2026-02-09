import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Target,
  ArrowLeft,
  Dna,
  Component,
  Layers,
  Diamond,
  Sword,
  Radar,
  Activity,
  Atom,
  Wifi,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
  Clock,
  Instagram,
  MessageCircle
} from 'lucide-react';
import Hero from './components/Hero';

// Professional Color Constants
const colors = {
  primaryYellow: '#F5C518',
  accentGold: '#D4A017',
  highlightYellow: '#FFD93D',
  charcoalDark: '#1A1A1A',
  charcoalDeep: '#0D0D0D',
  charcoalMedium: '#2D2D2D',
  charcoalLight: '#3D3D3D',
  textWhite: '#FFFFFF',
  textGrey: '#B0B0B0',
  textMuted: '#808080',
  energyGreen: '#39FF14'
};

// Reusable Section Footer Component
const SectionFooter = ({ isMobile }) => (
  <div style={{
    width: '100%',
    marginTop: isMobile ? '2rem' : '4rem',
    padding: isMobile ? '1.5rem' : '3rem',
    background: colors.charcoalDark,
    borderTop: 'none',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    textAlign: 'left'
  }}>
    {/* Connect With Us */}
    <div>
      <h3 style={{
        color: colors.primaryYellow,
        fontSize: isMobile ? '0.9rem' : '1.3rem',
        marginBottom: isMobile ? '0.6rem' : '1rem',
        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
        letterSpacing: '2px'
      }}>CONNECT WITH US</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.5rem' : '0.8rem' }}>
        <a href="https://wa.me/919101234567" target="_blank" rel="noopener noreferrer" style={{ color: colors.textWhite, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MessageCircle size={isMobile ? 14 : 18} color="#25D366" />
          <span style={{ fontSize: isMobile ? '0.65rem' : '0.9rem', fontFamily: "'Inter', sans-serif" }}>+91 91012 34567</span>
        </a>
        <a href="https://instagram.com/energym4.0_tinsukia" target="_blank" rel="noopener noreferrer" style={{ color: colors.textWhite, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Instagram size={isMobile ? 14 : 18} color={colors.textGrey} />
          <span style={{ fontSize: isMobile ? '0.65rem' : '0.9rem', fontFamily: "'Inter', sans-serif" }}>@energym4.0_tinsukia</span>
        </a>
        <div style={{ color: colors.textWhite, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Phone size={isMobile ? 14 : 18} color={colors.textGrey} />
          <span style={{ fontSize: isMobile ? '0.65rem' : '0.9rem', fontFamily: "'Inter', sans-serif" }}>+91 374 233 4567</span>
        </div>
      </div>
    </div>

    {/* Operational Hours */}
    <div>
      <h3 style={{
        color: colors.textWhite,
        fontSize: isMobile ? '0.9rem' : '1.3rem',
        marginBottom: isMobile ? '0.6rem' : '1rem',
        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
        letterSpacing: '2px'
      }}>OPERATIONAL HOURS</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.4rem' : '0.6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${colors.charcoalLight}`, paddingBottom: '0.4rem' }}>
          <span style={{ color: colors.textGrey, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isMobile ? '0.6rem' : '0.8rem' }}>MON - FRI</span>
          <span style={{ color: colors.textWhite, fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? '0.65rem' : '0.9rem' }}>05:30 AM - 10:00 PM</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${colors.charcoalLight}`, paddingBottom: '0.4rem' }}>
          <span style={{ color: colors.textGrey, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isMobile ? '0.6rem' : '0.8rem' }}>SATURDAY</span>
          <span style={{ color: colors.textWhite, fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? '0.65rem' : '0.9rem' }}>06:00 AM - 08:30 PM</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: colors.primaryYellow, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: isMobile ? '0.6rem' : '0.8rem' }}>SUNDAY</span>
          <span style={{ color: colors.primaryYellow, fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: isMobile ? '0.65rem' : '0.9rem' }}>CLOSED</span>
        </div>
      </div>
    </div>

    {/* Find Us */}
    <div>
      <h3 style={{
        color: colors.textWhite,
        fontSize: isMobile ? '0.9rem' : '1.3rem',
        marginBottom: isMobile ? '0.6rem' : '1rem',
        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
        letterSpacing: '2px'
      }}>FIND US</h3>
      <div style={{ color: colors.textWhite, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: isMobile ? '0.5rem' : '1rem' }}>
        <MapPin size={isMobile ? 14 : 18} color={colors.primaryYellow} style={{ flexShrink: 0, marginTop: '2px' }} />
        <address style={{ fontSize: isMobile ? '0.6rem' : '0.85rem', fontFamily: "'Inter', sans-serif", lineHeight: 1.4, fontStyle: 'normal', color: colors.textGrey }}>
          A.T. Road, Near Thana Chariali,<br />
          Above Style Baazar, Tinsukia
        </address>
      </div>
      <a
        href="https://maps.google.com/?q=Energym+4.0+Tinsukia+Assam"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
          background: colors.primaryYellow,
          color: colors.charcoalDeep,
          textDecoration: 'none',
          fontSize: isMobile ? '0.6rem' : '0.75rem',
          fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
          letterSpacing: '1px',
          fontWeight: 700
        }}
      >
        <MapPin size={isMobile ? 12 : 14} /> OPEN IN MAPS
      </a>
    </div>
    {/* Developer Credit */}
    <div style={{
      gridColumn: '1 / -1',
      textAlign: 'center',
      paddingTop: '2rem',
      marginTop: '2rem',
      borderTop: `1px solid ${colors.charcoalLight}`,
      color: colors.textGrey,
      fontSize: '0.8rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      Developed with <span style={{ color: '#ff0000' }}>❤️</span> by <a href="https://github.com/Harshit-Gogoi" target="_blank" rel="noopener noreferrer" style={{ color: colors.primaryYellow, textDecoration: 'none', fontWeight: 'bold' }}>Harshit Gogoi</a>
    </div>
  </div>
);

// --- Components ---

const TransformationSlider = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(20); // Default start 20%
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percent);
    };

    const handleUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => { setIsDragging(true); }}
      onTouchStart={() => setIsDragging(true)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '2px solid rgba(255,255,255,0.1)',
        cursor: isDragging ? 'ew-resize' : 'default',
        userSelect: 'none'
      }}
    >
      {/* Base Layer: BEFORE */}
      <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Overlay Layer: AFTER (Revealed via Scale Transform - GPU Optimized) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 2,
        transformOrigin: 'left',
        transform: `scaleX(${sliderPos / 100})`,
        willChange: 'transform',
        pointerEvents: 'none'
      }}>
        <img
          src={after}
          alt="After"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            maxWidth: 'none',
            transformOrigin: 'left',
            transform: `scaleX(${sliderPos > 0 ? 100 / sliderPos : 1000})`,
            willChange: 'transform'
          }}
        />
      </div>

      {/* "After" Label - Floating (Because inside overlay it would be squished) */}
      <div style={{
        position: 'absolute', top: '1rem', left: '1rem',
        background: 'rgba(255,215,0,0.8)', padding: '0.2rem 0.6rem', borderRadius: '4px',
        color: '#000', fontSize: '0.7rem', fontFamily: 'Oswald', fontWeight: 900,
        zIndex: 3, pointerEvents: 'none', opacity: sliderPos > 10 ? 1 : 0, transition: 'opacity 0.2s'
      }}>AFTER</div>

      {/* Background Label */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#fff', fontSize: '0.7rem', fontFamily: 'Oswald', zIndex: 1 }}>BEFORE</div>

      {/* Draggable Handle */}
      <div
        onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
        onTouchStart={() => setIsDragging(true)}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          width: '40px',
          marginLeft: '-20px',
          background: 'transparent',
          cursor: 'ew-resize',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          marginLeft: '-1.5px',
          width: '3px',
          background: 'var(--accent-yellow)'
        }} />

        <div style={{
          width: '40px',
          height: '40px',
          background: 'var(--accent-yellow)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(255,215,0,0.4)',
          flexShrink: 0,
          position: 'relative' // Ensure knob is above line
        }}>
          <div style={{ display: 'flex', gap: '2px' }}><div style={{ width: '2px', height: '15px', background: '#000' }} /><div style={{ width: '2px', height: '15px', background: '#000' }} /></div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#fff', fontFamily: 'Oswald', textAlign: 'center', zIndex: 11 }}>{label}</div>
    </div>
  );
};

const SectionContent = ({ id }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedEq, setSelectedEq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planSuccess, setPlanSuccess] = useState(false);

  const handlePlanSubmit = (e) => {
    e.preventDefault();
    setPlanSuccess(true);
    setSelectedPlan(null);
    setTimeout(() => setPlanSuccess(false), 3000);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  switch (id) {
    case 'about':
      return (
        <div style={{ color: '#fff', maxWidth: '1400px', width: '100%', padding: isMobile ? '0 0.5rem' : 0 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem', overflow: 'hidden' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '5rem', marginBottom: '0.5rem', color: colors.primaryYellow, textTransform: 'uppercase', letterSpacing: '2px' }}>
              We Are <span style={{ color: colors.textWhite }}>Energym</span>
            </h2>
            <p style={{ fontFamily: 'Oswald', fontSize: isMobile ? '0.9rem' : '1.5rem', color: colors.textGrey, letterSpacing: '4px', textTransform: 'uppercase' }}>
              Tinsukia's Premier Fitness Destination
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', marginBottom: '4rem', alignItems: 'center' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', borderLeft: `4px solid ${colors.energyGreen}` }}>
              <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', color: colors.textWhite, marginBottom: '1rem' }}>REAL <span style={{ color: colors.primaryYellow }}>RESULTS</span></h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: colors.textGrey, marginBottom: '1.5rem' }}>
                Established in 2024, Energym 4.0 is built for one purpose: to help you achieve your fitness goals. With over 15,000 sq ft of training space, we offer the best environment for serious training. No gimmicks, just iron and effort.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'Oswald', color: colors.primaryYellow }}>15K+</span>
                  <span style={{ fontSize: '0.8rem', color: '#fff', letterSpacing: '1px' }}>SQ FT SPACE</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'Oswald', color: colors.primaryYellow }}>450+</span>
                  <span style={{ fontSize: '0.8rem', color: '#fff', letterSpacing: '1px' }}>ACTIVE MEMBERS</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: Dna, title: 'BUILD STRENGTH', desc: 'Equipment designed for heavy lifting and bodybuilding.' },
                { icon: Target, title: 'EXPERT GUIDANCE', desc: 'Certified trainers to guide your form and progress.' },
                { icon: ShieldCheck, title: 'TOP QUALITY', desc: 'International standard machines and hygiene.' },
                { icon: Zap, title: 'GREAT VIBES', desc: 'A motivating atmosphere that pushes you harder.' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{ background: 'rgba(20,20,20,0.8)', padding: '2rem', borderRadius: '16px', border: '1px solid #333', textAlign: 'center' }}
                >
                  <item.icon size={40} color={colors.primaryYellow} style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'Oswald', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: colors.textGrey }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR STORY */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '1.5rem' : '3rem', color: colors.textWhite, marginBottom: '2rem', textAlign: 'center' }}>OUR <span style={{ color: colors.primaryYellow }}>STORY</span></h3>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: isMobile ? '1.5rem' : '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', lineHeight: '1.8', color: colors.textGrey, marginBottom: '1.5rem' }}>
                Energym started with a simple idea: Tinsukia needed a real gym. We saw that many places were too crowded or didn't have the right equipment. We wanted to change that.
              </p>
              <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', lineHeight: '1.8', color: colors.textGrey }}>
                We built Energym 4.0 to be a place where anyone—beginner or pro—can come and train seriously. We selected every machine and designed every corner to make sure you have everything you need. It's more than a gym; it's a community of people working to get better every day.
              </p>
            </div>
          </div>

          {/* OUR MISSION */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '1.5rem' : '3rem', color: colors.textWhite, marginBottom: '2rem', textAlign: 'center' }}>OUR <span style={{ color: colors.primaryYellow }}>MISSION</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
              {[
                { title: 'SUPPORT', desc: 'To provide a welcoming environment where you feel supported in your fitness journey.' },
                { title: 'IMPROVE', desc: 'To constantly upgrade our facility and bring the best fitness experience to our members.' },
                { title: 'COMMUNITY', desc: 'To build a strong community of fit and healthy individuals.' }
              ].map((mission, i) => (
                <div key={i} style={{ padding: '2rem', background: 'rgba(20,20,20,0.6)', borderRadius: '16px', borderTop: `4px solid ${colors.primaryYellow}`, textAlign: 'center' }}>
                  <h4 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', color: colors.textWhite, marginBottom: '1rem' }}>{mission.title}</h4>
                  <p style={{ color: colors.textGrey, fontSize: '0.95rem', lineHeight: '1.6' }}>{mission.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionFooter isMobile={isMobile} />
        </div>
      );
    case 'equipment':
      const equipmentData = [
        { title: 'TECHNOGYM PURE', desc: 'Italian precision engineering.', fullDesc: 'Our Technogym Pure Strength line offers the feeling of free weights with the safety of a machine. Optimized biomechanics ensure maximum muscle activation at every point of the range of motion.', specs: '12 UNITS', color: 'var(--primary-red)', img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800' },
        { title: 'ROGUE MONSTER RACKS', desc: 'Competition-grade power racks.', fullDesc: 'Built for serious lifters. featuring 3x3 inch 11-gauge steel uprights, 1-inch hardware, and unlimited attachment capabilities. Safe for squats, bench press, and rack pulls over 1000lbs.', specs: '6 RACKS', color: 'var(--lightning-blue)', img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800' },
        { title: 'BIO-FEEDBACK CARDIOS', desc: 'Heart-rate linked treadmills.', fullDesc: 'Stay in your zone. This equipment reads your biometrics in real-time to adjust resistance and incline suitable for your specific heart-rate zone goals. Integration with Apple Watch and Garmin.', specs: '25 UNITS', color: 'var(--accent-yellow)', img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800' },
        { title: 'ISO-LATERAL MACHINES', desc: 'Hammer Strength independent movement.', fullDesc: 'Correct imbalances with independent limb movement. These machines mimic natural body movement, converging and diverging axes for a complete contraction.', specs: '8 UNITS', color: 'var(--primary-red)', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
        { title: 'CABLE STATIONS', desc: 'Dual-stack adjustable crossovers.', fullDesc: 'Versatility meets precision. From tricep press-downs to woodchoppers, our cable stations offer constant tension and smooth pulleys for rehabilitation or isolation work.', specs: '4 STATIONS', color: 'var(--lightning-blue)', img: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=800' },
        { title: 'FREE WEIGHTS', desc: 'Rubber hex dumbbells & specialty bars.', fullDesc: 'The foundation of strength. Urethane-coated dumbells up to 150lbs, calibrated steel plates, and Olympic bars for powerlifting standard accuracy.', specs: '3000+ KG', color: 'var(--accent-yellow)', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800' }
      ];

      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '1.4rem' : '3rem', marginBottom: isMobile ? '0.5rem' : '1rem', color: 'var(--lightning-blue)' }}>
            KINETIC <span style={{ color: 'var(--accent-yellow)' }}>ARSENAL</span>
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', opacity: 0.6, marginBottom: '3rem', letterSpacing: '2px' }}>
            120+ MACHINES // INDUSTRIAL GRADE // BIO-MECHANICALLY PERFECT
          </p>

          {/* Equipment Stats - Moved Up */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
            {[
              { value: '40+', label: 'STRENGTH MACHINES', color: 'var(--primary-red)' },
              { value: '25+', label: 'CARDIO UNITS', color: 'var(--lightning-blue)' },
              { value: '6', label: 'POWER RACKS', color: 'var(--accent-yellow)' },
              { value: '3T+', label: 'FREE WEIGHTS', color: 'var(--primary-red)' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderBottom: `3px solid ${stat.color}` }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', color: stat.color, margin: 0 }}>{stat.value}</h3>
                <p style={{ fontSize: '0.7rem', opacity: 0.6, margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Detailed Equipment Cards */}
          <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>EQUIPMENT <span style={{ color: 'var(--accent-yellow)' }}>CATEGORIES</span></h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {equipmentData.map((eq, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                style={{
                  background: 'rgba(20,20,20,0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedEq(eq)}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={eq.img} alt={eq.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: eq.color, color: '#000', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                    {eq.specs}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Click for Details</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontFamily: 'Oswald', color: eq.color, fontSize: '1.3rem', marginBottom: '0.5rem' }}>{eq.title}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, flex: 1, marginBottom: '1rem', lineHeight: '1.5' }}>{eq.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionFooter isMobile={isMobile} />

          {/* Detail Pop-out Modal */}
          <AnimatePresence>
            {selectedEq && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEq(null)}
                style={{ position: 'fixed', inset: 0, background: isMobile ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: isMobile ? 'none' : 'blur(5px)' }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  style={{ background: '#111', borderRadius: '16px', overflow: 'hidden', maxWidth: '800px', width: '100%', border: `1px solid ${selectedEq.color}`, boxShadow: isMobile ? 'none' : `0 0 50px ${selectedEq.color}20`, position: 'relative' }}
                  onClick={e => e.stopPropagation()}
                >
                  <button onClick={() => setSelectedEq(null)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', zIndex: 2 }}>✕</button>
                  <div style={{ height: isMobile ? '200px' : '400px', overflow: 'hidden' }}>
                    <img src={selectedEq.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: isMobile ? '1.5rem' : '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h3 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '1.5rem' : '2.5rem', color: selectedEq.color, margin: 0 }}>{selectedEq.title}</h3>
                      <span style={{ background: selectedEq.color, color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>{selectedEq.specs}</span>
                    </div>
                    <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>{selectedEq.fullDesc}</p>
                    <button onClick={() => setSelectedEq(null)} style={{ width: '100%', padding: '1rem', background: selectedEq.color, color: '#000', border: 'none', borderRadius: '8px', fontSize: '1rem', fontFamily: 'Oswald', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px' }}>CLOSE SPECIFICATIONS</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    case 'membership':
      return (
        <div style={{ color: '#fff', maxWidth: '1400px', width: '100%', padding: isMobile ? '0 0.5rem' : 0 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '5rem' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '4.5rem', marginBottom: '1rem', color: '#fff' }}>
              MEMBERSHIP <span style={{ color: colors.primaryYellow }}>PLANS</span>
            </h2>
            <p style={{ fontSize: isMobile ? '0.9rem' : '1.2rem', color: colors.textGrey, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Flexible options to suit your lifestyle. Simple pricing, no hidden costs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '2rem' : '1.5rem', alignItems: 'start' }}>
            {[
              { name: 'FREE TRIAL', price: '0', color: '#00e676', features: ['1 Day Full Access', 'Equipment Tour', 'Coach Consultation', 'Locker Room Access'] },
              { name: 'STANDARD', price: '1,500', color: '#00e676', features: ['Gym Floor Access', 'Locker Usage', 'Cardio Zone Access', 'General Guidance'] },
              { name: 'PREMIUM', price: '2,500', color: colors.primaryYellow, features: ['Everything in Standard', 'Steam & Sauna', 'Personal Diet Chart', '2 Personal Training Sessions', 'Full Facility Access'], recommended: true },
              { name: 'ULTIMATE', price: '4,500', color: '#d500f9', features: ['Everything in Premium', 'Unlimited Personal Training', 'Massage Therapy', 'Guest Privileges', 'Private Locker'] }
            ].map((plan, i) => (
              <motion.div key={i} style={{
                background: plan.recommended ? `linear-gradient(135deg, rgba(245, 197, 24, 0.15), rgba(0,0,0,0.8))` : 'rgba(20,20,20,0.6)',
                border: `1px solid ${plan.recommended ? colors.primaryYellow : '#333'}`,
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                position: 'relative',
                transform: plan.recommended && !isMobile ? 'scale(1.1)' : 'none',
                zIndex: plan.recommended ? 10 : 1,
                boxShadow: plan.recommended ? `0 20px 50px -10px rgba(245, 197, 24, 0.2)` : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onClick={() => setSelectedPlan(plan.name)}
                whileHover={{ y: -10, scale: plan.recommended ? 1.12 : 1.02 }}
              >
                {plan.recommended && (
                  <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: colors.primaryYellow, color: '#000', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, fontFamily: 'Oswald' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', color: plan.recommended ? colors.primaryYellow : '#fff', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '1.5rem', color: colors.textGrey }}>₹</span>
                  <span style={{ fontSize: '3.5rem', fontFamily: 'Oswald', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: '1rem', color: colors.textGrey }}>/mo</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', textAlign: 'left' }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: colors.textWhite, fontSize: '0.95rem' }}>
                      <span style={{ color: colors.energyGreen }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>

                <button style={{
                  width: '100%',
                  padding: '1.2rem',
                  background: plan.recommended ? colors.primaryYellow : 'transparent',
                  border: `1px solid ${colors.primaryYellow}`,
                  color: plan.recommended ? '#000' : colors.primaryYellow,
                  borderRadius: '12px',
                  fontFamily: 'Oswald',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                  onMouseEnter={(e) => {
                    if (!plan.recommended) {
                      e.currentTarget.style.background = colors.primaryYellow;
                      e.currentTarget.style.color = '#000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.recommended) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = colors.primaryYellow;
                    }
                  }}
                >
                  JOIN NOW
                </button>
              </motion.div>
            ))}
          </div>

          {/* Success Popup */}
          <AnimatePresence>
            {planSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  position: 'fixed',
                  top: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,0,0,0.9))',
                  border: '2px solid #00ff00',
                  padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem',
                  borderRadius: '12px',
                  zIndex: 2000,
                  textAlign: 'center',
                  boxShadow: isMobile ? 'none' : '0 0 30px rgba(0,255,0,0.3)'
                }}
              >
                <p style={{ margin: 0, fontFamily: 'Oswald', fontSize: isMobile ? '1rem' : '1.3rem', color: '#00ff00' }}>
                  ✓ REQUEST SENT SUCCESSFULLY!
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: isMobile ? '0.7rem' : '0.85rem', opacity: 0.8 }}>
                  Our team will contact you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Plan Contact Modal */}
          <AnimatePresence>
            {selectedPlan && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPlan(null)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: isMobile ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.85)',
                  backdropFilter: isMobile ? 'none' : 'blur(5px)',
                  zIndex: 1000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem'
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: '#1a1a1a',
                    border: `1px solid ${colors.primaryYellow}`,
                    borderRadius: '24px',
                    padding: isMobile ? '1.5rem' : '3rem',
                    width: '100%',
                    maxWidth: '500px',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                  }}
                >
                  <button
                    onClick={() => setSelectedPlan(null)}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      background: 'transparent',
                      border: 'none',
                      color: colors.textGrey,
                      cursor: 'pointer'
                    }}
                  >
                    <X size={24} />
                  </button>

                  <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>
                    JOIN <span style={{ color: colors.primaryYellow }}>{selectedPlan}</span>
                  </h3>
                  <p style={{ color: colors.textGrey, marginBottom: '2rem', fontSize: '0.9rem' }}>
                    Enter your details to start your journey.
                  </p>

                  <form onSubmit={handlePlanSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                      <label style={{ position: 'absolute', top: '-0.5rem', left: '0.8rem', background: '#1a1a1a', padding: '0 0.4rem', fontSize: '0.7rem', color: colors.primaryYellow }}>SELECTED PLAN</label>
                      <input type="text" value={selectedPlan} disabled style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: colors.textWhite, cursor: 'not-allowed' }} />
                    </div>
                    <input type="text" placeholder="FULL NAME" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />
                    <input type="tel" placeholder="PHONE NUMBER" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />
                    <input type="email" placeholder="EMAIL ADDRESS (OPTIONAL)" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />

                    <button type="submit" style={{
                      marginTop: '1rem',
                      width: '100%',
                      padding: '1.2rem',
                      background: colors.primaryYellow,
                      color: '#000',
                      border: 'none',
                      borderRadius: '8px',
                      fontFamily: 'Oswald',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      letterSpacing: '1px'
                    }}>
                      SEND REQUEST
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <SectionFooter isMobile={isMobile} />
        </div>
      );
    case 'transformation':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px', padding: isMobile ? '0 0.5rem' : '0' }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '4rem', marginBottom: '1rem', color: colors.textWhite, letterSpacing: '2px' }}>
              REAL <span style={{ color: colors.energyGreen }}>TRANSFORMATIONS</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontSize: isMobile ? '0.9rem' : '1.2rem', color: colors.textGrey, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              This is what consistency looks like. No magic pills, just iron and sweat.
              See what our members have achieved at Energym.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              { before: "/assets/transformations/t1_before.png", after: "/assets/transformations/t1_after.png", title: "WEIGHT LOSS JOURNEY", time: "6 MONTHS", stat: "-18 KG LOST" },
              { before: "/assets/transformations/t2_before.png", after: "/assets/transformations/t2_after.png", title: "MUSCLE BUILDING", time: "4 MONTHS", stat: "+5 KG MUSCLE" },
              { before: "/assets/transformations/t3_before.png", after: "/assets/transformations/t3_after.png", title: "PHYSIQUE SCULPTING", time: "1 YEAR", stat: "COMPLETE CHANGE" }
            ].map((item, i) => (
              <div key={i} style={{ background: '#1a1a1a', borderRadius: '12px', padding: '1.5rem', border: '1px solid #333' }}>
                <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                  <TransformationSlider before={item.before} after={item.after} label={item.time} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Oswald', color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <div style={{ display: 'inline-block', background: colors.energyGreen, color: '#000', padding: '0.2rem 0.8rem', borderRadius: '4px', fontFamily: 'Oswald', fontWeight: 700, fontSize: '0.9rem' }}>
                    {item.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionFooter isMobile={isMobile} />
        </div>
      );
    case 'overview':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px', padding: isMobile ? '0 0.5rem' : '0' }}>

          {/* Header */}
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem', color: colors.textWhite, textTransform: 'uppercase' }}>
              FACILITY <span style={{ color: colors.primaryYellow }}>OVERVIEW</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontSize: isMobile ? '1rem' : '1.3rem', color: colors.textGrey, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              Spread across 15,000 sq ft, Energym 4.0 is designed for performance. No distractions, just the best equipment and environment to help you reach your potential.
            </p>
          </div>

          {/* Key Stats - Simplified and Bold */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { label: 'TOTAL AREA', value: '15,000+', sub: 'SQ FT', color: colors.primaryYellow },
              { label: 'EQUIPMENT', value: '120+', sub: 'UNITS', color: colors.energyGreen },
              { label: 'MEMBERS', value: '450+', sub: 'ACTIVE', color: colors.accentGold }
            ].map((stat, i) => (
              <div key={i} style={{
                background: '#1a1a1a',
                padding: '2rem',
                borderLeft: `4px solid ${stat.color}`,
                borderRadius: '8px'
              }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '3rem', color: '#fff', margin: 0, lineHeight: 1 }}>{stat.value}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontFamily: 'Oswald', color: stat.color, fontSize: '1rem', fontWeight: 700 }}>{stat.sub}</span>
                  <span style={{ fontFamily: 'Outfit', color: colors.textGrey, fontSize: '0.9rem' }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Real Highlights Grid - No Sci Fi text */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '2rem' }}>
            {[
              { title: 'STRENGTH SECTION', desc: 'Heavy duty power racks, deadlift platforms, and calibrated plates for serious lifters.' },
              { title: 'CARDIO THEATER', desc: 'Latest treadmills and ellipticals with integrated entertainment and heart rate monitoring.' },
              { title: 'FUNCTIONAL ZONE', desc: 'Turf area for agility work, kettlebells, battle ropes, and HIIT sessions.' },
              { title: 'RECOVERY LOUNGE', desc: 'Dedicated space for stretching, foam rolling, and post-workout recovery.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', background: '#111', borderBottom: `2px solid ${colors.charcoalLight}` }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', color: colors.textWhite, marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Outfit', fontSize: '1rem', color: colors.textGrey, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Community Gallery Section */}
          <div style={{ marginTop: '5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '3.5rem', marginBottom: '2rem', textAlign: 'center', color: colors.textWhite }}>
              THE <span style={{ color: colors.energyGreen }}>TRIBE</span>
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '1rem'
            }}>
              {[
                "/images/gg1.jpg",
                "/images/gg2.jpg",
                "/images/gg3.jpg",
                "/images/gg4.jpg",
                "/images/gg5.jpg"
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid #333',
                    position: 'relative'
                  }}
                >
                  <img src={src} alt="Energym Community" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', opacity: 0.8 }} />
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a
                href="https://instagram.com/energym4.0_tinsukia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Oswald',
                  color: colors.textWhite,
                  textDecoration: 'none',
                  borderBottom: `2px solid ${colors.energyGreen}`,
                  paddingBottom: '0.3rem',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Instagram size={20} color={colors.energyGreen} />
                VIEW ON INSTAGRAM
              </a>
            </div>
          </div>

          <SectionFooter isMobile={isMobile} />
        </div>
      );
    case 'contact':
      const [showSuccess, setShowSuccess] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        e.target.reset();
      };

      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1200px', position: 'relative' }}>
          {/* Success Popup */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  position: 'fixed',
                  top: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, rgba(0,255,0,0.2), rgba(0,0,0,0.9))',
                  border: '2px solid #00ff00',
                  padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem',
                  borderRadius: '12px',
                  zIndex: 1000,
                  textAlign: 'center',
                  boxShadow: isMobile ? 'none' : '0 0 30px rgba(0,255,0,0.3)'
                }}
              >
                <p style={{ margin: 0, fontFamily: 'Oswald', fontSize: isMobile ? '1rem' : '1.3rem', color: '#00ff00' }}>
                  ✓ MESSAGE SENT SUCCESSFULLY!
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: isMobile ? '0.7rem' : '0.85rem', opacity: 0.8 }}>
                  We will contact you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '1.5rem' : '3rem', marginBottom: isMobile ? '1.5rem' : '3rem', color: colors.textWhite }}>
            ESTABLISH <span style={{ color: colors.energyGreen }}>COMMUNICATIONS</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '3rem' }}>
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: isMobile ? '1rem' : '2rem', padding: isMobile ? '1.2rem' : '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: isMobile ? '12px' : '16px', borderLeft: `4px solid ${colors.energyGreen}` }}>
                <h3 style={{ fontFamily: 'Oswald', color: colors.energyGreen, marginBottom: isMobile ? '1rem' : '1.5rem', fontSize: isMobile ? '1rem' : '1.3rem' }}>DIRECT CHANNELS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.6rem' : '1rem' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                    <span style={{ color: colors.energyGreen }}>📞</span> +91 97067 12345
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                    <span style={{ color: colors.energyGreen }}>📧</span> connect@energym4.in
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                    <span style={{ color: colors.energyGreen }}>📍</span> A.T. Road, Tinsukia
                  </p>
                </div>
              </div>
              <div style={{ padding: isMobile ? '1.2rem' : '2rem', background: 'rgba(255,215,0,0.05)', borderRadius: isMobile ? '12px' : '16px', borderLeft: '4px solid var(--accent-yellow)' }}>
                <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', marginBottom: isMobile ? '0.6rem' : '1rem', fontSize: isMobile ? '1rem' : '1.3rem' }}>OPERATIONAL HOURS</h3>
                <p style={{ margin: '0.4rem 0', opacity: 0.8, fontSize: isMobile ? '0.75rem' : '1rem' }}>MON - FRI: 05:30 AM - 10:00 PM</p>
                <p style={{ margin: '0.4rem 0', opacity: 0.8, fontSize: isMobile ? '0.75rem' : '1rem' }}>SATURDAY: 06:00 AM - 08:30 PM</p>
                <p style={{ margin: '0.4rem 0', color: 'var(--primary-red)', fontSize: isMobile ? '0.75rem' : '1rem' }}>SUNDAY: CLOSED</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.03)', padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: isMobile ? '16px' : '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontFamily: 'Oswald', color: '#fff', marginBottom: isMobile ? '1rem' : '1.5rem', fontSize: isMobile ? '1.1rem' : '1.3rem' }}>CONTACT FORM</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.8rem' : '1rem' }}>
                <input type="text" placeholder="FULL NAME" required style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '0.8rem' : '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter', fontSize: isMobile ? '0.8rem' : '1rem' }} />
                <input type="tel" placeholder="CONTACT NUMBER" required style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '0.8rem' : '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter', fontSize: isMobile ? '0.8rem' : '1rem' }} />
                <input type="email" placeholder="EMAIL ADDRESS" style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '0.8rem' : '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter', fontSize: isMobile ? '0.8rem' : '1rem' }} />
                <textarea placeholder="YOUR MESSAGE" rows={isMobile ? 3 : 4} required style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: isMobile ? '0.8rem' : '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter', resize: 'none', fontSize: isMobile ? '0.8rem' : '1rem' }} />
                <button type="submit" style={{ width: '100%', padding: isMobile ? '0.9rem' : '1.2rem', background: colors.energyGreen, color: '#000', fontWeight: 900, fontFamily: 'Oswald', fontSize: isMobile ? '0.9rem' : '1.1rem', border: 'none', borderRadius: '8px', cursor: 'pointer', letterSpacing: '2px' }}>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <SectionFooter isMobile={isMobile} />
        </div >
      );
    case 'facilities':
      const facilityZones = [
        { zone: 'STRENGTH AREA', title: 'HEAVY LIFTING ZONE', desc: 'Built for raw power. Featuring 6 heavy-duty power racks, deadlift platforms, and a full range of free weights for serious training.', area: '4,500 SQ FT', features: ['6 POWER RACKS', 'OLYMPIC PLATFORMS', 'DEADLIFT ZONES', 'HEAVY DUMBBELLS'], color: 'var(--primary-red)' },
        { zone: 'CARDIO ZONE', title: 'ENDURANCE & CONDITIONING', desc: 'Burn calories and build stamina. Equipped with top-tier treadmills, bikes, and rowers to keep your heart engaged and healthy.', area: '3,200 SQ FT', features: ['TREADMILLS', 'ROWING MACHINES', 'ASSAULT BIKES', 'ELLIPTICALS'], color: 'var(--lightning-blue)' },
        { zone: 'MACHINE ZONE', title: 'ISOLATION & TONING', desc: 'Target every muscle group effectively. A complete lineup of user-friendly machines designed for safe and focused muscle building.', area: '3,800 SQ FT', features: ['SELECTORIZED MACHINES', 'CABLE STATIONS', 'LEG PRESS', 'CHEST PRESS'], color: 'var(--accent-yellow)' },
        { zone: 'RECOVERY AREA', title: 'STRETCHING & MOBILITY', desc: 'Cool down and recover. A spacious area dedicated to stretching, warm-ups, and mobility work to keep you flexible and injury-free.', area: '2,500 SQ FT', features: ['YOGA MATS', 'FOAM ROLLERS', 'STRETCHING CAGES', 'OPEN SPACE'], color: '#fff' }
      ];

      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '4rem', marginBottom: '0.5rem', color: 'var(--lightning-blue)' }}>
            OUR <span style={{ color: 'var(--accent-yellow)' }}>FACILITIES</span>
          </h2>
          <p style={{ fontFamily: 'Oswald', fontSize: isMobile ? '0.8rem' : '1.2rem', color: colors.textGrey, marginBottom: '4rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            SPACIOUS. MODERN. FULLY EQUIPPED.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
            {facilityZones.map((zone, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, background: 'rgba(255,255,255,0.05)', borderColor: colors.energyGreen }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: '2.5rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderLeft: `4px solid ${zone.color}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.3)', borderBottomLeftRadius: '12px', fontFamily: 'Oswald', fontSize: '0.8rem', color: zone.color }}>
                  {zone.zone}
                </div>
                {/* Icon removed */}
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem' }}>{zone.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: colors.textGrey, marginBottom: '1.5rem' }}>{zone.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
                  {zone.features.map((f, j) => (
                    <span key={j} style={{ background: 'rgba(0,0,0,0.4)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ccc', border: `1px solid ${zone.color}40` }}>{f}</span>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Oswald', fontSize: '0.9rem', color: zone.color }}>TOTAL AREA</span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '1rem' }}>{zone.area}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>GYM <span style={{ color: 'var(--primary-red)' }}>AMENITIES</span></h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'LOCKER ROOMS', desc: 'Secure lockers, changing areas, and showers for your convenience.', icon: Layers },
              { name: 'DRINKING WATER', desc: 'Normal and Cold drinking water stations available.', icon: Diamond }
            ].map((amenity, i) => (
              <div key={i} style={{ background: 'rgba(20,20,20,0.8)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', width: isMobile ? '100%' : '350px' }}>
                <amenity.icon size={32} color="#fff" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'Oswald', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{amenity.name}</h4>
                <p style={{ fontSize: '0.9rem', color: colors.textGrey }}>{amenity.desc}</p>
              </div>
            ))}
          </div>

          <SectionFooter isMobile={isMobile} />
        </div >
      );
    case 'coaches':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px', padding: isMobile ? '0 0.5rem' : '0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2rem' : '4rem', marginBottom: '1rem', color: colors.textWhite, letterSpacing: '2px' }}>
              MEET THE <span style={{ color: colors.primaryYellow }}>ELITE</span>
            </h2>
            <p style={{ fontFamily: 'Outfit', fontSize: isMobile ? '0.9rem' : '1.2rem', color: colors.textGrey, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              Our team of certified professionals is dedicated to pushing you beyond your limits.
              Expertise in biomechanics, nutrition, and performance optimization.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1.5rem' : '2.5rem' }}>
            {[
              { name: 'ARJUN MEHTA', role: 'HEAD COACH', specialty: 'Strength & Conditioning', exp: '8+ YEARS', color: colors.primaryYellow },
              { name: 'PRIYA SINGH', role: 'FITNESS SPECIALIST', specialty: 'Functional Training', exp: '6+ YEARS', color: colors.energyGreen },
              { name: 'RAJ PATEL', role: 'NUTRITION EXPERT', specialty: 'Body Recomposition', exp: '10+ YEARS', color: colors.accentGold },
              { name: 'NEHA SHARMA', role: 'CARDIO SPECIALIST', specialty: 'HIIT & Endurance', exp: '5+ YEARS', color: colors.highlightYellow },
              { name: 'VIKRAM DAS', role: 'POWERLIFTING COACH', specialty: 'Competitive Lifting', exp: '12+ YEARS', color: colors.accentGold },
              { name: 'SARA KHAN', role: 'MOBILITY EXPERT', specialty: 'Flexibility & Recovery', exp: '7+ YEARS', color: '#00e676' }
            ].map((coach, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)` }}
                style={{
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  border: '1px solid #333',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glow Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, ${coach.color}10 0%, transparent 60%)`,
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />

                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, #222, #111)`,
                  border: `2px solid ${coach.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  zIndex: 1,
                  boxShadow: isMobile ? 'none' : `0 0 20px ${coach.color}30`
                }}>
                  <span style={{ fontFamily: 'Oswald', fontSize: '2.5rem', color: coach.color, fontWeight: 700 }}>
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', zIndex: 1, letterSpacing: '1px' }}>
                  {coach.name}
                </h3>

                <div style={{
                  background: `${coach.color}20`,
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  zIndex: 1
                }}>
                  <span style={{
                    fontFamily: 'Oswald',
                    fontSize: '0.8rem',
                    color: coach.color,
                    fontWeight: 700,
                    letterSpacing: '1px'
                  }}>
                    {coach.role}
                  </span>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem', zIndex: 1 }} />

                <div style={{ zIndex: 1 }}>
                  <p style={{ color: colors.textGrey, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>SPECIALTY</p>
                  <p style={{ color: '#fff', fontFamily: 'Outfit', fontSize: '1.1rem', marginBottom: '1.5rem' }}>{coach.specialty}</p>

                  <p style={{ color: colors.textGrey, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>EXPERIENCE</p>
                  <p style={{ color: coach.color, fontFamily: 'Oswald', fontSize: '1.2rem', fontWeight: 700 }}>{coach.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <SectionFooter isMobile={isMobile} />
        </div>
      );
    case 'environment':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px', padding: isMobile ? '0 0.5rem' : '0' }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Oswald', fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1.5rem', color: colors.textWhite, letterSpacing: '2px' }}>
              THE <span style={{ color: colors.energyGreen }}>ATMOSPHERE</span>
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: isMobile ? '1rem' : '1.3rem', color: colors.textGrey, lineHeight: 1.8, marginBottom: '2rem' }}>
                We believe the right environment fuels performance. Energym is built on the pillars of respect, hard work, and support.
                It is a sanctuary for those who want to improve, free from ego and distractions.
                Here, the music drives you, the lighting sets the mood, and the people around you push you to be better.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { title: "PURE FOCUS", desc: "No overcrowding. No clutter. A space organized for serious training." },
              { title: "TEAM SPIRIT", desc: "A community that spots you when you fail and cheers when you succeed." },
              { title: "THE ENERGY", desc: "Curated playlists and ambient lighting that keeps your adrenaline high." }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#1a1a1a',
                padding: '2.5rem',
                borderRadius: '16px',
                borderTop: `4px solid ${i === 1 ? colors.energyGreen : colors.primaryYellow}`,
                textAlign: 'center'
              }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Outfit', fontSize: '1.1rem', color: colors.textGrey, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <SectionFooter isMobile={isMobile} />
        </div>
      );
    default:
      return <div style={{ color: '#fff', textAlign: 'center', opacity: 0.5 }}>INTERFACE LOADING... Establishing secure connection to {id.toUpperCase()} datalink.</div>;
  }
};

// Page Template Component
const PortalPage = ({ id, label, icon: Icon, color, onBack }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? '1.5rem' : '4rem',
        position: 'relative',
        zIndex: 500,
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        marginBottom: isMobile ? '1.5rem' : '4rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: isMobile ? '1rem' : '2.5rem',
        gap: isMobile ? '1rem' : 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '2.5rem' }}>
          <div>
            <h1 style={{
              fontFamily: 'Oswald',
              fontSize: isMobile ? '1.4rem' : '3.5rem',
              color: '#fff',
              margin: 0,
              letterSpacing: isMobile ? '1px' : '2px',
              textTransform: 'uppercase'
            }}>{label}</h1>
          </div>
        </div>
        {!isMobile && (
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '1.2rem 2.5rem',
              borderRadius: '16px',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '1rem',
              justifyContent: 'center'
            }}
          >
            <ArrowLeft size={22} /> BACK
          </motion.button>
        )}
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '0.5rem 0 4rem 0' : '2rem 1rem 8rem 1rem',
        width: '100%'
      }}>
        <SectionContent id={id} />

        {/* Decorative Background Icon */}
        {!isMobile && (
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'fixed', bottom: '-15%', right: '-5%', pointerEvents: 'none', zIndex: -1 }}
          >
            <Icon size={900} color={color} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navbarHidden, setNavbarHidden] = useState(false);

  // Lock body scroll when activePage is present (hides main vertical scrollbar)
  useEffect(() => {
    if (activePage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    };
  }, [activePage]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking for navbar hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    if (isMobile) {
      setIsMenuOpen(true);
    }
  };

  const handleMenuToggle = () => {
    if (activePage) {
      setActivePage(null);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const menuItems = [
    { id: 'about', label: 'ABOUT US', icon: Dna, color: '#F5C518', desc: 'THE EVOLUTIONARY CORE' },
    { id: 'equipment', label: 'EQUIPMENT', icon: Component, color: '#D4A017', desc: 'KINETIC ARSENAL' },
    { id: 'facilities', label: 'FACILITIES', icon: Layers, color: '#F5C518', desc: 'STRUCTURAL ADVANTAGE' },
    { id: 'membership', label: 'MEMBERSHIP', icon: Diamond, color: '#FFD93D', desc: 'EXCLUSIVITY PROTOCOLS' },
    { id: 'coaches', label: 'COACHES', icon: Sword, color: '#F5C518', desc: 'ELITE COMMANDERS' },
    { id: 'overview', label: 'OVERVIEW', icon: Radar, color: '#D4A017', desc: 'SURVEILLANCE & DATA' },
    { id: 'transformation', label: 'TRANSFORMATION', icon: Activity, color: '#F5C518', desc: 'METAMORPHIC METRICS' },
    { id: 'environment', label: 'ENVIRONMENT', icon: Atom, color: '#D4A017', desc: 'SYSTEM ATMOSPHERE' },
    { id: 'contact', label: 'CONTACT US', icon: Wifi, color: '#FFFFFF', desc: 'SIGNAL ESTABLISHED' },
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Hero
          onEnter={handleEnter}
          onMenuToggle={handleMenuToggle}
          hasEntered={hasEntered}
          isMenuOpen={isMenuOpen}
          onPageSelect={(pageId) => {
            setActivePage(pageId);
            if (isMobile) setIsMenuOpen(true);
          }}
        />

        {/* Mobile Dropdown Menu Overlay - Mobile Only */}
        <AnimatePresence>
          {isMobile && isMenuOpen && !activePage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                top: '60px',
                right: '1rem',
                width: 'calc(100vw - 2rem)',
                background: 'rgba(15, 15, 15, 0.98)',
                border: `1px solid ${colors.charcoalMedium}`,
                borderTop: `3px solid ${colors.primaryYellow}`,
                borderRadius: '4px',
                padding: '1.5rem',
                zIndex: 200,
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem'
              }}
            >
              <div style={{ marginBottom: '1rem', borderBottom: `1px solid ${colors.charcoalMedium}`, paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Oswald', color: colors.primaryYellow, fontSize: '0.8rem', letterSpacing: '2px' }}>SYSTEM MENU</span>
                <span style={{ fontFamily: 'Inter', color: '#555', fontSize: '0.6rem' }}>EG 4.0</span>
              </div>

              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  style={{
                    padding: '0.8rem',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: '2px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeft = `2px solid ${item.color}`;
                    e.currentTarget.style.color = colors.energyGreen;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeft = '2px solid transparent';
                    e.currentTarget.style.color = '#ccc';
                  }}
                >
                  <span style={{ fontFamily: 'Oswald', fontSize: '1.1rem', letterSpacing: '1px', color: '#ccc', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#444' }}>
                    0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Page Overlay */}
        <AnimatePresence>
          {activePage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 300, overflowY: 'auto', overflowX: 'hidden', height: '100vh' }}
            >
              <PortalPage
                {...menuItems.find(item => item.id === activePage)}
                onBack={() => setActivePage(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div >
  );
};

export default App;
