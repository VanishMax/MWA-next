import Link from 'next/link'

export default function Nav () {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link prefetch href='/'>
          <a className='text-white text-xl font-bold py-1 px-4 rounded no-underline hover:text-gray-200'>Modern Web App</a>
        </Link>
      </div>
      <div class="flex w-auto items-center flex-grow">
        <div class="text-sm flex-grow">
          <Link prefetch href='/about'>
            <a className='text-white py-2 px-4 no-underline text-lg hover:text-gray-200'>About</a>
          </Link>
        </div>
        <div>
          <Link href='https://github.com/vanishmax/modern-web-app'>
            <a className='btn bg-white text-black font-bold py-1 px-4 rounded no-underline hover:bg-gray-200' target='_blank'>GitHub</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
