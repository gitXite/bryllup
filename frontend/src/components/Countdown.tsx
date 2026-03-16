import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
    dateISO: string;
}

interface Tick {
    days: number;
    hours: number;
    mins: number;
    secs: number;
}

function getRemaining(target: Date): Tick {
    const ms = Math.max(0, target.getTime() - Date.now());
    return {
        days: Math.floor(ms / 86_400_000),
        hours: Math.floor((ms % 86_400_000) / 3_600_000),
        mins: Math.floor((ms % 3_600_000) / 60_000),
        secs: Math.floor((ms % 60_000) / 1_000),
    };
}

function pad(n: number, len = 2) {
    return String(n).padStart(len, '0');
}

function Unit({
    value,
    label,
    digits = 2,
}: {
    value: number;
    label: string;
    digits?: number;
}) {
    const formatted = pad(value, digits);
    return (
        <div className='text-center'>
            <div
                className='relative overflow-hidden'
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1 }}
            >
                <AnimatePresence mode='popLayout' initial={false}>
                    <motion.span
                        key={formatted}
                        className='font-cormorant font-light text-ivory block leading-none'
                        initial={{ y: '-40%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '40%', opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        {formatted}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span
                className='block mt-2 uppercase text-gold tracking-[0.3em]'
                style={{ fontSize: '0.6rem' }}
            >
                {label}
            </span>
        </div>
    );
}

const Sep = () => (
    <span
        className='font-cormorant self-end pb-5 hidden sm:block text-gold/30'
        style={{ fontSize: '3rem' }}
    >
        ·
    </span>
);

export default function Countdown({ dateISO }: Props) {
    const target = new Date(dateISO);
    const [tick, setTick] = useState<Tick>(() => getRemaining(target));

    useEffect(() => {
        const id = setInterval(() => setTick(getRemaining(target)), 1_000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className='flex flex-wrap justify-center items-end gap-8 sm:gap-14 mt-12'>
            <Unit value={tick.days} label='Dager' digits={3} />
            <Sep />
            <Unit value={tick.hours} label='Timer' />
            <Sep />
            <Unit value={tick.mins} label='Minutter' />
            <Sep />
            <Unit value={tick.secs} label='Sekunder' />
        </div>
    );
}
