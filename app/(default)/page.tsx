export const metadata = {
    title: 'The Infusing Protocol',
    description: 'Discover the infusing protocol'
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';
import Blocks from '@/components/blocks';

export default function Home() {
    return (
        <>
            <Hero />
            <Zigzag />
            <Features />
            <Testimonials />
            <Newsletter />
        </>
    );
}
