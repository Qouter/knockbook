import AppLayout from '../components/AppLayout'
import Gallery from '../components/Gallery'
import Title from '../components/Title'
import { getProducts } from '../firebase/client'

export default function Home({ products }) {
  return (
    <div className="flex justify-center w-screen h-screen align-middle">
      <div className="flex flex-col">
        <Title text="Products" />
        <Gallery products={products} />
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export async function getStaticProps() {
  const products = await getProducts()
  return {
    props: {
      products
    },
    revalidate: 5
  }
}
