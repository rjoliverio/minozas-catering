import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { IBM_Plex_Serif } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import MenuCategory from '@/lib/Presentation/Component/MenuCategory'
import MainCarousel from '@/lib/Presentation/Component/MainCarousel'
import { StarIcon } from '@heroicons/react/20/solid'

const ibm_serif = IBM_Plex_Serif({ subsets: ['latin'], weight: '500', style: 'italic' })
export default function Home() {
  return (
    <main className="m-auto flex h-full w-full max-w-6xl flex-1 flex-col items-center justify-center space-y-8 py-5 md:mt-0 md:flex-row md:space-x-5 md:space-y-0 md:px-5 md:py-0 lg:space-x-12">
      <div className="flex max-w-md flex-col items-center justify-center space-y-8 text-gray-900">
        <h1 className="text-xs font-medium tracking-[0.7em] dark:text-white lg:text-base">
          MIÑOZA&apos;S CATERING
        </h1>
        <div className="relative flex flex-col space-y-2">
          <h1 className="bg-[url('/resources/header-bg.jpeg')] bg-[length:380px_450px] bg-clip-text bg-[left_-40px_center] bg-no-repeat text-5xl font-bold text-transparent dark:bg-[url('/resources/header-bg-dark.jpg')] dark:bg-cover dark:bg-center lg:text-6xl">
            Great Food
          </h1>
          <h1 className="ml-16 text-5xl font-bold dark:text-white lg:ml-20 lg:text-6xl">
            Great Taste
          </h1>
          <Image
            className="absolute right-0 top-5 hidden lg:block"
            src={'/resources/solid-arrow.svg'}
            alt="Solid Arrow"
            width={90}
            height={90}
          />
          <Image
            className="absolute right-2 top-4 block lg:hidden"
            src={'/resources/solid-arrow.svg'}
            alt="Solid Arrow"
            width={60}
            height={60}
          />
          <p
            className={`${ibm_serif.className} absolute -left-4 bottom-2 text-[2rem] font-medium italic text-[#87A14B] dark:text-[#9fbc5d] lg:-left-8 lg:text-[2.7rem]`}
          >
            With
          </p>
        </div>
        <p className="px-3 text-xs text-gray-500 dark:text-gray-300 md:px-0 lg:text-sm">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make.
        </p>
        <div className="hidden w-full lg:block">
          <form className="relative mt-5 w-full px-5">
            <label htmlFor="search" className="relative block">
              <div className="absolute bottom-0 right-2 top-0 my-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-900 p-2.5">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </div>
              <input
                type="search"
                name="search"
                className="w-full rounded-full bg-gray-100 py-4 pl-6 pr-12 text-xs shadow-lg dark:bg-gray-200"
                placeholder="Find in Menu"
              />
            </label>
            <Image
              src="/resources/square-dots.svg"
              alt="Square Dots"
              className="absolute -left-5 -top-3 -z-10"
              width={100}
              height={100}
            />
          </form>
        </div>
        <div className="block w-full lg:hidden">
          <form className="relative mt-5 w-full px-5">
            <label htmlFor="search" className="relative block">
              <div className="absolute bottom-0 right-2 top-0 my-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-900 p-1">
                <MagnifyingGlassIcon className="h-4 w-4 text-white" />
              </div>
              <input
                type="search"
                name="search"
                className="w-full rounded-full bg-gray-100 py-3 pl-3 pr-10 text-xs shadow-lg dark:bg-gray-200"
                placeholder="Find in Menu"
              />
            </label>
            <Image
              src="/resources/square-dots.svg"
              alt="Square Dots"
              className="absolute -left-0.5 -top-3 -z-10"
              width={80}
              height={80}
            />
          </form>
        </div>
        <div className="w-full">
          <MenuCategory />
        </div>
      </div>
      <div className="m-auto flex max-w-lg flex-col items-center justify-center space-y-4 md:w-auto lg:w-full">
        <MainCarousel />
        <div className="flex w-full items-center justify-between rounded-xl bg-black px-10 py-3 text-xs dark:bg-gray-200 lg:text-base">
          <p className="dark:text-black">100+ Occasions Catered</p>
          <p className="flex items-center space-x-1 text-lg">
            {[...Array(5)].map((item, i) => (
              <StarIcon key={i} className="h-5 w-5 text-amber-400" />
            ))}
          </p>
        </div>
        <div className="hidden w-full items-center justify-between lg:flex">
          <div className="relative rounded-xl">
            <div className="absolute bottom-0 z-10 p-3 font-medium">
              Catering your party needs. Inquire now!
            </div>
            <div className="absolute h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="h-[170px] w-[250px]  rounded-xl bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692421122/static/xswbymqeg0oah7mhuwab.jpg')] bg-cover"></div>
          </div>
          <div className="relative rounded-xl">
            <div className="absolute bottom-0 z-10 p-3 font-medium">
              Experience the delicious dining with us.
            </div>
            <div className="absolute h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="h-[170px] w-[250px]  rounded-xl bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692421224/static/orhdcnyo4ke0vpupb3vf.jpg')] bg-cover"></div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="relative rounded-xl">
            <div className="absolute bottom-0 z-10 p-3 text-xs font-medium">
              Catering your party needs. Inquire now!
            </div>
            <div className="absolute h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="h-[170px] w-[170px]  rounded-xl bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692421122/static/xswbymqeg0oah7mhuwab.jpg')] bg-cover"></div>
          </div>
          <div className="relative rounded-xl">
            <div className="absolute bottom-0 z-10 p-3 text-xs font-medium">
              Experience the delicious dining with us.
            </div>
            <div className="absolute h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="h-[170px] w-[170px]  rounded-xl bg-[url('https://res.cloudinary.com/ddcysbn3u/image/upload/v1692421224/static/orhdcnyo4ke0vpupb3vf.jpg')] bg-cover"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
