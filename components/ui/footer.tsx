import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='py-12 md:py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          {/* Top area: Blocks */}
          <div className='grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12'>
            {/* 1st block */}
            <div className='md:col-span-4 lg:col-span-5'>
              <div className='mb-2'>
                {/* Logo */}
                <Link
                  href='/'
                  className='inline-block'
                  aria-label='Cruip'
                >
                  <svg
                    className='w-8 h-8 fill-current text-purple-600'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z' />
                  </svg>
                </Link>
              </div>
              <div className='text-gray-400'>
                Infusing Protocol is a decentralized program developed
                by Infused Labs. Join us on X and discord to get more
                informations.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className='md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8'>
              {/* 2nd block */}
              <div className='text-sm'>
                <h6 className='text-gray-200 font-medium mb-1'>
                  Products
                </h6>
                <ul>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Infusing Protocol
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Carbon Tree
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Fuzzy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className='text-sm'>
                <h6 className='text-gray-200 font-medium mb-1'>
                  Resources
                </h6>
                <ul>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Whitepaper
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Docs
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className='text-sm'>
                <h6 className='text-gray-200 font-medium mb-1'>
                  Company
                </h6>
                <ul>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      About us
                    </Link>
                  </li>
                  <li className='mb-1'>
                    <Link
                      href='/'
                      className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className='md:flex md:items-center md:justify-between'>
            {/* Social links */}
            <ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
              <li>
                <Link
                  href='/'
                  className='flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'
                  aria-label='Twitter'
                >
                  <svg
                    className='w-8 h-8 fill-current'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z' />
                  </svg>
                </Link>
              </li>
              <li className='ml-4'>
                <Link
                  href='/'
                  className='flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'
                  aria-label='Github'
                >
                  <svg
                    className='w-8 h-8 fill-current'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z' />
                  </svg>
                </Link>
              </li>
              <li className='ml-4'>
                <Link
                  href='/'
                  className='flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'
                  aria-label='Discord'
                >
                  <svg
                    className='w-8 h-8 fill-current'
                    viewBox='-6 -6 36.00 36.00'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z'></path>
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className='text-gray-400 text-sm mr-4'>
              &copy; infused.com. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
