'use client'

import { navbarLinks } from '@/lib/App/Utils/Json'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeChanger from './ThemeChanger'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex w-full items-center justify-center px-5 py-3 md:px-14 lg:px-24">
      <div className="hidden w-full items-center justify-between md:flex">
        <Link href="/" className="text-4xl font-bold text-gray-900 dark:text-white">
          <span className="text-amber-400">m</span>iñoza
        </Link>
        <ul className="flex w-full items-center justify-center space-x-10 text-sm text-gray-500 dark:text-gray-400">
          {navbarLinks.map((link, i) => (
            <li
              key={i}
              className={`${
                pathname.match(new RegExp(`^${link.path}$`, 'i'))?.length &&
                ' font-bold text-amber-400'
              } hover:text-amber-400`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ThemeChanger />
      </div>
      <Menu as="div" className="relative block w-full text-left md:hidden">
        <div className="flex justify-between">
          <Link href="/" className="text-4xl font-bold text-gray-900 dark:text-white">
            <span className="text-amber-400">m</span>iñoza
          </Link>
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Bars3Icon className="h-6 w-6" />
            </Menu.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-40 mt-4 inline-block w-full origin-center bg-transparent ">
            <div className="w-full space-y-2 rounded-md bg-white p-2 text-gray-500 shadow">
              {navbarLinks.map((link, i) => (
                <Menu.Item key={i}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname.match(new RegExp(`^${link.path}$`, 'i'))?.length &&
                      ' font-bold text-amber-400'
                    } group flex w-full max-w-7xl items-center rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100 `}
                  >
                    {link.name}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  )
}
