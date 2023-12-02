'use client'

import Link from 'next/link'
import { useEffect } from 'react'

type Props = {
  error: Error
}

const MenuError = ({ error }: Props) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="m-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-5 py-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-300">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-500">
          Something went wrong. Try again later, or return home to start from the beginning.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-amber-400 px-5 py-3 text-sm font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default MenuError