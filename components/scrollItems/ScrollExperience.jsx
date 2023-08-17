import Image from 'next/image'

export default function ScrollExperience () {
  return (
    <div className='flex flex-col container max-h-full overflow-y-auto max-w-5xl'>
      <div className='flex flex-row justify-between items-center gap-x-5'>
        <h3 className=' text-[8vh] mb-2 text-primary'>My Pro Experience</h3>
        <a href='/CV_JavierRamirez_2023.pdf' aria-current='page' target='_blank' className='ramButton h-12 w-44 text-center me-5'>
          <svg className='inline mr-3' width='18' height='18' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'> <path stroke='none' d='M0 0h24v24H0z' fill='none' /> <path d='M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z' strokeWidth='0' fill='currentColor' /> <path d='M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z' strokeWidth='0' fill='currentColor' /> </svg>
          CV 2023
        </a>
      </div>
      <p className='mb-5'>DISEÑO, INNOVACIÓN Y DESARROLLO </p>

      <section className='flex flex-col max-h-screen gap-y-12'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='me-5'>
            <h3 className='text-4xl '>Acelerador de innovación</h3>
            <p><em>BRINCA - Consultoría en Innovación </em></p>
            <p>En Brinca fue una gran experiencia en el mundo de la consultoría. Se trató de trabajar a bas de proyectos junto a grandes empresas, en mi caso fue junto a CMPC, ISA Intervial y SMU. En este periodo se realizaron las tareas de apoyar en el manejo de portafolio, aportar en el proceso final de las campañas de ideas y la aceleración en los grupos de innovación que proponían las ideas más valoradas. En el desarrollo de cada proyecto se dictaban talleres para enseñar y apoyar a los equipos con la metodología SCRUM teniendo que definir un Product Owners, Scrum Master y el equipo. Además de cumplir todos los rituales que amerita la metodología.</p>
            <ul className='my-2'>
              <li>• Guiar y a los equipos SCRUM en su desarrollo </li>
              <li>• Acelerar equipos de innovación con desarrollo y aportes metodológicos</li>
              <li>• Co-diseñar los entregables de cada portafolio de innovación</li>
            </ul>
            <a className='ms-5 hover:text-primary' href='https://www.brinca.com/' target='_blank'>Visita Brinca</a>
          </div>
          <div style={{ position: 'relative', maxWidth: '500px', maxHeight: '600px' }}>
            <Image
              alt='Foto de taller en consultoría'
              src='/webp/img1.webp'
              quality='100'
              fill
              sizes='100vw'
              objectPosition='bottom 70%'
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div style={{ position: 'relative', maxWidth: '500px', maxHeight: '600px  ' }} className='me-5'>
            <Image
              alt='Foto del ecommerce de DICH'
              src='/webp/portfolio-1b.webp'
              fill
              sizes='100vw'
              className='rounded-xl object-cover object-left'
            />
          </div>
          <div>
            <h3 className='text-4xl '>Coordinador DICH</h3>
            <p><em>DICH - Fundación Cultural de Creadores Emergente</em></p>
            <h5>2022 - 2023</h5>
            <p>El objeto de la fundación es impulsar el desarrollo de proyectos creativos y culturales desde sus inicios hasta que logren su consolidación e independencia por medio del apoyo en aspectos laborales, sociales y técnicos. La misión principal es promover el surgimiento de nuevos actores creativos independientes que impulsen y difundan la cultura y las artes con sus proyectos/emprendimientos.</p>
            <ul className='my-2'>
              <li>• Dirigir y coordinar el funcionamiento interno de la Fundación</li>
              <li>• Generar alianzas y proyectos con medios externos</li>
              <li>• Gestionar las operaciones coordinación interna</li>
            </ul>
            <h5>Proyecto cerrado tras un año de operaciones</h5>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='me-5'>
            <h3 className='text-4xl'>Diseñador Generalista</h3>
            <p>Polimorfes - Juego didáctico de investigación</p>
            <p><em>Proyecto EDULAB y FONDEDOC</em></p>
            <h5>2018 - 2021 </h5> <h5>Autor y Diseñador</h5>
            <p>Creación de un kit didáctico para la formulación de proyectos con todos los componentes necesarios aplicando metodologías ABP y STEM. Enfocado desarrollar habilidades de investigación como la descripción, observación y la creatividad destinado a escolares, universitarios o profesionales que necesiten guiar un proyecto de aprendizaje/investigación.</p>
            <ul className='my-2'>
              <li>• Metodología ABP y STEM</li>
              <li>• Diseño Global de interacción y componentes</li>
              <li>• Encargado de Producción Inicial a Entrega Final</li>
              <li>• Modelado e impresión 3D + Creación de contenido visual</li>
            </ul>
            <h5> <a className='ms-5 hover:text-primary' href='https://edulab.uc.cl/soluciones/polimorfes-aprender-a-investigar-de-manera-ludica/' target='_blank' title='Ir a EduLab'>Ver más</a> </h5>
          </div>
          <div style={{ position: 'relative', maxWidth: '500px', maxHeight: '600px  ' }}>
            <Image
              alt='Foto de Kit Polimorfes'
              src='/webp/figura3D.webp'
              fill
              quality='75'
              className='rounded-xl object-cover object-rigth'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div style={{ position: 'relative', maxWidth: '500px', maxHeight: '600px  ' }} className='me-5'>
            <Image
              alt='Foto taller de fanzine en Valdivia'
              src='/webp/portfolio-3b.webp'
              fill
              sizes='100vw'
              quality='100'
              className='rounded-xl object-cover object-bottom'
            />
          </div>
          <div>
            <h3 className='text-4xl '>Diseñador Generalista</h3>
            <p>Tu Voz en Papel</p>
            <p><em>NMAPA - Núcleo Milenio Artes, Performatividad Y Activismo</em></p>
            <h5>2019 - 2021 </h5> <h5>Diseñador</h5>
            <p>Es un proyecto de Proyección al Medio Externo (PME) asociado al Núcleo, el cual tiene por objetivo visibilizar a través de la transferencia de conocimientos técnicos de la creación de fanzines, las principales temáticas y demandas ciudadanas marcadas por las movilizaciones sociales que se han producido desde octubre 2019 en adelante, como también, las estrategias performativas que han desarrollado ciertas comunidades en el espacio público. Participaron agrupaciones de fotógrafos, activistas ecológicos, agrupaciones feministas, dibujantes y personas particulares interesadas.</p>
            <ul className='my-2'>
              <li>• Planificación y Realización de talleres en Santiago, Valdivia y formato virtual</li>
              <li>• Diseño y post producción de fanzines</li>
              <li>• Coordinación de talleres presenciales y remotos</li>
            </ul>
            <a className='ms-5 hover:text-primary' href='https://www.nmapa.cl/tu-voz-en-papel/' target='_blank' title='Ir a NMMAPA'>Ver más</a>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='me-5'>
            <h3 className='text-4xl '>Diseño de Simuladores Médicos</h3>
            <p><em>Mediseño - Santiago, Chile </em></p>
            <h5>2019 - 2020</h5> <h5>Diseñador</h5>
            <p>Investigación de materiales y biomateriales transferido a simuladores médicos para la práctica motora de los becados recreando una toracotomía y ostomía junto a Luciano Caprile a cargo de Iván Caro en el equipo de diseño y Julián Varas en el equipo de medicina UC </p>
            <ul className='my-2'>

              <li>• Manejo e investigación de biomateriales, resinas y siliconas</li>
              <li>• Prototipado funcional y estético de simuladores médicos </li>
              <li>• Modelado, testeo y manejo de impresión 3D</li>
              <li>• Entrega de simulador de alta definición y alternativa económica</li>
            </ul>
          </div>
          <div style={{ position: 'relative', maxWidth: '500px', maxHeight: '600px  ' }}>
            <Image
              alt='Foto de prueba de simulador de toracotomia'
              src='/webp/portfolio-17.webp'
              fill
              quality='100'
              sizes='100vw'
              className='rounded-xl object-cover object-bottom'
            />
          </div>
        </div>

        <div className='max-w-[800px] self-center'>
          <h3 className='text-4xl '>Email Marketing y E-commerce*</h3>
          <p><em>Creado en Chile [digital] - Santiago, Chile </em></p>
          <h5>2020 - 2020 </h5>  <h5>Practicante</h5>
          <p>Trabajar en una propuesta alternativa a la plataforma actual para la exploración de integrarse a un nuevo sector comercial por parte de la marca con imagen y manejo de inventario. Incluido la preparación y diseño del email marketing semanal y ayudar en las propuestas frente al cyberday en la página principal de la empresa.</p>
          <ul className='my-2'>
            <li>• Creación de Email Marketing</li>
            <li>• Manejo de plataforma [Shopify]</li>
            <li>• Preparación frente al Cyberday 2020</li>
          </ul>
        </div>

      </section>
    </div>

  )
}
