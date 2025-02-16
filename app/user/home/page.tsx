import { AdidasOfficialStoreSection } from '@/components/AdidasOfficialStoreSection'
import BannerCarousel from '@/components/BannerCarousel'
import { HomePageProductList } from '@/components/HomePageProductList'
import { HomeProductAnimationSection } from '@/components/HomeProductAnimationSection'
import { NewLetterSection } from '@/components/NewLetterSection'
import { NikeOfficialStoreSection } from '@/components/NikeOfficialStoreSection'
import { OfficialVendors } from '@/components/OfficialVendors'
import { PromotoSection } from '@/components/PromotoSection'
import { Banner, HomeAnimationimages, HomePageAdidas, HomePageNike, HomeProductsLists, HomeProductsLists2, images } from '@/data/data'


export default function Home() {

  // const product = {
  //   image: 'https://via.placeholder.com/300x200',
  //   name: 'Sample Product',
  //   originalPrice: 120,
  //   discountPrice: 100,
  //   discountPercentage: 20,
  //   rating: 4,
  // };

  return (
    // <main className="overflow-hidden bg-appBanner w-full min-h-screen">
    <main className="flex min-h-screen flex-col justify-between">
      <BannerCarousel />
      <HomeProductAnimationSection HomeAnimationimages={HomeAnimationimages} />
      <OfficialVendors images={images} />
      <HomePageProductList />
      <NikeOfficialStoreSection HomePageNike={HomePageNike} />
      <AdidasOfficialStoreSection HomePageAdidas={HomePageAdidas} />
      <PromotoSection />
      <NewLetterSection />
    </main>
  )
}


// return Home;