const { default: Link } = require('next/link')

const links = [
  // { label: 'Inicio', route: '/' },
  { label: 'WHAT', route: '/what' },
  { label: 'RAMA', route: '/about' },
  { label: 'DO', route: '/work' },
  { label: 'Skills', route: '/skills' },
  { label: 'Blog', route: '/posts' },
  { label: 'Contact', route: '/contact' },
  { label: 'CV', route: '/cv' },
  { label: 'FAQ', route: '/FAQ' }
]

export default function AltHeader () {
  return (
    <header className='flex gap-2 flex-col md:flex-row justify-center md:justify-between items-center ml-5 mr-5'>
      <Link href='/'>
        <h1 className='text-5xl font-black hover:text-primary'>RAMAFOLIO </h1>
      </Link>

      <nav>
        <ul className='flex flex-row gap-5'>
          {links.map(({ label, route }) => (
            <li key={route} className='ramHover text-md font-bold'>
              <Link href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
