import MenuDetails from '@/lib/Presentation/Component/MenuDetails'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Menu() {
  return (
    <div className="m-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-5 py-6">
      <div className="flex w-full flex-col items-center justify-center space-y-5">
        <h1 className="bg-[url('/resources/header-bg.jpeg')] bg-[length:900px_900px] bg-clip-text bg-[right_-410px_center] bg-no-repeat text-center text-4xl font-bold text-transparent dark:dark:bg-[url('/resources/header-bg-dark.jpg')]">
          Discover Our Menu
        </h1>
        <p className="text-center text-base text-gray-500 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex w-full items-center justify-center space-x-2">
          <label htmlFor="search" className="relative block w-full max-w-xl ">
            <MagnifyingGlassIcon className="absolute bottom-0 left-4 top-0 my-auto  h-5 w-5 text-gray-600" />
            <input
              type="search"
              className="w-full rounded-lg border-none py-3 pl-14 pr-3 text-sm text-black shadow-lg"
              name="menuSearch"
              placeholder="Search..."
              id="menuSearch"
            />
          </label>
          <select
            name="menuCategory"
            className="w-full max-w-[6rem] rounded-lg border-none p-3 text-sm text-black shadow-lg"
            id="menuCategory"
            defaultValue={'All'}
          >
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <div className="my-8 w-full bg-gray-300 p-[0.5px]"></div>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <MenuDetails />
      </div>
    </div>
  )
}
