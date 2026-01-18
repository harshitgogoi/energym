import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const images = [
  '/images/gym1.png',
  '/images/gym2.png',
  '/images/gym3.png',
  '/images/gym4.png'
];

const Hero = ({ onEnter }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    const typeTimer = setInterval(() => {
      setTypewriterKey((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(slideTimer);
      clearInterval(typeTimer);
    };
  }, []);

  return (
    <div className="hero-root" style={{
      height: '100vh',
      width: '100vw',
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden',
      backgroundColor: '#000',
    }}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'fixed', // Fixed so it doesn't scroll away
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentSlide]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh', // Allow growth properly
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align to top to allow explicit spacing
        paddingTop: '15vh', // Increased shift for larger top gap
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textAlign: 'center',
      }}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: '6rem',
            margin: 0,
            lineHeight: 1,
            color: '#fff',
            textShadow: '0 0 20px rgba(255,0,0,0.5)'
          }}
        >
          ENERGYM <span style={{ color: 'var(--accent-yellow)' }}>4.0</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            margin: '1.5rem 0',
            minHeight: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.p
            style={{
              fontSize: '1.2rem',
              maxWidth: '900px',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              letterSpacing: '6px',
              textTransform: 'uppercase',
              color: 'var(--accent-yellow)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
            }}
          >
            {/* Looping Typewriter */}
            <AnimatePresence mode="wait">
              <motion.div
                key={typewriterKey}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                {"LARGEST TRAINING FACILITY IN TINSUKIA".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{ opacity: 1, display: 'inline-block' }}
                    transition={{
                      duration: 0.01,
                      delay: index * 0.05,
                      ease: "linear"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                  style={{
                    width: '3px',
                    height: '1.2em',
                    background: 'var(--primary-red)',
                    marginLeft: '4px',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="btn-portal"
          style={{ marginTop: '2rem' }}
        >
          ENTER THE ENERGY
        </motion.button>

        {/* Why Choose Energym Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            marginTop: '5rem', // Reduced gap (shifted up)
            padding: '4rem 2rem',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            maxWidth: '1400px', // Wider container for 3 cards in row
            width: '95%',
            marginBottom: '6rem',
            zIndex: 10
          }}
        >
          <h2 style={{
            fontSize: '3rem',
            color: 'var(--accent-yellow)',
            marginBottom: '3rem',
            fontFamily: 'Montserrat',
            fontWeight: 900,
            textAlign: 'center'
          }}>
            WHY CHOOSE ENERGYM?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Force 3 columns in one row
            gap: '2rem',
            textAlign: 'left'
          }}>
            {[
              {
                label: 'PRO EQUIPMENT',
                desc: 'Experience the pinnacle of fitness engineering with our industrial-strength gear from Technogym & Rogue. Every machine is calibrated for maximum biomechanical efficiency, ensuring your workout is not just hard, but scientifically superior. Built for souls who refuse to compromise on quality.',
                color: 'var(--primary-red)'
              },
              {
                label: 'EXPERT COACHES',
                desc: 'Train under the guidance of master tacticians in bio-mechanics and performance optimization. Our commanders don\'t just count reps; they analyze your form, optimize your output, and push you beyond your perceived limits with military precision.',
                color: 'var(--lightning-blue)'
              },
              {
                label: 'SCIENTIFIC RECOVERY',
                desc: 'Elevate your performance with our data-driven recovery zone. Featuring cryotherapy, myofascial release tools, and bio-regulation systems designed to repair tissue faster and optimize neural efficiency. Don\'t just train; evolve through superior regeneration.',
                color: 'var(--accent-yellow)'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                style={{
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderTop: `6px solid ${item.color}`, // Changed to top for better look in row
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: `3px solid ${item.color}`,
                      borderTopColor: 'transparent'
                    }}
                  />
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: 'Oswald',
                    letterSpacing: '1px',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.label}
                  </h3>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Inter',
                  flex: 1
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.button
              whileHover={{
                backgroundColor: 'var(--accent-yellow)',
                color: '#000',
                boxShadow: '0 0 50px var(--accent-yellow)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: '4rem',
                padding: '1.4rem 5rem',
                background: 'transparent',
                border: '3px solid var(--accent-yellow)',
                color: 'var(--accent-yellow)',
                fontFamily: 'Montserrat',
                fontSize: '1.4rem',
                fontWeight: '900',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              JOIN US NOW
            </motion.button>
          </div>
        </motion.div>

        {/* Motivation & Discipline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            width: '100%',
            maxWidth: '1400px',
            marginBottom: '10rem',
            padding: '4rem 2rem',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.8) 100%)',
            backdropFilter: 'blur(30px)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,0,0,0.03) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <h2 style={{
            fontSize: '3.5rem',
            fontFamily: 'Montserrat',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '4rem',
            textAlign: 'center',
            letterSpacing: '2px'
          }}>
            THE <span style={{ color: 'var(--primary-red)' }}>MINDSET</span> CODE
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            position: 'relative'
          }}>
            {/* Motivation */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                textAlign: 'right',
                padding: '2rem',
                borderRight: '2px solid rgba(0, 191, 255, 0.2)'
              }}
            >
              <h3 style={{
                fontSize: '2.5rem',
                color: 'var(--lightning-blue)',
                fontFamily: 'Oswald',
                marginBottom: '1.5rem'
              }}>MOTIVATION</h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Inter'
              }}>
                The spark that ignites the engine. It's the feeling you get when you see the goal.
                <span style={{ color: '#fff', fontWeight: 'bold' }}> It gets you through the front door.</span>
              </p>
              <div style={{
                marginTop: '1.5rem',
                height: '4px',
                background: 'var(--lightning-blue)',
                width: '40%',
                marginLeft: 'auto',
                boxShadow: '0 0 15px var(--lightning-blue)'
              }} />
            </motion.div>

            {/* Discipline */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                textAlign: 'left',
                padding: '2rem'
              }}
            >
              <h3 style={{
                fontSize: '2.5rem',
                color: 'var(--primary-red)',
                fontFamily: 'Oswald',
                marginBottom: '1.5rem'
              }}>DISCIPLINE</h3>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Inter'
              }}>
                The iron that maintains the machine. It's the commitment when the feeling is gone.
                <span style={{ color: '#fff', fontWeight: 'bold' }}> It gets you through the war.</span>
              </p>
              <div style={{
                marginTop: '1.5rem',
                height: '4px',
                background: 'var(--primary-red)',
                width: '100%',
                boxShadow: '0 0 20px var(--primary-red)'
              }} />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              marginTop: '5rem',
              textAlign: 'center',
              padding: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <p style={{
              fontSize: '1.8rem',
              fontStyle: 'italic',
              color: 'var(--accent-yellow)',
              fontFamily: 'Oswald',
              letterSpacing: '1px'
            }}>
              "MOTIVATION IS THE FUEL. DISCIPLINE IS THE ENGINE. <br />
              AT ENERGYM 4.0, WE BUILD THE ENGINE."
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Section */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            width: '100%',
            maxWidth: '1400px',
            marginTop: '2rem',
            marginBottom: '6rem',
            padding: '4rem 2rem',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            borderTop: '4px solid var(--primary-red)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            textAlign: 'left',
            zIndex: 10
          }}
        >
          {/* Contact Details */}
          <div>
            <h3 style={{ color: 'var(--primary-red)', fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'Oswald' }}>CONNECT WITH THE ENERGY</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}>
                <MessageCircle size={24} color="#25D366" />
                <span style={{ fontSize: '1.1rem', fontFamily: 'Inter' }}>WhatsApp: +91 91012 34567</span>
              </a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}>
                <Instagram size={24} color="#E1306C" />
                <span style={{ fontSize: '1.1rem', fontFamily: 'Inter' }}>Instagram: @energym4.0_tinsukia</span>
              </a>
              <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone size={24} color="var(--lightning-blue)" />
                <span style={{ fontSize: '1.1rem', fontFamily: 'Inter' }}>Call: +91 374 233 4567</span>
              </div>
              <div style={{ color: '#fff', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin size={24} color="var(--primary-red)" />
                <address style={{ fontSize: '1.1rem', fontFamily: 'Inter', lineHeight: 1.5, fontStyle: 'normal' }}>
                  A.T. Road, Near Thana Chariali,<br />
                  Above Style Baazar, Tinsukia, Assam 786125
                </address>
              </div>
            </div>
          </div>

          {/* Operational Hours */}
          <div>
            <h3 style={{ color: 'var(--accent-yellow)', fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'Oswald' }}>OPERATIONAL HOURS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat', fontWeight: 700 }}>MON - FRI</span>
                <span style={{ color: '#fff', fontFamily: 'Oswald', fontSize: '1.1rem' }}>05:30 AM - 10:00 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat', fontWeight: 700 }}>SATURDAY</span>
                <span style={{ color: '#fff', fontFamily: 'Oswald', fontSize: '1.1rem' }}>06:00 AM - 08:30 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--primary-red)', fontFamily: 'Montserrat', fontWeight: 900 }}>SUNDAY</span>
                <span style={{ color: 'var(--primary-red)', fontFamily: 'Oswald', fontWeight: 900, fontSize: '1.1rem' }}>CLOSED</span>
              </div>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid var(--accent-yellow)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ color: 'var(--accent-yellow)', fontSize: '0.9rem', lineHeight: 1.4, fontFamily: 'Inter' }}>
                  <Clock size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Early morning sessions (05:30 AM) are exclusively for advanced training modules.
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'Oswald' }}>COMMAND CENTER</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontFamily: 'Inter', fontSize: '1rem' }}>
              ENERGYM 4.0 is not just a gym; it's a performance lab. Spanning over 15,000 sq. ft., we are the largest training facility in Upper Assam, equipped with scientific-grade machinery and elite coaching staff.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#fff', fontWeight: 900, fontFamily: 'Oswald', letterSpacing: '2px', fontSize: '1.2rem' }}>
                #FUELING<span style={{ color: 'var(--primary-red)' }}>TINSUKIA</span>
              </p>
            </div>
          </div>
        </motion.footer>


      </div>

      {/* Google Maps Shortcut */}
      <motion.a
        href="https://maps.google.com/?q=Energym+4.0+Tinsukia+Assam"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1, x: 5 }}
        style={{
          position: 'fixed',
          bottom: '2.5rem',
          left: '3rem',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          textDecoration: 'none',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(10px)',
          padding: '0.8rem 1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--primary-red)',
          boxShadow: '0 0 20px rgba(255,0,0,0.2)'
        }}
      >
        <div style={{
          background: 'var(--primary-red)',
          padding: '0.5rem',
          borderRadius: '8px',
          display: 'flex'
        }}>
          <MapPin size={18} color="#fff" />
        </div>
        <div style={{ textAlign: 'left' }}>
          <p style={{ margin: 0, color: '#fff', fontFamily: 'Oswald', fontSize: '0.9rem', letterSpacing: '1px' }}>FIND THE SECTOR</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter', fontSize: '0.6rem' }}>TINSUKIA // SECTOR 04</p>
        </div>
      </motion.a>

      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '1rem',
        zIndex: 10
      }}>
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: '40px',
              height: '4px',
              background: idx === currentSlide ? 'var(--primary-red)' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
