import Image from 'next/image'
import Link from 'next/link'

export default function ScrollHero () {
  return (
    <hero className=' flex flex-col-reverse lg:flex-row justify-center gap-8 lg:gap-20 items-center'>
      <div className='flex flex-col m-10 @lg:m-0'>
        <h3>Hello</h3>
        <h2 className='text-6xl font-bold'>
          I'm <span className='text-primary'>Rama</span>{' '}
        </h2>
        <blockquote>Strategic Designer</blockquote>

        <div className='flex flex-col items-center '>
          <button className='ramButton mt-5 gap-4 w-[150px]' type='button'>
            <a href='#page2' className='flex flex-row gap-4'>
              Let's Go
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z'
                  strokeWidth='0'
                  fill='currentColor'
                />
                <path
                  d='M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z'
                  strokeWidth='0'
                  fill='currentColor'
                />
              </svg>
            </a>
          </button>
          <Link href='/home' className='mt-3 text-sm text-zinc-400 hover:underline hover:text-ramaWhite'>
            or skip to main
          </Link>
          <div className='flex flex-row gap-3 mt-6 '>
            <a href='https://www.linkedin.com/in/rulosafro/' target='_blank' className='ramHover'>
              <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-linkedin' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                <path d='M8 11l0 5' />
                <path d='M8 8l0 .01' />
                <path d='M12 16l0 -5' />
                <path d='M16 16v-3a2 2 0 0 0 -4 0' />
              </svg>
            </a>
            <a href='https://github.com/rulosafro' target='_blank' className='ramHover'>
              <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-github' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
            </a>
            <a href='https://www.behance.net/javierram' target='_blank' className='ramHover'>
              <svg xmlns='http://www.w3.org/2000/svg' className=' icon icon-tabler icon-tabler-brand-behance' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5' />
                <path d='M3 12l4.5 0' />
                <path d='M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1' />
                <path d='M16 6l3 0' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Image
        src='/img/artboard1.png'
        alt='Foto de Rama'
        width={500}
        height={500}
        quality='100'
      />
    </hero>
  )
}
