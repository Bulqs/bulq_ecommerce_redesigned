import { HomePageProductList } from '@/components/HomePageProductList'
import Layout from '@/components/customernavigation/Layout'
import { HomeProductsLists } from '@/data/data'
import React from 'react'

const WishList = () => {
  return (
    <Layout>
      <div>
        <HomePageProductList HomeProductsLists={HomeProductsLists} />
        <HomePageProductList HomeProductsLists={HomeProductsLists} />
      </div>
    </Layout>
  )
}

export default WishList