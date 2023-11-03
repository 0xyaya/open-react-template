import Image from 'next/image';

import FeatImage01 from '@/public/images/undraw_online_payments.svg';
import FeatImage02 from '@/public/images/undraw_fingerprint.svg';
import FeatImage03 from '@/public/images/world.svg';

export default function Zigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <div className='inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4'>
              Built on Solana
            </div>
            <h1 className='h2 mb-4'>
              A new way to offset your business carbon footprint.
            </h1>
            <p className='text-xl text-gray-400'>
              The Infusing Protocol bring a second breath to the
              retired carbon credits.
            </p>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt='Features 01'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    Easily pay to offset
                  </div>
                  <h3 className='h3 mb-3'>Carbon offsets</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Basicaly the infusing protocol allow you to easily
                    pay to offset your carbon footprint with carbon
                    credits.
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
                      <span>Fast</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Secure</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Transparent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    Leverage Solana
                  </div>
                  <h3 className='h3 mb-3'>Get an infused assets</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    On Solana everything is an account and the
                    infusing protocol infuse any account with carbon
                    credits.
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
                      <span>Onchain infused assets</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Ecosystem composability</span>
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

            {/* 3rd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt='Features 03'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    Infuse the world
                  </div>
                  <h3 className='h3 mb-3'>Scale climate actions</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    As anything in the world can be tokenized, the
                    infusing protocol can infuse anything in the
                    world.
                    {/* To mitigate reliance on a single carbon credits
                    provider, the Infusing Protocol routes the payment
                    amount to a strategies controller. This controller
                    effectively allocates the carbon credits for
                    offsetting across various strategies. */}
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
                      <span>Regenerative economy</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Powered by blockchain</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Hopeful mechanism</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
