import { useState } from "react";
import { useProducts } from "../services/useProducts";
import Search from "../ui/Search";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import Spinner from "../ui/Spinner";
import ProductsList from "../ui/ProductsList";
import Pagination from "../ui/Pagination";

function MultiEffects() {
  const [currPage, setCurrPage] = useState(1);

  const {
    isLoading: isLoadingProducts,
    products,
    productsCount,
  } = useProducts();
  return (
    <>
      <Search />
      <div className="grid grid-cols-[300px_3fr] mt-8 md:block">
        <aside className="flex flex-col h-fit md:px-4 md:pb-6">
          <Filter />
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

export default MultiEffects;
