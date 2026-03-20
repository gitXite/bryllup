import { wedding } from '@/config';

export default function Footer() {
    return (
        <footer className='bg-dark py-12 text-center border-t border-gold/15'>
            <p className='font-cormorant text-ivory font-light tracking-[0.15em] mb-4 text-4xl'>
                {wedding.name1[0]} &amp; {wedding.name2[0]}
            </p>
            <p className='uppercase tracking-[0.2em] text-ivory/30 text-[0.65em] font-thin'>
                {wedding.dateDisplay} - {wedding.venue}, {wedding.city}
            </p>
        </footer>
    );
}
