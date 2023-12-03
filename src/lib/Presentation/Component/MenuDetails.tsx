/* eslint-disable no-unused-vars */

import { Menu as MenuEntity } from '@/lib/Domain/Entity'
import { client } from '@/lib/Infrastructure/Client'
import { GET_MENU_QUERY } from '@/lib/App/Utils/GraphQL/Queries/MenuQuery'
import Menu from './Menu'
import { Suspense } from 'react'
import MenuLoading from './MenuLoading'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function MenuDetails({ searchParams }: Props) {
  const { category, searchQuery } = searchParams
  const menu: { findAllFood: MenuEntity[] } = await client.request(GET_MENU_QUERY, {
    category: category || '',
    searchQuery: searchQuery || '',
  })

  return (
    <Suspense fallback={<MenuLoading />}>
      <Menu menu={menu.findAllFood} />
    </Suspense>
  )
}
