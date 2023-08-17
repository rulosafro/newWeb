export default function ScrollWork () {
  return (
    <div className='flex flex-col items-center'>
      <h2 className=' text-primary pb-10'>MyWork</h2>
      <div className='max-w-[850px] md:max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-4 '>
        <div className='flex flex-col gap-4'>
          <img className='h-auto max-w-full rounded-lg' src='/webp/portfolio-2.webp' alt='asdfas' />
          <img className='h-auto max-w-full rounded-lg' src='/webp/portfolio-4a.webp' alt='' />
          <img className='hidden h-auto max-w-full md:block  rounded-lg' src='/webp/portfolio-1b.webp' alt='' />
        </div>
        <div className='flex flex-col gap-4'>
          <img className='  rounded-lg' src='/webp/portfolio-6b.webp' alt='' />
          <img className='  rounded-lg' src='/webp/portfolio-8.webp' alt='' />
          <img className='hidden md:block  rounded-lg' src='/webp/portfolio-10.webp' alt='' />
        </div>
        <div className='hidden md:flex md:flex-col md:gap-4'>
          <img className='  rounded-lg' src='/webp/portfolio-1a.webp' alt='' />
          <img className='  rounded-lg' src='/webp/portfolio-4c.webp' alt='' />
          <img className='  rounded-lg' src='/webp/portfolio-2b.webp' alt='' />
        </div>
        <div className='hidden md:flex md:flex-col md:gap-4'>
          <img className='  rounded-lg' src='/webp/portfolio-14.webp' alt='' />
          <img className='  rounded-lg' src='/webp/portfolio-15.webp' alt='' />
          <img className='  rounded-lg' src='/webp/portfolio-16.webp' alt='' />
        </div>

        <a href='/mywork' className='ramButton text-center flex justify-self-center'> See More</a>
      </div>
    </div>
  )
}
