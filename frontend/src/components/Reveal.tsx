import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: keyof typeof motion;
}

export default function Reveal({
    children,
    delay = 0,
    className,
    as = 'div',
}: Props) {
    const Tag = motion[as] as typeof motion.div;

    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay }}
        >
            {children}
        </Tag>
    );
}
