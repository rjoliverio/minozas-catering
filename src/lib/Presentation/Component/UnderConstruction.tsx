'use client'

import Image from 'next/image'

export default function UnderConstruction() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center px-5">
      <Image
        src="/resources/under-construction.png"
        className=""
        width={500}
        height={500}
        alt="Under Construction"
      />
      <h1 className="text-center text-xl font-medium text-slate-600 dark:text-white">
        This page is currently under construction.
      </h1>
      <span className="text-lg font-medium text-slate-500 dark:text-gray-400">
        Please comeback soon!
      </span>
    </section>
  )
}
