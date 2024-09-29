import AmplifierDetailsTable from "./AmplifierDetailsTable";
import GuitarDetailsTable from "./GuitarDetailsTable";
import MultiEffectDetailsTable from "./MultiEffectDetailsTable";
import PickupDetailsTable from "./PickupDetailsTable";
import { ProductDetailsRow, ProductDetailsRowValue } from "./ProductDetailsRow";

function ProductsDetailsTable({ product }) {
  const { subcategory, inventory, category } = product;
  return (
    <div className="grid grid-cols-[550px_550px] mt-10 mb-14 w-fit mx-auto lg:grid-cols-[1fr] lg:w-full">
      <ProductDetailsRow>
        Category
        <ProductDetailsRowValue>{subcategory}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Avaliable
        <ProductDetailsRowValue>
          {inventory > 0 ? "Yes" : "No"}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      {category === "guitar" && <GuitarDetailsTable product={product} />}
      {category === "amplifier" && <AmplifierDetailsTable product={product} />}
      {category === "pickup" && <PickupDetailsTable product={product} />}
      {category === "multi effect" && (
        <MultiEffectDetailsTable product={product} />
      )}
    </div>
  );
}

export default ProductsDetailsTable;
