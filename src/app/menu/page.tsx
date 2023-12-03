import { GET_CATEGORY_QUERY } from '@/lib/App/Utils/GraphQL/Queries/MenuQuery'
import { Category } from '@/lib/Domain/Entity'
import { client } from '@/lib/Infrastructure/Client'
import MenuDetails from '@/lib/Presentation/Component/MenuDetails'
import MenuSearchBar from '@/lib/Presentation/Component/MenuSearchBar'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Menu({ searchParams }: Props) {
  const category: { findAllCategory: Category[] } = await client.request(GET_CATEGORY_QUERY)
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center px-5 py-6">
      <div className="flex w-full flex-col items-center justify-center space-y-5">
        <h1 className="bg-[url('/resources/header-bg.jpeg')] bg-[length:900px_900px] bg-clip-text bg-[right_-410px_center] bg-no-repeat text-center text-4xl font-bold text-transparent dark:dark:bg-[url('/resources/header-bg-dark.jpg')]">
          Discover Our Menu
        </h1>
        <p className="text-center text-base text-gray-500 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <MenuSearchBar categories={category.findAllCategory} />
      </div>
      <div className="my-8 w-full bg-gray-300 p-[0.5px]"></div>
      <MenuDetails searchParams={searchParams} />
    </div>
  )
}
