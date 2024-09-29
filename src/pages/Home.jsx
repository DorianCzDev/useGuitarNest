import { useDiscountedProducts } from "../services/useDiscountedProducts";
import { useFeaturedProducts } from "../services/useFeaturedProducts";
import HomeContent from "../ui/HomeContent";
import Spinner from "../ui/Spinner";

function Home() {
  const { featuredProducts, isLoading: isLoadingFeatured } =
    useFeaturedProducts();
  const { discountedProducts, isLoading: isLoadingDiscounted } =
    useDiscountedProducts();

  if (isLoadingDiscounted || isLoadingFeatured) return <Spinner />;
  return (
    <main className="w-[1300px] mx-auto xl:w-full xl:px-10">
      <HomeContent
        featuredProducts={featuredProducts}
        discountedProducts={discountedProducts}
      />
    </main>
  );
}

export default Home;
