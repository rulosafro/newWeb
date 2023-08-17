function ButtonScrollR (props) {
  return (
    <button className='hidden md:block ramButton m-5 gap-4  lg:block' type='button'>
      <a href={props.to} className='flex flex-row gap-4 '>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z' strokeWidth='0' fill='currentColor' />
          <path d='M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z' strokeWidth='0' fill='currentColor' />
        </svg>
      </a>
    </button>
  )
}
function ButtonScrollL (props) {
  return (
    <button className='hidden md:block ramButton m-5 gap-4' type='button'>
      <a href={props.to} className='flex flex-row gap-4'>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z' strokeWidth='0' fill='currentColor' />
          <path d='M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z' strokeWidth='0' fill='currentColor' />
          <path d='M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z' strokeWidth='0' fill='currentColor' />
        </svg>
      </a>
    </button>
  )
}

module.exports = {
  ButtonScrollR, ButtonScrollL
}
