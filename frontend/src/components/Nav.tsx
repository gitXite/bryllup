import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Gift } from 'lucide-react';

const links = [
    { href: '#nedtelling', label: 'Nedtelling' },
    { href: '#program', label: 'Program' },
    { href: '#informasjon', label: 'Informasjon' },
    { href: '#rsvp', label: 'Svar' },
    { href: '/gaveliste', label: 'Gaveliste', icon: true },
];

function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <nav
                className='fixed top-0 max-w-screen inset-x-0 z-50 flex items-center border border-transparent justify-between px-15 py-7 transition-all duration-300'
                style={
                    scrolled
                        ? {
                              background: 'rgba(250, 247, 242, 0.9)',
                              backdropFilter: 'blur(12px)',
                              borderBottom: '1px solid rgba(184, 151, 90, 0.2)',
                          }
                        : undefined
                }
            >
                <a
                    href='#hero'
                    className='font-cormorant text-dark text-2xl font-normal tracking-[0.08em] bg-transparent border-none cursor-pointer p-0'
                >
                    M &amp; D
                </a>

                {/* Desktop links */}
                <ul className='hidden md:flex gap-10 list-none'>
                    {links.map(({ href, label, icon }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className='flex text-xs tracking-[0.25em] uppercase text-muted
                           bg-transparent border-none cursor-pointer p-0
                           hover:text-gold transition-colors duration-200'
                            >
                                {icon ? (
                                    <span className='flex gap-1'>
                                        {label}
                                        <Gift size={14} />
                                    </span>
                                ) : (
                                    <span>{label}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className='md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1'
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label='Meny'
                >
                    <span className='block w-6 h-px bg-dark transition-all duration-300' />
                    <span className='block w-6 h-px bg-dark transition-all duration-300' />
                    <span className='block w-4 h-px bg-dark transition-all duration-300' />
                </button>
            </nav>

            {/* Mobile fullscreen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className='fixed max-w-screen inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 md:hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {links.map(({ href, label }, i) => (
                            <motion.button
                                key={href}
                                className='font-cormorant text-ivory text-4xl font-light italic tracking-wide
                           bg-transparent border-none cursor-pointer hover:text-gold transition-colors duration-200'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.06,
                                    duration: 0.4,
                                    ease: 'easeOut',
                                }}
                                onClick={() => {
                                    href[0] == '#' ? scrollTo(href) : navigate('/gaveliste');
                                    setMenuOpen(false);
                                }}
                            >
                                {label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
