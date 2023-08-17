const { default: Link } = require('next/link')

const links = [
  // { label: 'Inicio', route: '/' },
  { label: 'WHAT', route: '/what' },
  { label: 'RAMA', route: '/about' },
  { label: 'DO', route: '/work' },
  { label: '⬅️', route: '/' }
  // { label: 'Skills', route: '/skills' },
  // { label: 'Blog', route: '/posts' },
  // { label: 'Contact', route: '/contact' },
  // { label: 'CV', route: '/cv' },
  // { label: 'FAQ', route: '/FAQ' }
]

export default function Header () {
  return (
    <header className='flex flex-col md:flex-row justify-center md:justify-between z-30 items-center mx-5 my-2'>
      <Link href='/home'>
        <h1 className='text-5xl font-black hover:text-primary hover:font-bold ease-in-out duration-200'>RAMAFOLIO </h1>
      </Link>

      <nav>
        <ul className='flex flex-row gap-5'>
          {links.map(({ label, route }) => (
            <li key={route} className='ramHoverBar text-md font-bold'>
              <Link href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
