import Image from 'next/image';
import FeatImage01 from '@/public/images/solana.svg';

export default function Solana() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
            {/* Image */}
            <div
              className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
              data-aos='fade-up'
            >
              <Image
                className='max-w-full mx-auto md:max-w-none h-auto'
                src={FeatImage01}
                width={450}
                alt='Features 01'
              />
            </div>
            {/* Content */}
            <div
              className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
              data-aos='fade-left'
            >
              <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                  Fast and powerful
                </div>
                <h3 className='h3 mb-3'>Blockchain that scale</h3>
                <p className='text-xl text-gray-400 mb-4'>
                  The Infusing Protocol capitalizes on composability
                  to seamlessly connect program accounts, creating a
                  comprehensive and efficient carbon credit offsetting
                  system.
                </p>
                <ul className='text-lg text-gray-400 -mb-2'>
                  <li className='flex items-center mb-2'>
                    <svg
                      className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                      viewBox='0 0 12 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                    </svg>
                    <span>Infused assets are stored onchain</span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <svg
                      className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                      viewBox='0 0 12 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                    </svg>
                    <span>
                      The ecosystem can rewards your infused assets in
                      their own program
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                      viewBox='0 0 12 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                    </svg>
                    <span>Readable by everyone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
