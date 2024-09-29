import { useProduct } from "../services/useProduct";
import ProductDetailsDescription from "../ui/ProductDetailsDescription";
import ProductDetailsHeader from "../ui/ProductDetailsHeader";
import ProductsDetailsTable from "../ui/ProductsDetailsTable";
import Reviews from "../ui/Reviews";
import Spinner from "../ui/Spinner";

function ProductDetails() {
  const { product, isLoading } = useProduct();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <ProductDetailsHeader product={product} />
      <article className="mx-auto">
        <ProductsDetailsTable product={product} />
        <ProductDetailsDescription description={product.description} />
      </article>
      <section>
        <Reviews id={product.id} avgRating={product.avg_rating} />
      </section>
    </div>
  );
}

export default ProductDetails;
