import { useEffect, useState } from 'react';
import { ExternalLink, Heart, X, ChevronRight, ArrowLeft, Minus, Plus } from 'lucide-react';
import { WishlistItem } from '@/types';

const wishlistItems: WishlistItem[] = [
    {
        id: '1',
        name: 'Le Creuset Dutch Oven',
        brand: 'Le Creuset',
        price: 395,
        totalAmount: 1,
        amountReserved: 1,
        description: 'Classic 5.5 Qt Round Dutch Oven in Sea Salt',
        longDescription:
            'The iconic Le Creuset Dutch Oven is a kitchen essential that will last a lifetime. Perfect for slow-cooked stews, soups, and braised meats, this beautiful piece combines exceptional heat distribution with timeless French design. The Sea Salt color will complement any kitchen aesthetic.',
        image: 'https://images.unsplash.com/photo-1585442231910-e59b37c7bb7e?w=600&h=600&fit=crop',
        link: 'https://www.lecreuset.com',
        category: 'Kitchen',
        reserved: true,
    },
    {
        id: '2',
        name: 'Frette Bedding Set',
        brand: 'Frette',
        price: 890,
        totalAmount: 1,
        amountReserved: 0,
        description: 'Luxury Egyptian Cotton Duvet Set in White',
        longDescription:
            'Experience the ultimate in luxury with this exquisite Frette bedding set. Crafted from the finest Egyptian cotton with a 600 thread count, these sheets offer unparalleled softness and breathability. The classic white adds timeless elegance to any bedroom.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
        link: 'https://www.frette.com',
        category: 'Bedroom',
    },
    {
        id: '3',
        name: 'Vitamix Blender',
        brand: 'Vitamix',
        price: 549,
        totalAmount: 1,
        amountReserved: 0,
        description: 'Ascent Series A3500 Smart Blender',
        longDescription:
            'The Vitamix A3500 is the ultimate blending machine for the modern kitchen. With built-in wireless connectivity and touchscreen controls, it delivers restaurant-quality results at home. Perfect for smoothies, soups, nut butters, and so much more.',
        image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&h=600&fit=crop',
        link: 'https://www.vitamix.com',
        category: 'Kitchen',
    },
    {
        id: '4',
        name: 'Baccarat Champagne Flutes',
        brand: 'Baccarat',
        price: 320,
        totalAmount: 4,
        amountReserved: 0,
        description: 'Set of 2 Crystal Champagne Flutes',
        longDescription:
            'Toast to love with these exquisite Baccarat crystal champagne flutes. Hand-crafted by master artisans in France, each flute showcases exceptional clarity and brilliance. The elegant silhouette and fine rim elevate every celebration.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=600&fit=crop',
        link: 'https://www.baccarat.com',
        category: 'Dining',
        reserved: false,
    },
    {
        id: '5',
        name: 'Dyson Airwrap',
        brand: 'Dyson',
        price: 599,
        totalAmount: 1,
        amountReserved: 0,
        description: 'Complete Long Hair Styler in Copper',
        longDescription:
            'The Dyson Airwrap uses intelligent heat control and the Coanda effect to style hair without extreme heat damage. This complete set includes attachments for curling, waving, smoothing, and drying - everything needed for salon-quality styling at home.',
        image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=600&fit=crop',
        link: 'https://www.dyson.com',
        category: 'Beauty',
    },
    {
        id: '6',
        name: 'Smeg Espresso Machine',
        brand: 'Smeg',
        price: 699,
        totalAmount: 1,
        amountReserved: 0,
        description: 'Retro Style Espresso Machine in Cream',
        longDescription:
            'Bring Italian style to your kitchen with this stunning Smeg espresso machine. The retro design is complemented by modern functionality, including a 15-bar pump, steam wand for frothing, and cup warmer. Start every morning with café-quality espresso.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop',
        link: 'https://www.smeg.com',
        category: 'Kitchen',
    },
];

export function Wishlist() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [items, setItems] = useState<WishlistItem[]>(wishlistItems);
    const [quantity, setQuantity] = useState(1);
    const selectedItem = items.find(i => i.id === selectedItemId);
    const availableAmount = selectedItem ? selectedItem.totalAmount - selectedItem.amountReserved : 0;

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 1024;

        if (selectedItem && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedItem]);

    const handleItemClick = (item: WishlistItem) => {
        setSelectedItemId(item.id);
        setQuantity(1);
    };

    const handleReserve = (item: WishlistItem) => {
        setItems(prev => 
            prev.map(i => {
                if (i.id !== item.id) return i;

                const newAmountReserved = Math.min(i.amountReserved + quantity, i.totalAmount);

                return {
                    ...i,
                    amountReserved: newAmountReserved,
                    reserved: newAmountReserved === i.totalAmount,
                };
            })
        );
    };

    const handleClose = () => {
        setSelectedItemId(null);
    };

    return (
        <div className='min-h-screen'>
            <header
                className='border-b border-transparent bg-[rgba(250, 247, 242, 0.9)] sticky top-0 z-40 transition-all duration-300'
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
                <div className='max-w-7xl mx-auto px-6 py-6'>
                    <a
                        href='/'
                        className='absolute group flex items-center gap-2 hover:bg-muted/10 transition-color duration-200 left-5 lg:left-20 top-1/2 -translate-y-1/2 px-4 py-1 rounded-full border border-transparent hover:border-border'
                    >
                        <ArrowLeft size={window.innerWidth < 1024 ? 18 : 12} className='group-hover:-translate-x-1 transition-transform' />
                        {window.innerWidth < 1024 ? '' : 'Tilbake'}
                    </a>
                    <div className='text-center'>
                        <h1 className='font-cormorant text-3xl md:text-4xl font-light text-foreground tracking-none'>
                            Maren <em className='italic text-gold'>&amp;</em>{' '}
                            Daniel
                        </h1>
                        <p className='text-sm text-muted-v-foreground mt-2 tracking-wide'>
                            21 august, 2027
                        </p>
                    </div>
                </div>
            </header>

            <main className='max-w-7xl mx-auto px-6 py-12'>
                <div className={`mb-10 ${selectedItem ? 'text-center md:text-left' : 'text-center'}`}>
                    <h2 className='font-cormorant text-2xl md:text-3xl font-medium text-foreground mb-3'>
                        Vår Ønskeliste
                    </h2>
                    <p className={`text-muted-v-foreground ${selectedItem ? 'max-w-xl md:max-w-md' : 'max-w-xl mx-auto'} leading-relaxed`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Libero quasi qui molestias rerum. Quis distinctio
                        adipisci quo blanditiis.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8'>
                    <div
                        className={`w-full transition-all duration-500
                            ${selectedItem ? 'lg:w-2/5' : 'lg:w-full'}
                        `}
                    >
                        <div
                            className={`grid gap-4 transition-all duration-500
                                ${
                                    selectedItem
                                        ? 'grid-cols-1'
                                        : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                                }`}
                        >
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleItemClick(item)}
                                    className={`group relative bg-card rounded-lg border border-border/50 overflow-hidden text-left transition-all duration-300 hover:border-gold-light/50 hover:shadow-md
                                        ${
                                            selectedItem?.id === item.id &&
                                            'border-gold-light hover:border-gold-light/100 shadow-md'
                                        }
                                    `}
                                >
                                    <div className='flex items-center gap-4 p-4'>
                                        <div className='relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted/10'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='object-cover transition-transform duration-500'
                                            />
                                            {item.reserved && (
                                                <div className='absolute inset-0 bg-foreground/60 flex items-center justify-center'>
                                                    <span className='text-xs font-medium text-card uppercase tracking-wider'>
                                                        Reservert
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <p className='text-xs uppercase tracking-wider text-muted-v-foreground mb-1'>
                                                {item.brand}
                                            </p>
                                            <h3 className='font-cormorant text-lg font-medium text-foreground truncate'>
                                                {item.name}
                                            </h3>
                                            <p className='text-sm text-muted-v-foreground line-clamp-1 mt-1'>
                                                {item.description}
                                            </p>
                                            <p className='text-sm font-medium text-foreground mt-2'>
                                                NOK {item.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <ChevronRight className='w-5 h-5 text-muted-v-foreground/50 flex-shrink-0 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`fixed inset-0 lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto bg-background lg:bg-transparent z-50 lg:z-auto transition-all duration-500 overflow-auto
                            ${
                                selectedItem
                                    ? 'opacity-100 translate-x-0 lg:w-2/4'
                                    : 'opacity-0 translate-x-full lg:translate-x-0 pointer-events-none lg:w-0 lg:overflow-hidden'
                            }
                        `}
                    >
                        {selectedItem && (
                            <div className='flex flex-col min-h-full lg:h-auto bg-card rounded-none lg:rounded-xl border-0 lg:border border-border/50 overflow-hidden'>
                                <button
                                    onClick={handleClose}
                                    className='absolute top-3 right-3 z-10 p-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-v-foreground hover:text-foreground transition-colors'
                                >
                                    <X className='w-4 h-4' />
                                </button>
                    
                                <div className='relative aspect-[4/3] bg-muted/10'>
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className='absolute inset-0 w-full h-full object-cover'
                                    />
                                    {selectedItem.reserved && (
                                        <div className='absolute top-3 left-3 px-2.5 py-1 bg-foreground/90 text-card text-xs uppercase tracking-wider rounded-full'>
                                            Reservert
                                        </div>
                                    )}
                                </div>
                    
                                <div className='p-4 lg:p-5'>
                                    <div className='flex items-start justify-between gap-3 mb-3'>
                                        <div>
                                            <p className='text-xs uppercase tracking-wider text-muted-v-foreground mb-0.5'>
                                                {selectedItem.brand}
                                            </p>
                                            <h2 className='font-cormorant text-xl lg:text-2xl font-medium text-foreground'>
                                                {selectedItem.name}
                                            </h2>
                                        </div>
                                        <div className='text-right relative top-5'>
                                            <p className='text-xl font-medium text-foreground'>
                                                <span className='text-xs'>NOK</span> {selectedItem.price.toLocaleString()}
                                            </p>
                                            {selectedItem.totalAmount > 1 && (
                                                <div className='mb-4 mt-2 min-w-30'>
                                                    <div className='flex items-center justify-between mb-1.5'>
                                                        <span className='text-xs uppercase tracking-wider text-muted-v-foreground'>
                                                            Reservert
                                                        </span>
                                                        <span className='text-xs text-muted-v-foreground'>
                                                            {selectedItem.amountReserved} / {selectedItem.totalAmount}
                                                        </span>
                                                    </div>
                                                    <div className='w-full h-1 bg-muted/20 rounded-full'>
                                                        <div
                                                            className='h-1 bg-gold rounded-full transition-all'
                                                            style={{ width: `${(selectedItem.amountReserved / selectedItem.totalAmount) * 100}%` }}
                                                        />
                                                    </div>
                                            
                                                    {availableAmount > 0 && (
                                                        <div className='flex items-center gap-3 mt-3'>
                                                            <span className='text-xs tracking-wider text-muted-v-foreground'>Antall:</span>
                                                            <div className='flex items-center gap-2'>
                                                                <button
                                                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                                                    disabled={quantity === 1}
                                                                    className='w-6 h-6 rounded-full disabled:cursor-not-allowed disabled:hover:text-muted-v-foreground border border-border flex items-center justify-center text-muted-v-foreground hover:text-foreground transition-colors'
                                                                >
                                                                    <Minus className='w-3 h-3' />
                                                                </button>
                                                                <span className='text-sm font-medium w-4 text-center'>{quantity}</span>
                                                                <button
                                                                    onClick={() => setQuantity(q => Math.min(availableAmount, q + 1))}
                                                                    disabled={availableAmount === quantity}
                                                                    className='w-6 h-6 rounded-full disabled:cursor-not-allowed disabled:hover:text-muted-v-foreground border border-border flex items-center justify-center text-muted-v-foreground hover:text-foreground transition-colors'
                                                                >
                                                                    <Plus className='w-3 h-3' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                    
                                    <span className='inline-block px-2.5 py-0.5 text-xs uppercase tracking-wider text--v-foreground bg-muted/10 rounded-full mb-4'>
                                        {selectedItem.category}
                                    </span>
                    
                                    <p className='text-sm text-muted-v-foreground leading-relaxed mb-5'>
                                        {selectedItem.longDescription}
                                    </p>
                    
                                    <div className='flex flex-col sm:flex-row gap-2'>
                                        <button
                                            onClick={() => handleReserve(selectedItem)}
                                            disabled={availableAmount === 0}
                                            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                                                ${availableAmount === 0
                                                    ? 'bg-muted/10 text-muted-v-foreground cursor-not-allowed'
                                                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                                                }
                                            `}
                                        >
                                            <Heart className='w-3.5 h-3.5' />
                                            {availableAmount === 0 ? 'Fullt reservert' : 'Reserver'}
                                        </button>
                                        <a
                                            href={selectedItem.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-border hover:bg-muted/10 transition-colors'
                                        >
                                            <ExternalLink className='w-3.5 h-3.5' />
                                            Kjøp direkte
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
