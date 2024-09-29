import ProductElement from "../ui/ProductElement";

function HomeContent({ discountedProducts, featuredProducts }) {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-widest p-2 mb-10 text-left md:text-center">
        Best Deals
      </h1>
      <ul className="list-none flex flex-wrap sm:mx-auto sm:justify-center">
        {discountedProducts.map((product) => (
          <ProductElement product={product} key={product.id} />
        ))}
      </ul>

      <h1 className="text-4xl font-bold tracking-widest p-2 mb-10 text-left md:text-center">
        We Recomended
      </h1>
      <ul className="list-none flex flex-wrap sm:mx-auto sm:justify-center">
        {featuredProducts.map((product) => (
          <ProductElement product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export default HomeContent;
