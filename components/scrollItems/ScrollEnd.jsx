import Link from 'next/link'
import Footer from '../Footer'

export default function ScrollEnd () {
  return (
    <article className='flex flex-col items-start gap-5 max-w-[500px] ms-52'>
      <h2>FIN</h2>
      <h3>eso he construido por ahora...</h3>
      {/* <h3>Se esta construyendo las siguiente secciones del CV web...</h3> */}
      <p>Pasa a ver mi web general donde subo pruebas y mis ideas</p>
      <Link className='ramButton' href='/home'>Ir a la web</Link>
      <Footer />

    </article>
  )
}
