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
  Clock
} from 'lucide-react';
import Hero from './components/Hero';

// --- Components ---

const TransformationSlider = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
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

      {/* Overlay Layer: AFTER (Revealed as slider moves right) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${sliderPos}%`,
        height: '100%',
        overflow: 'hidden',
        borderRight: '3px solid var(--accent-yellow)',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        <img
          src={after}
          alt="After"
          style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none', width: containerRef.current?.offsetWidth || '1000%' }}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,215,0,0.8)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#000', fontSize: '0.7rem', fontFamily: 'Oswald', fontWeight: 900 }}>AFTER</div>
      </div>

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
        <div style={{
          width: '40px',
          height: '40px',
          background: 'var(--accent-yellow)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(255,215,0,0.4)',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', gap: '2px' }}><div style={{ width: '2px', height: '15px', background: '#000' }} /><div style={{ width: '2px', height: '15px', background: '#000' }} /></div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#fff', fontFamily: 'Oswald', textAlign: 'center', zIndex: 11 }}>{label}</div>
    </div>
  );
};

const SectionContent = ({ id }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  switch (id) {
    case 'about':
      return (
        <div style={{ color: '#fff', maxWidth: '1200px', lineHeight: '1.8' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-red)' }}>
            ESTABLISHED 2024 // <span style={{ color: 'var(--accent-yellow)' }}>THE NEW STANDARD</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '3rem', letterSpacing: '2px' }}>
            SYSTEM ID: EG-4.0-TSK // OPERATIONAL STATUS: ACTIVE
          </p>

          {/* Hero Statement */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,0,0,0.1), rgba(0,0,0,0.3))',
            padding: '3rem',
            borderRadius: '24px',
            marginBottom: '3rem',
            borderLeft: '4px solid var(--primary-red)'
          }}>
            <p style={{ fontSize: '1.3rem', marginBottom: 0, fontWeight: 300 }}>
              ENERGYM 4.0 is not just a gym—it's a <span style={{ color: 'var(--accent-yellow)', fontWeight: 700 }}>high-performance laboratory</span> dedicated to human evolution.
              Spanning <span style={{ color: 'var(--primary-red)', fontWeight: 700 }}>15,000 sq ft</span> of industrial-grade training architecture,
              we offer an environment exclusively for those who demand more from themselves.
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { value: '2024', label: 'ESTABLISHED', color: 'var(--primary-red)' },
              { value: '15K+', label: 'SQ FT SPACE', color: 'var(--lightning-blue)' },
              { value: '450+', label: 'ACTIVE MEMBERS', color: 'var(--accent-yellow)' },
              { value: '12+', label: 'ELITE COACHES', color: 'var(--primary-red)' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '2.5rem', color: stat.color, margin: 0 }}>{stat.value}</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.6, margin: 0, letterSpacing: '1px' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,215,0,0.05)', borderRadius: '16px', borderTop: '3px solid var(--accent-yellow)' }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', fontSize: '1.5rem', marginBottom: '1rem' }}>OUR VISION</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>
                To build the most technologically advanced training community in Northeast India. We envision a future where fitness is powered by data, precision, and relentless innovation.
              </p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(0,191,255,0.05)', borderRadius: '16px', borderTop: '3px solid var(--lightning-blue)' }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--lightning-blue)', fontSize: '1.5rem', marginBottom: '1rem' }}>OUR MISSION</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>
                Tactics, tools, and technology to redefine physical and mental resilience. Every rep counted. Every calorie tracked. Every goal achieved.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>CORE PROTOCOLS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'PRECISION', desc: 'Every movement calibrated for maximum efficiency', icon: '⚡' },
              { title: 'DISCIPLINE', desc: 'Consistency over motivation, systems over willpower', icon: '🎯' },
              { title: 'EVOLUTION', desc: 'Continuous improvement through data-driven insights', icon: '📈' }
            ].map((val, i) => (
              <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid var(--primary-red)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{val.icon}</span>
                <h4 style={{ fontFamily: 'Oswald', color: 'var(--primary-red)', marginBottom: '0.5rem' }}>{val.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'equipment':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--lightning-blue)' }}>
            KINETIC <span style={{ color: 'var(--accent-yellow)' }}>ARSENAL</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '2rem', letterSpacing: '2px' }}>
            120+ MACHINES // INDUSTRIAL GRADE // PERFORMANCE TRACKED
          </p>

          {/* Hero Equipment Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid rgba(0,191,255,0.3)'
          }}>
            <img
              src="/assets/equipment_showcase.png"
              alt="ENERGYM Equipment Arsenal"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', margin: 0 }}>PREMIUM INDUSTRIAL-GRADE EQUIPMENT</h3>
              <p style={{ opacity: 0.7, margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Every machine calibrated for peak performance</p>
            </div>
          </div>

          {/* Equipment Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
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
          <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>EQUIPMENT CATEGORIES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'TECHNOGYM PURE', desc: 'Italian precision engineering. Bio-circuit enabled machines with real-time performance tracking and adaptive resistance systems.', specs: '12 UNITS', color: 'var(--primary-red)' },
              { title: 'ROGUE MONSTER RACKS', desc: 'Competition-grade power racks with 1000+ lb capacity. Olympic platforms, band pegs, and safety spotters included.', specs: '6 RACKS', color: 'var(--lightning-blue)' },
              { title: 'BIO-FEEDBACK CARDIOS', desc: 'Heart-rate linked treadmills, rowers, and assault bikes. Real-time caloric burn and zone training displays.', specs: '25 UNITS', color: 'var(--accent-yellow)' },
              { title: 'ISO-LATERAL MACHINES', desc: 'Hammer Strength iso-lateral rows, presses, and curls. Independent arm movement for balanced development.', specs: '8 UNITS', color: 'var(--primary-red)' },
              { title: 'CABLE STATIONS', desc: 'Dual-stack adjustable cable crossovers with 200+ lb stacks. Infinite angle adjustments for precision targeting.', specs: '4 STATIONS', color: 'var(--lightning-blue)' },
              { title: 'FREE WEIGHTS', desc: 'Rubber hex dumbbells (5-150 lbs), Olympic barbells, EZ bars, and specialty bars. 3+ tons of iron.', specs: '3000+ KG', color: 'var(--accent-yellow)' }
            ].map((eq, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: `4px solid ${eq.color}`,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h4 style={{ fontFamily: 'Oswald', color: eq.color, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{eq.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, flex: 1, marginBottom: '1rem' }}>{eq.desc}</p>
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  display: 'inline-block',
                  alignSelf: 'flex-start'
                }}>
                  <span style={{ fontFamily: 'Oswald', color: eq.color, fontSize: '0.8rem' }}>{eq.specs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'membership':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1200px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--accent-yellow)' }}>
            ACCESS <span style={{ color: 'var(--primary-red)' }}>PROTOCOLS</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '3rem', letterSpacing: '2px', textAlign: 'center' }}>
            CHOOSE YOUR TIER // UNLOCK YOUR POTENTIAL // START EVOLVING
          </p>

          {/* Membership Tiers */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {[
              {
                tier: 'RECRUIT',
                price: '₹1,500',
                period: '/MONTH',
                desc: 'Perfect for beginners starting their fitness journey',
                features: ['Full Gym Access', 'Locker Facility', 'Basic Equipment', 'Morning Sessions', 'Member App'],
                color: 'var(--lightning-blue)',
                popular: false
              },
              {
                tier: 'ELITE',
                price: '₹2,500',
                period: '/MONTH',
                desc: 'Most popular choice for dedicated fitness enthusiasts',
                features: ['All RECRUIT Benefits', 'Personal Training (2x)', 'Premium Equipment', 'All-Day Access', 'Nutrition Guide', 'Progress Tracking'],
                color: 'var(--primary-red)',
                popular: true
              },
              {
                tier: 'COMMANDER',
                price: '₹4,500',
                period: '/MONTH',
                desc: 'Ultimate package for serious athletes and competitors',
                features: ['All ELITE Benefits', 'Unlimited PT Sessions', 'Priority Booking', 'Recovery Zone Access', 'Custom Meal Plans', 'Body Composition Scans', 'VIP Locker'],
                color: 'var(--accent-yellow)',
                popular: false
              }
            ].map((m, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                background: m.popular ? 'linear-gradient(135deg, rgba(255,0,0,0.15), rgba(255,0,0,0.05))' : 'rgba(255,255,255,0.02)',
                borderRadius: '24px',
                textAlign: 'center',
                border: m.popular ? '2px solid var(--primary-red)' : '1px solid rgba(255,255,255,0.1)',
                transform: m.popular && !isMobile ? 'scale(1.05)' : 'none',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {m.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary-red)',
                    padding: '0.3rem 1.5rem',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontFamily: 'Oswald',
                    letterSpacing: '2px'
                  }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontFamily: 'Oswald', color: m.color, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{m.tier}</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'Oswald', fontSize: '3rem', color: '#fff' }}>{m.price}</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>{m.period}</span>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '1.5rem' }}>{m.desc}</p>
                <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                  {m.features.map((f, j) => (
                    <div key={j} style={{
                      padding: '0.6rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      fontSize: '0.85rem',
                      opacity: 0.8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ color: m.color }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button style={{
                  width: '100%',
                  padding: '1.2rem',
                  background: m.popular ? '#fff' : m.color,
                  color: m.popular ? 'var(--primary-red)' : '#000',
                  border: 'none',
                  fontWeight: 900,
                  fontFamily: 'Oswald',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  letterSpacing: '2px'
                }}>
                  ENLIST NOW
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>
              💡 All memberships include free wi-fi, towel service, and access to member-exclusive events.
              <br />Contact us for <span style={{ color: 'var(--accent-yellow)' }}>corporate packages</span> and <span style={{ color: 'var(--accent-yellow)' }}>student discounts</span>.
            </p>
          </div>
        </div>
      );
    case 'transformation':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1200px' }}>
          <h2 style={{ fontFamily: 'Oswald', textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>METAMORPHOSE <span style={{ color: 'var(--accent-yellow)' }}>LOGS</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2.5rem' }}>
            <TransformationSlider before="/assets/transformations/t1_before.png" after="/assets/transformations/t1_after.png" label="UNIT #ALPHA-1 // 180 DAYS" />
            <TransformationSlider before="/assets/transformations/t2_before.png" after="/assets/transformations/t2_after.png" label="UNIT #OMEGA-4 // 120 DAYS" />
            <TransformationSlider before="/assets/transformations/t3_before.png" after="/assets/transformations/t3_after.png" label="UNIT #TITAN-9 // 365 DAYS" />
          </div>
        </div>
      );
    case 'overview':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary-red)' }}>FACILITY OVERVIEW // SECTOR 04</h2>

          {/* Stats Dashboard */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { label: 'FLOOR SPACE', value: '15,000', unit: 'SQ FT', color: 'var(--primary-red)' },
              { label: 'ACTIVE AGENTS', value: '450+', unit: 'MEMBERS', color: 'var(--lightning-blue)' },
              { label: 'EQUIPMENT UNITS', value: '120+', unit: 'MACHINES', color: 'var(--accent-yellow)' },
              { label: 'MONTHLY BURN', value: '2.4M', unit: 'CALORIES', color: 'var(--primary-red)' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '2rem 1.5rem',
                borderRadius: '16px',
                borderTop: `4px solid ${stat.color}`,
                textAlign: 'center'
              }}>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '2.5rem', color: stat.color, margin: '0 0 0.5rem 0' }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: '0.7rem', opacity: 0.5, margin: '0 0 0.3rem 0' }}>{stat.unit}</p>
                <p style={{ fontFamily: 'Oswald', fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>


          {/* 3D Facility Visualization */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-yellow)' }}>
              FACILITY 3D RECONNAISSANCE // INTERIOR ZONES
            </h3>
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(255,215,0,0.3)',
              boxShadow: '0 0 30px rgba(255,215,0,0.1)'
            }}>
              <img
                src="/assets/gym_3d_interior.png"
                alt="ENERGYM 4.0 3D Interior View"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(0,0,0,0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--primary-red)',
                pointerEvents: 'none'
              }}>
                <p style={{ margin: 0, fontFamily: 'Oswald', fontSize: '0.8rem', color: 'var(--primary-red)' }}>
                  3D RENDER // 15,000 SQ FT TRAINING FACILITY
                </p>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(255,215,0,0.9)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                pointerEvents: 'none'
              }}>
                <p style={{ margin: 0, fontFamily: 'Oswald', fontSize: '0.7rem', color: '#000', fontWeight: 900 }}>
                  MULTI-ZONE ARCHITECTURE
                </p>
              </div>
            </div>
          </div>

          {/* Facility Zones */}
          <div>
            <h3 style={{ fontFamily: 'Oswald', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--lightning-blue)' }}>
              OPERATIONAL ZONES
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
              {[
                { zone: 'THE PIT', desc: 'Heavy compound lift arena with Olympic platforms and powerlifting racks', area: '4,500 sq ft' },
                { zone: 'CARDIO GRID', desc: 'Bio-feedback equipped treadmills, rowers, and assault bikes', area: '3,200 sq ft' },
                { zone: 'ISOLATION LAB', desc: 'Precision machines for targeted muscle group development', area: '3,800 sq ft' },
                { zone: 'THE REGEN', desc: 'Stretching, mobility work, and recovery systems', area: '2,500 sq ft' }
              ].map((zone, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--lightning-blue)'
                }}>
                  <h4 style={{ fontFamily: 'Oswald', fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>{zone.zone}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.8rem' }}>{zone.desc}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent-yellow)', fontFamily: 'Oswald' }}>AREA: {zone.area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 'contact':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1200px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-red)' }}>
            ESTABLISH <span style={{ color: 'var(--accent-yellow)' }}>COMMUNICATIONS</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '3rem', letterSpacing: '2px' }}>
            SECTOR 04 // TINSUKIA COMMAND CENTER // SIGNAL ACTIVE
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '3rem' }}>
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: '2rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', borderLeft: '4px solid var(--primary-red)' }}>
                <h3 style={{ fontFamily: 'Oswald', color: 'var(--primary-red)', marginBottom: '1.5rem' }}>DIRECT CHANNELS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-yellow)' }}>📞</span> +91 97067 12345
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-yellow)' }}>📧</span> connect@energym4.in
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-yellow)' }}>📍</span> A.T. Road, Near Thana Chariali, Tinsukia
                  </p>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,215,0,0.05)', borderRadius: '16px', borderLeft: '4px solid var(--accent-yellow)' }}>
                <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', marginBottom: '1rem' }}>OPERATIONAL HOURS</h3>
                <p style={{ margin: '0.5rem 0', opacity: 0.8 }}>MON - FRI: 05:30 AM - 10:00 PM</p>
                <p style={{ margin: '0.5rem 0', opacity: 0.8 }}>SATURDAY: 06:00 AM - 08:30 PM</p>
                <p style={{ margin: '0.5rem 0', color: 'var(--primary-red)' }}>SUNDAY: CLOSED (MAINTENANCE)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontFamily: 'Oswald', color: '#fff', marginBottom: '1.5rem' }}>INITIATE CONTACT</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="FULL NAME" style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter' }} />
                <input type="tel" placeholder="CONTACT NUMBER" style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter' }} />
                <input type="email" placeholder="EMAIL ADDRESS" style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter' }} />
                <textarea placeholder="YOUR MESSAGE" rows={4} style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', fontFamily: 'Inter', resize: 'none' }} />
                <button style={{ width: '100%', padding: '1.2rem', background: 'var(--primary-red)', color: '#fff', fontWeight: 900, fontFamily: 'Oswald', fontSize: '1.1rem', border: 'none', borderRadius: '8px', cursor: 'pointer', letterSpacing: '2px' }}>
                  TRANSMIT MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case 'facilities':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-yellow)' }}>
            TRAINING <span style={{ color: 'var(--lightning-blue)' }}>ZONES</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '2rem', letterSpacing: '2px' }}>
            15,000 SQ FT // 4 SPECIALIZED ZONES // OPTIMIZED ARCHITECTURE
          </p>

          {/* Hero Facility Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid rgba(255,215,0,0.3)'
          }}>
            <img
              src="/assets/facilities_zone.png"
              alt="ENERGYM Facility Zones"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', margin: 0 }}>MULTI-ZONE TRAINING ARCHITECTURE</h3>
            </div>
          </div>

          {/* Zone Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '2rem' }}>
            {[
              { zone: 'THE PIT', desc: 'Our heavy lifting arena featuring 6 power racks, Olympic lifting platforms, and competition benches. Designed for serious strength athletes.', area: '4,500 sq ft', features: ['6 Power Racks', 'Olympic Platforms', 'Chalk Stations'], color: 'var(--primary-red)' },
              { zone: 'CARDIO GRID', desc: 'High-tech cardio zone with bio-feedback enabled treadmills, assault bikes, rowers, and ski ergs. Real-time heart rate displays.', area: '3,200 sq ft', features: ['25+ Cardio Units', 'Heart Rate Zones', 'Entertainment Screens'], color: 'var(--lightning-blue)' },
              { zone: 'ISOLATION LAB', desc: 'Precision machines for targeted muscle development. Technogym and Hammer Strength equipment with guided motion paths.', area: '3,800 sq ft', features: ['40+ Machines', 'Iso-Lateral', 'Cable Systems'], color: 'var(--accent-yellow)' },
              { zone: 'THE REGEN', desc: 'Recovery and flexibility zone with stretching areas, foam rollers, massage guns, and dedicated mobility equipment.', area: '2,500 sq ft', features: ['Stretching Area', 'Recovery Tools', 'Cool-Down Zone'], color: 'var(--primary-red)' }
            ].map((zone, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                padding: '2rem',
                borderRadius: '16px',
                borderLeft: `4px solid ${zone.color}`
              }}>
                <h4 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', color: zone.color, marginBottom: '0.5rem' }}>{zone.zone}</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>{zone.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {zone.features.map((f, j) => (
                    <span key={j} style={{ background: 'rgba(0,0,0,0.3)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.7rem', opacity: 0.8 }}>{f}</span>
                  ))}
                </div>
                <p style={{ fontSize: '0.75rem', color: zone.color, fontFamily: 'Oswald', margin: 0 }}>AREA: {zone.area}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'coaches':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-red)' }}>
            ELITE <span style={{ color: 'var(--accent-yellow)' }}>COMMANDERS</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '3rem', letterSpacing: '2px' }}>
            12+ CERTIFIED PROFESSIONALS // SPECIALIZED TRAINING // RESULTS DRIVEN
          </p>

          {/* Coach Hero */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid rgba(255,0,0,0.3)'
          }}>
            <img
              src="/assets/coach_profile.png"
              alt="ENERGYM Elite Coaches"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', margin: 0 }}>TRAINED TO TRANSFORM</h3>
            </div>
          </div>

          {/* Coach Profiles */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { name: 'COMMANDER ARJUN', role: 'HEAD COACH', specialty: 'Strength & Conditioning', exp: '8+ Years', certs: ['NSCA-CPT', 'CrossFit L2'] },
              { name: 'COMMANDER PRIYA', role: 'FITNESS SPECIALIST', specialty: 'Functional Training', exp: '6+ Years', certs: ['ACE-CPT', 'TRX Certified'] },
              { name: 'COMMANDER RAJ', role: 'NUTRITION EXPERT', specialty: 'Body Recomposition', exp: '10+ Years', certs: ['ISSN', 'Precision Nutrition'] },
              { name: 'COMMANDER NEHA', role: 'CARDIO SPECIALIST', specialty: 'HIIT & Endurance', exp: '5+ Years', certs: ['AFAA', 'Spinning Certified'] },
              { name: 'COMMANDER VIKRAM', role: 'POWERLIFTING COACH', specialty: 'Competitive Lifting', exp: '12+ Years', certs: ['USAPL', 'IPF Certified'] },
              { name: 'COMMANDER SARA', role: 'MOBILITY EXPERT', specialty: 'Flexibility & Recovery', exp: '7+ Years', certs: ['FRC', 'Yoga Alliance'] }
            ].map((coach, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                padding: '2rem',
                borderRadius: '16px',
                borderTop: '4px solid var(--primary-red)',
                textAlign: 'center'
              }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, var(--primary-red), var(--accent-yellow))', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>🏋️</span>
                </div>
                <h4 style={{ fontFamily: 'Oswald', fontSize: '1.2rem', color: '#fff', marginBottom: '0.3rem' }}>{coach.name}</h4>
                <p style={{ color: 'var(--accent-yellow)', fontSize: '0.75rem', fontFamily: 'Oswald', marginBottom: '0.5rem' }}>{coach.role}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.5rem' }}>{coach.specialty}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--lightning-blue)', marginBottom: '1rem' }}>{coach.exp} Experience</p>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {coach.certs.map((c, j) => (
                    <span key={j} style={{ background: 'rgba(255,0,0,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.6rem' }}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'environment':
      return (
        <div style={{ color: '#fff', width: '100%', maxWidth: '1400px' }}>
          <h2 style={{ fontFamily: 'Oswald', fontSize: '3rem', marginBottom: '1rem', color: 'var(--lightning-blue)' }}>
            TECH <span style={{ color: 'var(--accent-yellow)' }}>ENVIRONMENT</span>
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '2rem', letterSpacing: '2px' }}>
            SMART GYM TECHNOLOGY // RGB ATMOSPHERE // DATA-DRIVEN FITNESS
          </p>

          {/* Environment Hero */}
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: '2px solid rgba(0,191,255,0.3)'
          }}>
            <img
              src="/assets/environment_tech.png"
              alt="ENERGYM Tech Environment"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <h3 style={{ fontFamily: 'Oswald', color: 'var(--accent-yellow)', margin: 0 }}>FUTURISTIC FITNESS ECOSYSTEM</h3>
            </div>
          </div>

          {/* Tech Features */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { title: 'RGB LIGHTING GRID', desc: 'Dynamic LED system that adapts to workout intensity. Heart-rate linked color zones for visual motivation.', icon: '💡', color: 'var(--primary-red)' },
              { title: 'DIGITAL DISPLAYS', desc: 'Large screens showing real-time workout metrics, motivational content, and zone-specific instructions.', icon: '📺', color: 'var(--lightning-blue)' },
              { title: 'SMART TRACKING', desc: 'Connected equipment with performance logging. Track every rep, set, and calorie automatically.', icon: '📊', color: 'var(--accent-yellow)' },
              { title: 'SOUND SYSTEM', desc: 'Directional audio grid with zone-specific playlists. High-energy beats calibrated for optimal performance.', icon: '🔊', color: 'var(--primary-red)' },
              { title: 'CLIMATE CONTROL', desc: 'Advanced HVAC maintaining optimal 68°F temperature. Fresh air circulation and humidity control.', icon: '❄️', color: 'var(--lightning-blue)' },
              { title: 'MEMBER APP', desc: 'Mobile app for workout tracking, class booking, and progress monitoring. Syncs with all equipment.', icon: '📱', color: 'var(--accent-yellow)' }
            ].map((tech, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                padding: '2rem',
                borderRadius: '16px',
                borderTop: `4px solid ${tech.color}`,
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{tech.icon}</span>
                <h4 style={{ fontFamily: 'Oswald', color: tech.color, marginBottom: '0.5rem' }}>{tech.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <div style={{ color: '#fff', textAlign: 'center', opacity: 0.5 }}>INTERFACE LOADING... Establishing secure connection to {id.toUpperCase()} datalink.</div>;
  }
};

// Page Template Component
const PortalPage = ({ id, label, icon: Icon, color, onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      padding: '4rem',
      position: 'relative',
      zIndex: 500,
      overflowY: 'auto'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <div style={{ padding: '1.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '28px', border: `1px solid ${color}33`, boxShadow: `0 0 30px ${color}11` }}>
          <Icon size={52} color={color} />
        </div>
        <div>
          <h1 style={{ fontFamily: 'Oswald', fontSize: '3.5rem', color: '#fff', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</h1>
          <p style={{ fontFamily: 'Inter', color: color, letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 900, marginTop: '0.2rem' }}>SYSTEM V4.0 // {id.toUpperCase()}_INTERFACE</p>
        </div>
      </div>
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
          letterSpacing: '1px'
        }}
      >
        <ArrowLeft size={22} /> BACK TO PORTAL
      </motion.button>
    </div>

    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem 8rem 1rem'
    }}>
      <SectionContent id={id} />

      {/* Decorative Background Icon */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'fixed', bottom: '-15%', right: '-5%', pointerEvents: 'none', zIndex: -1 }}
      >
        <Icon size={900} color={color} />
      </motion.div>
    </div>
  </motion.div>
);

const App = () => {
  const [isEntered, setIsEntered] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const menuItems = [
    { id: 'about', label: 'ABOUT US', icon: Dna, color: 'var(--primary-red)', desc: 'THE EVOLUTIONARY CORE' },
    { id: 'equipment', label: 'EQUIPMENT', icon: Component, color: 'var(--lightning-blue)', desc: 'KINETIC ARSENAL' },
    { id: 'facilities', label: 'FACILITIES', icon: Layers, color: 'var(--accent-yellow)', desc: 'STRUCTURAL ADVANTAGE' },
    { id: 'membership', label: 'MEMBERSHIP', icon: Diamond, color: '#FF00FF', desc: 'EXCLUSIVITY PROTOCOLS' },
    { id: 'coaches', label: 'COACHES', icon: Sword, color: 'var(--primary-red)', desc: 'ELITE COMMANDERS' },
    { id: 'overview', label: 'OVERVIEW', icon: Radar, color: 'var(--lightning-blue)', desc: 'SURVEILLANCE & DATA' },
    { id: 'transformation', label: 'TRANSFORMATION', icon: Activity, color: 'var(--accent-yellow)', desc: 'METAMORPHIC METRICS' },
    { id: 'environment', label: 'ENVIRONMENT', icon: Atom, color: '#00FF00', desc: 'SYSTEM ATMOSPHERE' },
    { id: 'contact', label: 'CONTACT US', icon: Wifi, color: '#fff', desc: 'SIGNAL ESTABLISHED' },
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{ position: 'fixed', inset: 0, zIndex: 100 }}
          >
            <Hero onEnter={() => setIsEntered(true)} />
          </motion.div>
        ) : activePage ? (
          <PortalPage
            key="page"
            {...menuItems.find(item => item.id === activePage)}
            onBack={() => setActivePage(null)}
          />
        ) : (
          <motion.div
            key="portal-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              minHeight: '100vh',
              width: '100vw',
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              position: 'relative',
              zIndex: 200
            }}
          >
            {/* Background Decorative Lines */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              backgroundImage: 'linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              pointerEvents: 'none'
            }} />

            {/* Header / Portal Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Target size={24} color="var(--primary-red)" />
              <h2 style={{
                fontFamily: 'Oswald',
                fontSize: '1.2rem',
                letterSpacing: '8px',
                color: '#fff',
                textTransform: 'uppercase'
              }}>
                ENERGYM PORTAL <span style={{ color: 'var(--primary-red)' }}>ONLINE</span>
              </h2>
            </motion.div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsEntered(false)}
              style={{
                position: 'absolute',
                top: '3rem',
                right: '4rem',
                background: 'rgba(255, 0, 0, 0.1)',
                border: '2px solid var(--primary-red)',
                borderRadius: '50%',
                padding: '0.8rem',
                cursor: 'pointer',
                color: 'var(--primary-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(255,0,0,0.2)',
                zIndex: 300
              }}
            >
              <X size={32} />
            </motion.button>

            {/* 3x3 Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.4rem',
              maxWidth: '1200px',
              width: '100%',
              marginTop: '4rem'
            }}>
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => setActivePage(item.id)}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.6), 0 0 10px ${item.color}22`,
                    zIndex: 10
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '2rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: `1px solid ${item.color}`,
                      borderRadius: '8px',
                      pointerEvents: 'none'
                    }}
                  />

                  <div style={{
                    marginBottom: '1.5rem',
                    padding: '1.2rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '20px',
                    boxShadow: `inset 0 0 20px ${item.color}11`
                  }}>
                    <item.icon size={40} color={item.color} />
                  </div>

                  <h3 style={{
                    fontFamily: 'Oswald',
                    fontSize: '1.6rem',
                    color: '#fff',
                    margin: '0 0 0.5rem 0',
                    letterSpacing: '2px'
                  }}>
                    {item.label}
                  </h3>

                  <p style={{
                    fontFamily: 'Inter',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.4)',
                    margin: 0,
                    letterSpacing: '1px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Brand Detail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2 }}
              style={{
                position: 'absolute',
                bottom: '3rem',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontFamily: 'Inter', fontSize: '0.7rem', letterSpacing: '4px', color: '#fff' }}>
                ENERGYM 4.0 // VERSION 1.0.4.PORTAL
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

