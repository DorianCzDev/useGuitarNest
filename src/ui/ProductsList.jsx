import ProductElement from "./ProductElement";

function ProductsList({ products }) {
  return (
    <>
      <ul className="pt-4 pl-12 flex flex-wrap list-none md:justify-center md:pl-0">
        {products.map((product) => (
          <ProductElement product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
