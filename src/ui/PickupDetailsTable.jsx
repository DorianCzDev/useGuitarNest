import booleanConverter from "../helpers/booleanConverter";
import { ProductDetailsRow, ProductDetailsRowValue } from "./ProductDetailsRow";

function PickupDetailsTable({ product }) {
  const {
    output,
    active,
    pickup,
    wiring,
    pickup_strings_number: pickupStringsNumber,
    kappe,
  } = product;
  return (
    <>
      <ProductDetailsRow>
        output
        <ProductDetailsRowValue>{output}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        active
        <ProductDetailsRowValue>
          {booleanConverter(active)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        pickup type
        <ProductDetailsRowValue> {pickup}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        wiring
        <ProductDetailsRowValue> {wiring}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Pickup strings number
        <ProductDetailsRowValue>{pickupStringsNumber}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        kappe
        <ProductDetailsRowValue>
          {booleanConverter(kappe)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
    </>
  );
}

export default PickupDetailsTable;
