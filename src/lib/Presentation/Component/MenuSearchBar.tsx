'use client'

import { Category } from '@/lib/Domain/Entity'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  categories: Category[]
}

export default function MenuSearchBar({ categories }: Props) {
  const router = useRouter()
  const [category, setCategory] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleEnterKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setSearchQuery(e.currentTarget.value)
  }

  useEffect(() => {
    router.push(`/menu?category=${category}&searchQuery=${searchQuery}`)
  }, [category, router, searchQuery])

  return (
    <div className="flex w-full items-center justify-center space-x-2">
      <label htmlFor="search" className="relative block w-full max-w-xl ">
        <MagnifyingGlassIcon className="absolute bottom-0 left-4 top-0 my-auto  h-5 w-5 text-gray-600" />
        <input
          type="search"
          className="w-full rounded-lg border-none py-3 pl-14 pr-3 text-sm text-black shadow-lg"
          name="menuSearch"
          placeholder="Search..."
          id="menuSearch"
          onKeyDown={handleEnterKeyPressed}
        />
      </label>
      <select
        name="menuCategory"
        className="w-full max-w-[6rem] rounded-lg border-none p-3 text-sm text-black shadow-lg"
        id="menuCategory"
        defaultValue={'All'}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}
