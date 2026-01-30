import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Instagram, MessageCircle, Phone, MapPin, Clock, Menu, X } from 'lucide-react';

// Professional Color Palette - Refined for Stealth/Luxury Look
const colors = {
    primaryYellow: '#F5C518',
    accentGold: '#D4A017',
    highlightYellow: '#FFD93D',
    charcoalDark: '#111111',
    charcoalDeep: '#050505',
    charcoalMedium: '#1A1A1A',
    charcoalLight: '#333333',
    textWhite: '#F0F0F0', // Slightly softer white/silver
    textGrey: '#757575', // Darker, professional grey (Steel)
    textDark: '#404040', // Even darker for contrast elements
    gridLine: '#F5C518', // Yellow grid lines
    energyGreen: '#39FF14'
};

// Custom hook for responsive design
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Hero = ({ onEnter, onMenuToggle, hasEntered, isMenuOpen, onPageSelect }) => {
    const [typewriterKey, setTypewriterKey] = useState(0);
    const { width } = useWindowSize();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Responsive breakpoints
    const isMobile = width <= 480;
    const isTablet = width <= 768 && width > 480;
    const isSmallMobile = width <= 360;
    const showMobileMenu = width < 768;

    useEffect(() => {
        const typeTimer = setInterval(() => {
            setTypewriterKey((prev) => prev + 1);
        }, 5000);

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(typeTimer);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Smooth mouse spring for spotlight
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    return (
        <div className="hero-root" style={{
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            overflowX: 'hidden', // Keep horizontal containment
            backgroundColor: colors.charcoalDeep,
            // Native body scroll is now used, removed overflowY: auto
        }}>
            {/* ==================== BACKGROUND ENGINEERING ==================== */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                overflow: 'hidden',
                background: `radial-gradient(circle at 50% 50%, #151515 0%, #000000 100%)`
            }}>
                {/* Noise Texture */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.08,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay'
                }} />

                {/* BRIGHTER GRID LINES */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.25, // Slightly reduced from 0.4 for balance
                    backgroundImage: `
            linear-gradient(${colors.gridLine} 1px, transparent 1px), 
            linear-gradient(90deg, ${colors.gridLine} 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
                }} />

                {/* === CORNER GLOWS - DESKTOP ONLY (removed from mobile for performance) === */}
                {/* Mobile top/bottom glows removed as requested */}


                {/* Ambient Center Glow - Desktop only for performance */}
                {!isMobile && (
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60vw',
                            height: '60vw',
                            background: `radial-gradient(circle, ${colors.primaryYellow}22 0%, transparent 60%)`,
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                            mixBlendMode: 'screen',
                            pointerEvents: 'none'
                        }}
                    />
                )}

                {/* Interactive Mouse Spotlight */}
                {!isMobile && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            x: springX,
                            y: springY,
                            translateX: '-50%',
                            translateY: '-50%',
                            width: '30vw',
                            height: '30vw',
                            background: `radial-gradient(circle, ${colors.primaryYellow}15 0%, transparent 70%)`,
                            borderRadius: '50%',
                            filter: 'blur(80px)',
                            pointerEvents: 'none',
                            mixBlendMode: 'screen'
                        }}
                    />
                )}

                {/* Deep Vignette */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 30%, #000000 100%)',
                    pointerEvents: 'none',
                    opacity: 0.9
                }} />
            </div>

            {/* Hamburger Menu - Mobile Only Control */}
            {showMobileMenu && (
                <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onMenuToggle} // Toggles menu
                    style={{
                        position: 'fixed',
                        top: isSmallMobile ? '0.75rem' : '1rem',
                        right: isSmallMobile ? '0.75rem' : '1rem',
                        zIndex: 1000,
                        background: 'rgba(26, 26, 26, 0.95)',
                        border: `1px solid ${colors.primaryYellow}`,
                        borderRadius: '8px',
                        padding: isSmallMobile ? '0.5rem' : '0.6rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isMenuOpen ? (
                        <X size={isSmallMobile ? 20 : 24} color={colors.primaryYellow} strokeWidth={2.5} />
                    ) : (
                        <Menu size={isSmallMobile ? 20 : 24} color={colors.primaryYellow} strokeWidth={2.5} />
                    )}
                </motion.button>
            )}

            <div style={{
                position: 'relative',
                zIndex: 10,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: isMobile ? '8vh' : isTablet ? '12vh' : '18vh',
                paddingLeft: isMobile ? '0.75rem' : '1rem',
                paddingRight: isMobile ? '0.75rem' : '1rem',
                textAlign: 'center',
            }}>
                {/* Desktop Menu Buttons - At Top, scrolls with content */}
                {!showMobileMenu && hasEntered && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            top: '30px',
                            left: 0,
                            right: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0 2rem'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            gap: '2.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            paddingBottom: '1rem'
                        }}>
                            {[
                                { id: 'about', label: 'ABOUT US' },
                                { id: 'equipment', label: 'EQUIPMENT' },
                                { id: 'facilities', label: 'FACILITIES' },
                                { id: 'membership', label: 'MEMBERSHIP' },
                                { id: 'coaches', label: 'COACHES' },
                                { id: 'overview', label: 'OVERVIEW' },
                                { id: 'transformation', label: 'TRANSFORMATION' },
                                { id: 'environment', label: 'ENVIRONMENT' },
                                { id: 'contact', label: 'CONTACT US' }
                            ].map((item) => (
                                <motion.div
                                    key={item.id}
                                    onClick={() => onPageSelect && onPageSelect(item.id)}
                                    whileHover={{
                                        color: '#39FF14'
                                    }}
                                    style={{
                                        fontFamily: 'Oswald',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: '#e0e0e0',
                                        cursor: 'pointer',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {item.label}
                                </motion.div>
                            ))}
                        </div>
                        {/* Yellow border line below menu */}
                        <div style={{
                            width: '100%',
                            height: '1px',
                            background: colors.primaryYellow
                        }} />
                    </motion.div>
                )}

                {/* Main Title */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                        y: hasEntered ? (isMobile ? 0 : 80) : 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
                    style={{ position: 'relative' }}
                >
                    <h1 style={{
                        fontSize: isSmallMobile ? '3rem' : isMobile ? '3.5rem' : isTablet ? '6rem' : '9rem',
                        margin: 0,
                        lineHeight: 0.9,
                        color: colors.textWhite,
                        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                        letterSpacing: isSmallMobile ? '2px' : isMobile ? '3px' : '5px',
                        fontWeight: 800, // Extra Bold
                        padding: isMobile ? '0 0.5rem' : 0,
                        textShadow: '0 10px 40px rgba(0,0,0,0.8)'
                    }}>
                        ENERGYM <span style={{
                            color: colors.primaryYellow,
                            textShadow: `0 0 40px ${colors.primaryYellow}60, 0 0 80px ${colors.primaryYellow}30`
                        }}>4.0</span>
                    </h1>
                    {/* Underline Accent */}
                    <div style={{
                        position: 'absolute',
                        bottom: isMobile ? '-10px' : '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isMobile ? '60px' : '120px',
                        height: isMobile ? '4px' : '6px',
                        background: colors.primaryYellow,
                        boxShadow: isMobile ? 'none' : `0 0 20px ${colors.primaryYellow}`
                    }} />
                </motion.div>

                {/* Typewriter Subtitle - New Stylish Font */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: hasEntered ? (isMobile ? 0 : 80) : 0
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
                    style={{
                        margin: isMobile ? '1.5rem 0' : '3rem 0',
                        minHeight: isMobile ? '1.5rem' : '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: isMobile ? '0 0.5rem' : 0
                    }}
                >
                    <div style={{
                        background: '#111',
                        border: `1px solid ${colors.charcoalLight}`,
                        borderRadius: '0px',
                        padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 2.5rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        transform: 'skewX(-10deg)' // Stylish decorative skew
                    }}>
                        <motion.div
                            style={{
                                fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : isTablet ? '0.9rem' : '1.2rem',
                                maxWidth: '900px',
                                fontFamily: "'Rajdhani', sans-serif", // STYLISH TECH FONT
                                fontWeight: 700,
                                letterSpacing: isSmallMobile ? '1.5px' : isMobile ? '2px' : '4px',
                                textTransform: 'uppercase',
                                color: colors.textGrey,
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                transform: 'skewX(10deg)' // Counter skew to fix text
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
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
                                            width: '4px',
                                            height: '1em',
                                            background: colors.primaryYellow,
                                            marginLeft: '10px',
                                            display: 'inline-block',
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Button */}
                {/* CTA Button - Collapsible Container */}
                {!isMobile && (
                    <motion.div
                        animate={{
                            height: hasEntered ? 0 : 'auto',
                            opacity: hasEntered ? 0 : 1,
                            marginTop: hasEntered ? 0 : '1.5rem'
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 50px ${colors.primaryYellow}80`,
                                backgroundColor: colors.highlightYellow,
                                color: '#000'
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onEnter}
                            style={{
                                padding: '1.5rem 5rem',
                                background: colors.primaryYellow,
                                border: 'none',
                                borderRadius: '0px',
                                color: '#000',
                                fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                letterSpacing: '4px',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: `0 10px 30px rgba(0,0,0,0.5)`
                            }}
                        >
                            ENTER THE GYM
                        </motion.button>
                    </motion.div>
                )}

                {/* Taglines Section with Stylish 'Outfit' Font */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    style={{
                        marginTop: isMobile ? '0.5rem' : '4rem',
                        textAlign: 'center',
                        padding: isMobile ? '1rem' : '2rem 2rem',
                        maxWidth: isMobile ? '320px' : '650px'
                    }}
                >
                    <p style={{
                        fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.2rem' : isTablet ? '1.6rem' : '2.2rem',
                        color: colors.textWhite,
                        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                        lineHeight: 1.4,
                        marginBottom: isMobile ? '0.5rem' : '1rem',
                        fontWeight: 400,
                        letterSpacing: '1px'
                    }}>
                        WHERE <span style={{ color: colors.primaryYellow, fontWeight: 700 }}>STRENGTH</span> MEETS SCIENCE.
                    </p>
                    <p style={{
                        fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : isTablet ? '1rem' : '1.1rem',
                        color: colors.textGrey,
                        fontFamily: "'Outfit', sans-serif", // STYLISH BODY FONT
                        fontWeight: 400, // Lighter weight looks more premium
                        lineHeight: 1.6,
                        letterSpacing: '1px'
                    }}>
                        Transform your body. Elevate your mind. <br className={isMobile ? '' : 'hidden'} />Unleash your <span style={{ color: colors.textWhite, fontWeight: 700 }}>POTENTIAL</span>.
                    </p>
                </motion.div>


                {/* Why Choose ENERGYM Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        marginTop: isMobile ? '2rem' : '8rem',
                        padding: isSmallMobile ? '2rem 1.25rem' : isMobile ? '2.5rem 1.5rem' : isTablet ? '3rem 2rem' : '5rem 4rem',
                        background: '#0A0A0A',
                        border: `1px solid ${colors.charcoalMedium}`,
                        borderRadius: '0px',
                        maxWidth: '1400px',
                        width: isMobile ? '100%' : '95%',
                        marginBottom: isMobile ? '2rem' : '6rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <h2 style={{
                        fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : isTablet ? '3rem' : '4rem',
                        color: colors.textWhite,
                        marginBottom: isMobile ? '2rem' : '4rem',
                        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                        fontWeight: 800,
                        textAlign: 'center',
                        lineHeight: 1,
                        letterSpacing: '3px',
                    }}>
                        WHY CHOOSE <span style={{ color: colors.primaryYellow }}>ENERGYM?</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: isMobile ? '1.5rem' : '2.5rem',
                        textAlign: 'left'
                    }}>
                        {[
                            {
                                label: 'PRO EQUIPMENT',
                                desc: 'Experience the pinnacle of fitness engineering with our industrial-strength gear from Technogym & Rogue. Every machine is calibrated for maximum biomechanical efficiency.',
                            },
                            {
                                label: 'EXPERT COACHES',
                                desc: 'Train under the guidance of certified professionals in biomechanics and performance optimization. Our coaches analyze your form and push you beyond limits.',
                            },
                            {
                                label: 'SCIENTIFIC RECOVERY',
                                desc: 'Elevate your performance with our data-driven recovery zone. Featuring myofascial release tools and bio-regulation systems designed for optimal regeneration.',
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5, borderColor: colors.primaryYellow }}
                                style={{
                                    padding: isSmallMobile ? '1.5rem' : isMobile ? '1.75rem' : '3rem',
                                    background: '#111',
                                    border: '1px solid #222',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <h3 style={{
                                    fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.4rem' : '1.8rem',
                                    fontWeight: 800,
                                    color: colors.textWhite,
                                    fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                                    letterSpacing: '1px',
                                    marginBottom: isMobile ? '0.75rem' : '1rem',
                                    borderBottom: `2px solid ${colors.primaryYellow}`,
                                    paddingBottom: '0.5rem',
                                    display: 'inline-block',
                                    width: 'fit-content'
                                }}>{item.label}</h3>

                                <p style={{
                                    fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1rem',
                                    lineHeight: 1.7,
                                    color: colors.textGrey,
                                    fontFamily: "'Outfit', sans-serif", // Stylish Font
                                    fontWeight: 300, // Lighter, stylish look
                                    flex: 1,
                                    marginTop: '0.5rem'
                                }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.button
                            onClick={() => onPageSelect && onPageSelect('membership')}
                            whileHover={{
                                backgroundColor: colors.highlightYellow,
                                scale: 1.05,
                                color: '#000'
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                marginTop: isMobile ? '2.5rem' : '4.5rem',
                                padding: isSmallMobile ? '1rem 2.5rem' : isMobile ? '1.1rem 3rem' : '1.25rem 5rem',
                                background: 'transparent',
                                border: `3px solid ${colors.primaryYellow}`,
                                color: colors.primaryYellow,
                                fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                                fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.4rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                borderRadius: '0px'
                            }}
                        >
                            JOIN NOW
                        </motion.button>
                    </div>
                </motion.div>

                {/* Mindset Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        width: '100%',
                        maxWidth: '1400px',
                        marginBottom: isMobile ? '2rem' : '10rem',
                        padding: isSmallMobile ? '2rem 1.25rem' : isMobile ? '2.5rem 1.5rem' : '5rem 4rem',
                        background: '#080808',
                        borderTop: `1px solid ${colors.charcoalMedium}`,
                        borderBottom: `1px solid ${colors.charcoalMedium}`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <h2 style={{
                        fontSize: isSmallMobile ? '1.5rem' : isMobile ? '2rem' : isTablet ? '3rem' : '4.5rem',
                        fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                        fontWeight: 800,
                        color: colors.textWhite,
                        marginBottom: isMobile ? '2rem' : '5rem',
                        textAlign: 'center',
                        letterSpacing: '4px',
                        lineHeight: 1
                    }}>
                        THE <span style={{ color: colors.primaryYellow }}>MINDSET</span> CODE
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '3rem' : '6rem',
                        position: 'relative'
                    }}>
                        {/* Motivation */}
                        <motion.div
                            initial={{ x: isMobile ? 0 : -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                textAlign: isMobile ? 'center' : 'right',
                                borderRight: isMobile ? 'none' : `1px solid ${colors.charcoalLight}`,
                                paddingRight: isMobile ? 0 : '3rem'
                            }}
                        >
                            <h3 style={{
                                fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '3rem',
                                color: colors.textWhite,
                                fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                                marginBottom: isMobile ? '0.75rem' : '1rem',
                                letterSpacing: '2px'
                            }}>MOTIVATION</h3>
                            <p style={{
                                fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1.1rem',
                                lineHeight: 1.6,
                                color: colors.textGrey,
                                fontFamily: "'Outfit', sans-serif", // Stylish Font
                                fontWeight: 300
                            }}>
                                The spark that ignites the engine. It's the feeling you get when you see the goal.
                                <span style={{ color: colors.primaryYellow, fontWeight: 700 }}> It gets you through the front door.</span>
                            </p>
                        </motion.div>

                        {/* Discipline */}
                        <motion.div
                            initial={{ x: isMobile ? 0 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                textAlign: isMobile ? 'center' : 'left',
                                paddingLeft: isMobile ? 0 : '3rem'
                            }}
                        >
                            <h3 style={{
                                fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '3rem',
                                color: colors.primaryYellow,
                                fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                                marginBottom: isMobile ? '0.75rem' : '1rem',
                                letterSpacing: '2px'
                            }}>DISCIPLINE</h3>
                            <p style={{
                                fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1.1rem',
                                lineHeight: 1.6,
                                color: colors.textGrey,
                                fontFamily: "'Outfit', sans-serif", // Stylish Font
                                fontWeight: 300
                            }}>
                                The iron that maintains the machine. It's the commitment when the feeling is gone.
                                <span style={{ color: colors.textWhite, fontWeight: 700 }}> It gets you through the war.</span>
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            marginTop: isMobile ? '2.5rem' : '6rem',
                            textAlign: 'center',
                            padding: isMobile ? '2rem 1rem' : '3rem',
                            background: '#0D0D0D',
                            border: `1px solid ${colors.charcoalLight}`
                        }}
                    >
                        <p style={{
                            fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : isTablet ? '1.4rem' : '1.8rem',
                            fontStyle: 'normal',
                            color: colors.textWhite,
                            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                            letterSpacing: isMobile ? '1px' : '3px',
                            lineHeight: 1.5,
                            opacity: 0.9,
                            margin: 0
                        }}>
                            "MOTIVATION IS THE FUEL. DISCIPLINE IS THE ENGINE.{isMobile ? ' ' : <br />}
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
                        marginTop: isMobile ? '1rem' : '2rem',
                        marginBottom: isMobile ? '1rem' : '6rem',
                        padding: isSmallMobile ? '2rem 1.25rem' : isMobile ? '2.5rem 1.5rem' : '4rem 3rem',
                        background: '#050505',
                        borderTop: `4px solid ${colors.primaryYellow}`,
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: isMobile ? '2rem' : '3rem',
                        textAlign: 'left',
                        zIndex: 10
                    }}
                >
                    {/* Contact Details */}
                    <div>
                        <h3 style={{
                            color: colors.primaryYellow,
                            fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.6rem',
                            marginBottom: isMobile ? '0.75rem' : '1.5rem',
                            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                            letterSpacing: '2px'
                        }}>CONNECT WITH US</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1.2rem' }}>
                            <a href="#" style={{ color: colors.textWhite, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isMobile ? '0.6rem' : '1rem', transition: 'all 0.3s' }}>
                                <MessageCircle size={isMobile ? 16 : 22} color="#25D366" />
                                <span style={{ fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>WhatsApp: +91 91012 34567</span>
                            </a>
                            <a href="#" style={{ color: colors.textWhite, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isMobile ? '0.6rem' : '1rem', transition: 'all 0.3s' }}>
                                <Instagram size={isMobile ? 16 : 22} color={colors.textGrey} />
                                <span style={{ fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>Instagram: @energym4.0_tinsukia</span>
                            </a>
                            <div style={{ color: colors.textWhite, display: 'flex', alignItems: 'center', gap: isMobile ? '0.6rem' : '1rem' }}>
                                <Phone size={isMobile ? 16 : 22} color={colors.textGrey} />
                                <span style={{ fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>Call: +91 374 233 4567</span>
                            </div>
                            <div style={{ color: colors.textWhite, display: 'flex', alignItems: 'flex-start', gap: isMobile ? '0.6rem' : '1rem' }}>
                                <MapPin size={isMobile ? 16 : 22} color={colors.primaryYellow} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <address style={{ fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.85rem' : '1rem', fontFamily: "'Outfit', sans-serif", lineHeight: 1.5, fontStyle: 'normal', color: colors.textGrey, fontWeight: 400 }}>
                                    A.T. Road, Near Thana Chariali,<br />
                                    Above Style Baazar, Tinsukia, Assam 786125
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Operational Hours */}
                    <div>
                        <h3 style={{
                            color: colors.textWhite,
                            fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.6rem',
                            marginBottom: isMobile ? '0.75rem' : '1.5rem',
                            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                            letterSpacing: '2px'
                        }}>OPERATIONAL HOURS</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.5rem' : '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${colors.charcoalLight}`, paddingBottom: '0.6rem' }}>
                                <span style={{ color: colors.textGrey, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : undefined }}>MON - FRI</span>
                                <span style={{ color: colors.textWhite, fontFamily: "'Bebas Neue', sans-serif", fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1.1rem', letterSpacing: '1px' }}>05:30 AM - 10:00 PM</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${colors.charcoalLight}`, paddingBottom: '0.6rem' }}>
                                <span style={{ color: colors.textGrey, fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : undefined }}>SATURDAY</span>
                                <span style={{ color: colors.textWhite, fontFamily: "'Bebas Neue', sans-serif", fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1.1rem', letterSpacing: '1px' }}>06:00 AM - 08:30 PM</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem' }}>
                                <span style={{ color: colors.primaryYellow, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : undefined }}>SUNDAY</span>
                                <span style={{ color: colors.primaryYellow, fontFamily: "'Bebas Neue', sans-serif", fontWeight: 700, fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1.1rem', letterSpacing: '1px' }}>CLOSED</span>
                            </div>
                            <div style={{ marginTop: isMobile ? '0.5rem' : '1rem', padding: isMobile ? '0.75rem' : '1rem', background: colors.charcoalMedium, borderLeft: `3px solid ${colors.primaryYellow}` }}>
                                <p style={{ color: colors.textGrey, fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.85rem', lineHeight: 1.5, fontFamily: "'Outfit', sans-serif", margin: 0, fontWeight: 300 }}>
                                    <Clock size={isMobile ? 12 : 14} style={{ marginRight: '6px', verticalAlign: 'middle', color: colors.primaryYellow }} />
                                    Early morning sessions (05:30 AM) are exclusively for advanced training modules.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <h3 style={{
                            color: colors.textWhite,
                            fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.6rem',
                            marginBottom: isMobile ? '0.75rem' : '1.5rem',
                            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
                            letterSpacing: '2px'
                        }}>FIND US</h3>
                        <p style={{ color: colors.textGrey, lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '0.95rem', fontWeight: 300 }}>
                            ENERGYM 4.0 is not just a gym; it's a performance lab. Spanning over 15,000 sq. ft., we are the largest training facility in Upper Assam, equipped with scientific-grade machinery and elite coaching staff.
                        </p>
                        <div style={{ marginTop: isMobile ? '1rem' : '2rem' }}>
                            <p style={{ color: colors.textWhite, fontWeight: 700, fontFamily: "'Bebas Neue', 'Oswald', sans-serif", letterSpacing: isMobile ? '1px' : '3px', fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.2rem' }}>
                                #FUELING<span style={{ color: colors.primaryYellow }}>TINSUKIA</span>
                            </p>
                        </div>
                    </div>
                </motion.footer>


            </div>

            {/* Google Maps Shortcut - Visible on all views */}
            <motion.a
                href="https://maps.google.com/?q=Energym+4.0+Tinsukia+Assam"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.05, x: 5 }}
                style={{
                    position: 'fixed',
                    bottom: isMobile ? '4rem' : '2.5rem',
                    left: isMobile ? '1rem' : '3rem',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '0.5rem' : '1rem',
                    textDecoration: 'none',
                    background: colors.charcoalDark,
                    padding: isMobile ? '0.6rem 1rem' : '0.8rem 1.5rem',
                    border: `2px solid ${colors.primaryYellow}`,
                    boxShadow: isMobile ? 'none' : `0 0 15px ${colors.primaryYellow}30`
                }}
            >
                <div style={{
                    background: colors.primaryYellow,
                    padding: isMobile ? '0.35rem' : '0.5rem',
                    display: 'flex'
                }}>
                    <MapPin size={isMobile ? 14 : 18} color={colors.charcoalDeep} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, color: colors.textWhite, fontFamily: "'Bebas Neue', 'Oswald', sans-serif", fontSize: isMobile ? '0.7rem' : '0.9rem', letterSpacing: '1px' }}>FIND US</p>
                    {!isMobile && <p style={{ margin: 0, color: colors.textGrey, fontFamily: "'Rajdhani', sans-serif", fontSize: '0.7rem', fontWeight: 600 }}>TINSUKIA // SECTOR 04</p>}
                </div>
            </motion.a>

        </div>
    );
};

export default Hero;
