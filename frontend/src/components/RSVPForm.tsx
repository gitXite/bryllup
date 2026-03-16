import { useState } from 'react';
import type { RSVPPayload } from '@/types';

type FormState = RSVPPayload;

const EMPTY: FormState = {
    fname: '',
    lname: '',
    email: '',
    attending: 'ja',
    guests: 1,
    allergies: '',
    message: '',
};

const fieldClass =
    'w-full bg-white/5 border border-gold/25 text-ivory px-4 py-3 ' +
    'rounded-sm font-jost font-light text-sm outline-none ' +
    'transition-colors duration-200 focus:border-gold ' +
    'placeholder:text-ivory/25';

function Label({ children }: { children: React.ReactNode }) {
    return (
        <label
            className='block uppercase tracking-[0.3em] mb-1.5 text-gold'
            style={{ fontSize: '0.7rem' }}
        >
            {children}
        </label>
    );
}

function Success() {
    return (
        <div className='py-12 text-center'>
            <span
                className='block text-gold mb-4'
                style={{ fontSize: '2.5rem' }}
            >
                ✦
            </span>
            <h3
                className='font-cormorant text-ivory font-light mb-3'
                style={{ fontSize: '2rem' }}
            >
                Tusen takk!
            </h3>
            <p className='text-ivory/50 text-sm leading-relaxed'>
                Vi har mottatt ditt svar og ser frem til å feire med deg.
            </p>
        </div>
    );
}

export default function RSVPForm() {
    const [form, setForm] = useState<FormState>(EMPTY);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        if (!form.fname.trim() || !form.email.trim()) {
            setError('Vennligst fyll ut navn og e-post.');
            return;
        }
        setError('');
        // 🔌 Replace with your API endpoint:
        // await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        console.log('RSVP submitted:', form);
        setSubmitted(true);
    }

    if (submitted) return <Success />;

    return (
        <form
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-5'
            noValidate
        >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                    <Label>Fornavn</Label>
                    <input
                        className={fieldClass}
                        placeholder='Emma'
                        value={form.fname}
                        onChange={(e) => update('fname', e.target.value)}
                    />
                </div>
                <div>
                    <Label>Etternavn</Label>
                    <input
                        className={fieldClass}
                        placeholder='Hansen'
                        value={form.lname}
                        onChange={(e) => update('lname', e.target.value)}
                    />
                </div>
            </div>

            <div>
                <Label>E-postadresse</Label>
                <input
                    type='email'
                    className={fieldClass}
                    placeholder='emma@example.no'
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                />
            </div>

            <div>
                <Label>Kommer du?</Label>
                <div className='flex gap-6 mt-1'>
                    {(['ja', 'nei'] as const).map((v) => (
                        <label
                            key={v}
                            className='flex items-center gap-2 cursor-pointer text-sm text-ivory/70'
                        >
                            <input
                                type='radio'
                                name='attending'
                                value={v}
                                checked={form.attending === v}
                                onChange={() => update('attending', v)}
                                className='accent-gold'
                            />
                            {v === 'ja' ? 'Ja, jeg kommer' : 'Dessverre ikke'}
                        </label>
                    ))}
                </div>
            </div>

            {form.attending === 'ja' && (
                <>
                    <div>
                        <Label>Antall gjester (inkl. deg selv)</Label>
                        <select
                            className={fieldClass}
                            style={{ appearance: 'none' }}
                            value={form.guests}
                            onChange={(e) =>
                                update('guests', Number(e.target.value))
                            }
                        >
                            {[1, 2, 3, 4].map((n) => (
                                <option
                                    key={n}
                                    value={n}
                                    style={{ background: '#1c1a17' }}
                                >
                                    {n} {n === 1 ? 'person' : 'personer'}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Label>Matallergier eller spesielle behov</Label>
                        <textarea
                            rows={3}
                            className={fieldClass}
                            style={{ resize: 'none' }}
                            placeholder='Beskriv eventuelle hensyn vi bør ta...'
                            value={form.allergies}
                            onChange={(e) =>
                                update('allergies', e.target.value)
                            }
                        />
                    </div>
                </>
            )}
            <div>
                <Label>Melding til brudeparet (valgfritt)</Label>
                <textarea
                    rows={3}
                    className={fieldClass}
                    style={{ resize: 'none' }}
                    placeholder='Si noe fint...'
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                />
            </div>

            {error && (
                <p className='text-center text-sm text-gold-light'>{error}</p>
            )}

            <button
                type='submit'
                className='self-center mt-2 border border-gold text-gold px-12 py-4
                   text-[0.7rem] tracking-[0.35em] uppercase font-medium
                   transition-all duration-300 hover:bg-gold hover:text-dark cursor-pointer rounded-sm'
            >
                Send svar
            </button>
        </form>
    );
}
