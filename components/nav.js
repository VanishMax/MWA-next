import Link from 'next/link'

export default function Nav () {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link prefetch href='/'>
          <a className='text-white text-xl font-bold py-1 px-4 rounded no-underline'>Modern Web App</a>
        </Link>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='lg:flex-grow'>
          <Link prefetch href='/about'>
            <a className='text-white py-2 px-4 no-underline'>About</a>
          </Link>
        </div>
        <div>
          <Link href='https://github.com/vanishmax/modern-web-app'>
            <a className='btn bg-white text-black font-bold py-2 px-4 rounded no-underline' target='_blank'>GitHub</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
