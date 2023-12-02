/* eslint-disable no-unused-vars */
'use client'

import { Menu } from '@/lib/Domain/Entity'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarIcon } from '@heroicons/react/24/solid'
import MenuSlide from './MenuSlide'
import { MouseEvent, useState } from 'react'
import { typeColorMapper } from '@/lib/App/Utils/Helper/TypeColorMapper'

type Props = {
  menu: Menu[]
}
export default function MenuDetails({ menu: menuData }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [menu, setMenu] = useState<Menu | null>(menuData[0] || null)

  const handleMenuClicked = (item: Menu) => {
    setOpen(true)
    setMenu(item)
  }

  const handleMenuMouseEnter = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.children[2].classList.add('scale-110')
  }
  const handleMenuMouseLeave = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.children[2].classList.remove('scale-110')
  }

  return (
    <>
      {menuData.map((item) => {
        const color = typeColorMapper(item.category.name)
        return (
          <div key={item.id} className="flex flex-col items-center space-y-2">
            <div
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              onClick={() => handleMenuClicked(item)}
              className="relative w-full cursor-pointer overflow-hidden rounded-xl shadow-lg "
            >
              <div className="absolute bottom-0 z-20 p-3 text-lg font-bold">{item.name}</div>
              <div className="absolute z-10 h-full w-full rounded-xl bg-gradient-to-t from-black/60 to-transparent"></div>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={`h-60 transform rounded-xl bg-cover transition-all duration-500 ease-in-out`}
              ></div>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-2">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1 text-sm">
                    {[...Array(item.rate)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-amber-400" />
                    ))}
                    {[...Array(5 - item.rate)].map((_, i) => (
                      <StarIconOutline key={i} className="h-4 w-4 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-black">{item.rate.toFixed(1)}</p>
                </div>
                <div className={`rounded-full ${color} px-1.5 py-1 text-xs`}>
                  {item.category.name}
                </div>
              </div>
              <p className="line-clamp-2 w-full text-sm text-gray-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}

      <MenuSlide isOpen={isOpen} setOpen={setOpen} menu={menu as Menu} />
    </>
  )
}
