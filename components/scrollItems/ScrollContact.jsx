export default function ScrollContact () {
  return (
    <div>
      <h2 className=''>Hablemos!!!</h2>
      <p className='mb-10'>Buscame como rulosafro en todas las plataformas</p>

      <section className='grid grid-cols-2 gap-10 justify-between mb-10'>
        <div>
          <ul>
            <li> <strong>Estudio reciente:</strong> <span>Dev. Front-End</span></li>
            <li> <strong>Profesión:</strong> <span>Egresado Diseño UC</span></li>
          </ul>
        </div>
        <div>
          <ul>
            {/* <li> <strong>Celular:</strong> <span>+569 5341 6318</span></li> */}
            <li> <strong>Email:</strong> <span>rulosafro@gmail.com</span></li>
          </ul>
        </div>
      </section>

      <form className=''>
        <div className='mb-6'>
          <label for='email' className='block mb-2 text-sm font-medium text-gray-90'>Tu email</label>
          <input type='email' id='email' className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400text-white focus:ring-blue-500focus:border-blue-500' placeholder='yo@mail.com' required />
        </div>
        <div className='mb-6'>
          <label for='email' className='block mb-2 text-sm font-medium text-gray-90'>Asunto</label>
          <input type='text' id='subject' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400text-white focus:ring-blue-500focus:border-blue-500' placeholder='Lo que quieres hablar' required />
        </div>
        <div className='mb-6'>
          <label for='password' className='block mb-2 text-sm font-medium text-gray-300 '>Tu mensaje</label>
          <input type='password' id='password' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400text-white focus:ring-blue-500focus:border-blue-500' placeholder='Hola Rama...' required />
        </div>

        <button class='flex justify-end bg-yellow-700  text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'>
          Enviar
        </button>
      </form>

    </div>
  )
}
