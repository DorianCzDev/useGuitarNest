import { useState } from "react";
import { useProducts } from "../services/useProducts";
import Search from "../ui/Search";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import ProductsList from "../ui/ProductsList";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";

function Guitars() {
  const [currPage, setCurrPage] = useState(1);

  const {
    isLoading: isLoadingProducts,
    products,
    productsCount,
    productsNeck,
    productsBody,
  } = useProducts();

  return (
    <>
      <Search />
      <div className="grid grid-cols-[300px_3fr] mt-8 md:block">
        <aside className="flex flex-col h-fit md:px-4 md:pb-6">
          <Filter productsBody={productsBody} productsNeck={productsNeck} />
        </aside>
        <article className="pb-10">
          <Sort />
          {isLoadingProducts ? (
            <Spinner />
          ) : (
            <ProductsList products={products} />
          )}

          <Pagination
            productsCount={productsCount}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
        </article>
      </div>
    </>
  );
}

export default Guitars;
