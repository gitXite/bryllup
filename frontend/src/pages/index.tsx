import IntroOverlay from '@/components/IntroOverlay';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Reveal from '@/components/Reveal';
import RSVPForm from '@/components/RSVPForm';
import { wedding, program, infoCards } from '@/config';
import { ExternalLink } from 'lucide-react';

function SectionHead({
    eyebrow,
    title,
}: {
    eyebrow: string;
    title: React.ReactNode;
}) {
    return (
        <>
            <Reveal>
                <span
                    className='block uppercase tracking-[0.4em] text-gold mb-4'
                >
                    {eyebrow}
                </span>
            </Reveal>
            <Reveal delay={0.1}>
                <h2
                    className='font-cormorant font-light leading-tight'
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                    {title}
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <div className='w-15 h-px bg-gold mx-auto my-10' />
            </Reveal>
        </>
    );
}

export default function MainPage() {
    const hasShown = localStorage.getItem('overlay_shown');

    return (
        <>
            {!hasShown && <IntroOverlay />}
            <Nav />

            <Hero
                name1={wedding.name1}
                name2={wedding.name2}
                date={wedding.dateDisplay}
                location={`${wedding.venue}, ${wedding.city}`}
            />

            <section
                id='nedtelling'
                className='bg-dark py-28 px-[4vw] text-center'
            >
                <div className='max-w-4xl mx-auto'>
                    <SectionHead
                        eyebrow='Dager til vi sier ja'
                        title={
                            <span className='text-ivory'>
                                Nedtelling til
                                <br />
                                <em className='italic text-gold'>
                                    den store dagen
                                </em>
                            </span>
                        }
                    />
                    <Countdown dateISO={wedding.dateISO} />
                </div>
            </section>

            <section id='om-oss' className='py-28 px-[4vw] bg-ivory'>
                <div className='max-w-xl mx-auto text-center'>
                    <SectionHead
                        eyebrow='Vår historie'
                        title={
                            <>
                                Et kjærlighetskapitel
                                <br />
                                <em className='italic text-gold'>begynner</em>
                            </>
                        }
                    />
                    <Reveal delay={0.25}>
                        <p className='text-base leading-[1.9] text-muted'>
                            Vi matchet på Hinge og knyttet bond over pizza, lurte på hvem som lagde den best.
                            Avtalte å møtes over drinker på Last Monkey, lite visste vi det skulle ende i fest.<br/>
                            Med romantiske turer og stadig godt selskap, visste Daniel tidlig hvor å rette sin stavn. 
                            Gjenstod det bare å be om tillatelse, for å ende historien med et frieri i København. 
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <p className='text-base leading-[1.9] text-muted mt-6'>
                            Nå inviterer vi deg - vår nærmeste familie og våre
                            kjæreste venner - til å feire den dagen vi forhåpentligvis aldri glemmer.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section id='program' className='py-28 px-[4vw] bg-cream'>
                <div className='max-w-3xl mx-auto text-center'>
                    <SectionHead
                        eyebrow={wedding.dateDisplay}
                        title={
                            <>
                                Helgens{' '}
                                <em className='italic text-gold'>program</em>
                            </>
                        }
                    />

                    <div className='timeline-track mt-16'>
                        {program.map((item, i) => (
                            <Reveal key={item.time} delay={i * 0.08}>
                                <div
                                    className='grid items-center mb-12'
                                    style={{
                                        gridTemplateColumns: '1fr 60px 1fr',
                                    }}
                                >
                                    <div
                                        className={`text-right pr-8 ${item.side === 'right' ? 'invisible' : ''}`}
                                    >
                                        <p
                                            className='uppercase tracking-[0.25em] text-gold mb-1'
                                            style={{ fontSize: '0.65rem' }}
                                        >
                                            {item.time}
                                        </p>
                                        <p className='font-cormorant text-dark text-xl font-normal'>
                                            {item.title}
                                        </p>
                                        <p
                                            className='text-muted mt-0.5'
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='w-3 h-3 rounded-full bg-cream border-2 border-gold relative z-10' />
                                    </div>
                                    <div
                                        className={`text-left pl-8 ${item.side === 'left' ? 'invisible' : ''}`}
                                    >
                                        <p
                                            className='uppercase tracking-[0.25em] text-gold mb-1'
                                            style={{ fontSize: '0.65rem' }}
                                        >
                                            {item.time}
                                        </p>
                                        <p className='font-cormorant text-dark text-xl font-normal'>
                                            {item.title}
                                        </p>
                                        <p
                                            className='text-muted mt-0.5'
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id='informasjon' className='py-28 px-[4vw] bg-ivory'>
                <div className='max-w-5xl mx-auto text-center'>
                    <SectionHead
                        eyebrow='Praktisk informasjon'
                        title={
                            <>
                                Alt du trenger
                                <br />å{' '}
                                <em className='italic text-gold'>vite</em>
                            </>
                        }
                    />

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16'>
                        {infoCards.map((card, i) => (
                            <Reveal key={card.title} delay={i * 0.07}>
                                <div className='bg-ivory p-10 text-center border border-gold/20 transition-all duration-300 hover:shadow-md hover:border-gold h-full'>
                                    <span className='block text-2xl text-gold mb-5 pointer-events-none'>
                                        ◈
                                    </span>
                                    <h3 className='font-cormorant text-xl font-normal text-dark mb-3'>
                                        {card.title}
                                    </h3>
                                    <p className='text-sm text-muted leading-relaxed whitespace-pre-line'>
                                        {card.body}
                                    </p>
                                    {card.link && (
                                        <a
                                            href={card.link.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1 mt-4 text-gold text-xs tracking-wider
                                 border-b border-gold/20 pb-px hover:border-gold
                                 transition-colors duration-200 no-underline'
                                        >
                                            {card.link.label}
                                            <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RSVP ─────────────────────────────────────────── */}
            <section id='rsvp' className='py-28 px-[4vw] bg-dark'>
                <div className='max-w-xl mx-auto text-center'>
                    <SectionHead
                        eyebrow='Bekreft din deltakelse'
                        title={
                            <span className='text-ivory'>
                                Vi ønsker ditt svar
                                <br />
                                <em className='italic text-gold'>
                                    innen {wedding.rsvpDeadline}
                                </em>
                            </span>
                        }
                    />
                    <Reveal delay={0.25}>
                        <p className='text-base leading-[1.9] text-ivory/45'>
                            Fyll ut skjemaet nedenfor. Har du spørsmål, ta
                            gjerne kontakt direkte.
                        </p>
                    </Reveal>
                    <RSVPForm />
                </div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────── */}
            <footer className='bg-dark py-12 text-center border-t border-gold/15'>
                <p
                    className='font-cormorant text-ivory font-light tracking-[0.15em] mb-4 text-4xl'
                >
                    {wedding.name1[0]} &amp; {wedding.name2[0]}
                </p>
                <p
                    className='uppercase tracking-[0.2em] text-ivory/30 text-xs font-thin'
                >
                    {wedding.dateDisplay} - {wedding.venue}, {wedding.city}
                </p>
            </footer>
        </>
    );
}
