import Image from 'next/image'
import Profile from '../public/IMG_20230701_152513-removebg-preview.png'

import Link from 'next/link'
export default function Home() {
  return (
    <> 
    <main className="flex min-h-screen flex-col items-center justify-between p-10">

      <div className="flex h-14 gap-24 p-10 items-center ">
        <Link href='/about' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700 '>About</Link>
        <Link href='/project' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700 '>Projects</Link>
      </div>
      <div className="max-md:!block flex items-center gap-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[150px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image className='object-cover rounded-full'
          src={Profile}
          alt="Logo"
          width={300}
          height={300} 
        />
        <div>
          <h2 className='max-md:text-2xl max-md:text-left mt-10 font-semibold text-5xl text-right'>Welcome</h2>
          <h2 className='max-md:text-2xl mb-10 font-semibold text-5xl'>To My Portfolio</h2>
        </div>
      </div>

      <div className="flex gap-10 text-center lg:mb-0 lg:text-left">
        <a
          href="https://github.com/Rakesh-Mirji"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/rakesh-mirji-26339b1b1/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
    </>
  )
}
