export default function ScrollCarrer () {
  return (
    <div className='flex items-center '>
      <h2 className='-rotate-90 -translate-x-12 text-primary'>Carrer</h2>
      <article className='-translate-x-12 flex flex-col gap-3 -ms-16'>
        <a
          target='_blank'
          href='https://diseno.uc.cl/programas-academicos/pregrado/perfil-de-egreso/'
          className=' glass ramHover rounded-xl px-4 py-3 text-center'
        >
          <h4>Strategic Desginer</h4>
          <p>PUC - Santiago de Chile 🇨🇱</p>
          <p>2017 ››› 2021</p>
        </a>
        <a
          href='https://drive.google.com/file/d/1P0mr63gw1UgWjFHrAVqDyHlR9E-7CkLx/view'
          target='_blank'
          className=' glass ramHover rounded-xl px-4 py-3 text-center'
        >
          <h4> FrontEnd Dev</h4>
          <p>Coderhouse [online]</p>
          <p>2022 - 6 months</p>
        </a>
        <a
          target='_blank'
          href='https://drive.google.com/file/d/1XnXGQ9lU1FegSOLUyBvnpREp3zlzadv4/view'
          className=' glass ramHover rounded-xl px-4 py-3 text-center'
        >
          <h4> BackEnd Dev</h4>
          <p>Coderhouse [online]</p>
          <p>2023 - 6 months</p>
        </a>
      </article>
      <h3 className='-rotate-90 -translate-x-12 hidden xl:block text-primary'>Courses</h3>
      <ul className='-m-10 -translate-x-12 hidden xl:block'>
        <h5 className='font-semibold'>Diseño</h5>
        <li>• Bootcamp Diseño UX/UI - Evolvo (Udemy)</li>
        <li>• Diseño UX & Figma 2023 - Javier Cañas (Udemy)</li>
        <br />
        <h5 className='font-semibold'>Productividad</h5>
        <li>• Lectura Rápida, Super Lectura y FotoLectura - N.C. Kurt </li>
        <li>• De 0 a lector, Lectura Rápida - Luis Matus </li>
        <br />
        <h5 className='font-semibold'>Emprendimiento</h5>
        <li>• Google Ads Avanzado - Haciéndola </li>
        <li>• Facebook Ads Avanzado - Haciéndola </li>
        <li>• Email MKT Avanzado [Klaviyo] - Haciéndola </li>
        <li>• Excel para emprendedores - EmprededorChile </li>
        <li>• Creación de empresas - EmprededoChile </li>
        <li>• Contabilidad para negocios - EmprendedorChile </li>
        <li>• Contabilidad Aplicada - Sercotec </li>
        <li>• Levantamiento de Capital - Nicolás Torrealba </li>
        <br />
        <h5 className='font-semibold'>Educación Financiera</h5>
        <li>• Inversiones en Simple - Francisco Ackerman </li>
        <li>• Invierte en Simple - SantiInversor </li>
        <li>• Economía en Simple para invertir - Javi BlueChip </li>
        <li>• Sencillas para Negocios Exitosos - Rodrigo Álvarez </li>
        <li>• Flujo de Caja y Capital de Trabajo - Nicolás Roman</li>
      </ul>
    </div>
  )
}
