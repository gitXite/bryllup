import { motion } from 'motion/react';

interface Props {
    name1: string;
    name2: string;
    date: string;
    location: string;
}

function fadeUp(delay: number) {
    return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeOut', delay },
    } as const;
}

function Ring({ size, delay }: { size: number; delay: number }) {
    return (
        <motion.div
            className='absolute rounded-full border border-[rgba(184,151,90,0.1)] pointer-events-none'
            style={{
                width: size,
                height: size,
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut', delay }}
        />
    );
}

export default function Hero({ name1, name2, date, location }: Props) {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-24 overflow-hidden'
        >
            <div
                className='absolute inset-0 pointer-events-none'
                style={{
                    background: `
            radial-gradient(ellipse 60% 50% at 50% 0%,  rgba(184,151,90,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 80% 80%, rgba(184,151,90,0.05) 0%, transparent 60%)
          `,
                }}
            />

            <Ring size={600} delay={3} />
            <Ring size={800} delay={3.2} />

            <motion.p
                className='uppercase tracking-[0.4em] text-gold text-xs'
                {...fadeUp(2.8)}
            >
                Vi gleder oss til å feire med deg
            </motion.p>

            <motion.h1
                className='font-cormorant font-light text-dark leading-none mt-8'
                style={{
                    fontSize: 'clamp(4rem,12vw,9rem)',
                    letterSpacing: '-0.01em',
                }}
                {...fadeUp(3)}
            >
                {name1} <em className='italic text-gold'>&amp;</em> {name2}
            </motion.h1>

            <motion.div
                className='h-px my-10'
                style={{
                    background:
                        'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'min(400px, 60vw)', opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 3.4 }}
            />

            <motion.p
                className='uppercase tracking-[0.35em] text-muted'
                style={{ fontSize: '0.75rem' }}
                {...fadeUp(3.6)}
            >
                {date}
            </motion.p>

            <motion.p
                className='font-cormorant italic font-light text-muted mt-2'
                style={{ fontSize: '1.4rem' }}
                {...fadeUp(3.8)}
            >
                {location}
            </motion.p>

            <motion.div
                className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 4.2 }}
            >
                <span
                    className='uppercase tracking-[0.3em] text-muted'
                    style={{ fontSize: '0.6rem' }}
                >
                    Scroll
                </span>
                <motion.div
                    className='w-px'
                    style={{
                        height: 40,
                        background:
                            'linear-gradient(180deg, var(--color-gold), transparent)',
                        transformOrigin: 'top',
                    }}
                    animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 4.5,
                    }}
                />
            </motion.div>
        </section>
    );
}
