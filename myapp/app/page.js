import FeaturedItems from '@/components/FeaturedItems'
import Hero from '@/components/Hero'
import ProductItem from '@/components/ProductItem'
import ProductList from '@/components/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
    </main>
  )
}
