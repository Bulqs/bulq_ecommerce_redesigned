"use client";
import ProductPageBannerCarousel from '@/components/ProductPageBannerCarousel'
import Pagestitle from '@/components/Pagestitle';
import { HomePageProductList } from '@/components/HomePageProductList';
import { HomeProductsLists, ProductsHomePagesItems } from '@/data/data';
import { BackToSchool } from '@/components/buyables/BackToSchool';
import { HomeAndOffice } from '@/components/buyables/HomeAndOffice';
import { DealOfTheDay } from '@/components/buyables/DealOfTheDay';
import { ProductBuyingFooter } from '@/components/buyables/ProductBuyingFooter';
import { NewLetterSection } from '@/components/NewLetterSection';


const Products = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <ProductPageBannerCarousel />
      <Pagestitle />
      <HomePageProductList HomeProductsLists={ProductsHomePagesItems} />
      <BackToSchool />
      <HomePageProductList HomeProductsLists={ProductsHomePagesItems} />
      <HomeAndOffice />
      <HomePageProductList HomeProductsLists={ProductsHomePagesItems} />
      <DealOfTheDay />
      <ProductBuyingFooter />
      <NewLetterSection />
    </main>
  )
}



export default Products;