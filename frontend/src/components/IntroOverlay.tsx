import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HOLD_MS = 2400;

export default function IntroOverlay() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => setVisible(false), HOLD_MS);
        localStorage.setItem('overlay_shown', 'true');
        return () => clearTimeout(id);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className='fixed inset-0 z-100 bg-dark flex flex-col items-center justify-center pointer-events-none'
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                >
                    <motion.span
                        className='font-cormorant font-light text-ivory tracking-[0.15em]'
                        style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: 'easeOut',
                            delay: 0.3,
                        }}
                    >
                        M &amp; D
                    </motion.span>

                    <motion.div
                        className='my-6 h-px'
                        style={{ background: 'var(--color-gold)' }}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 160, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: 1,
                        }}
                    />

                    <motion.span
                        className='font-jost uppercase tracking-[0.35em] text-gold-light'
                        style={{ fontSize: '0.75rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 1.5,
                        }}
                    >
                        21. august 2027
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
