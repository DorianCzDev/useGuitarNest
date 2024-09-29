import booleanConverter from "../helpers/booleanConverter";
import { ProductDetailsRow, ProductDetailsRowValue } from "./ProductDetailsRow";

function GuitarDetailsTable({ product }) {
  const {
    body,
    neck,
    pickups,
    frets_number: fretsNumber,
    pickups_active: pickupsActive,
    left_handed: lefthanded,
    bridge_pickup: bridgePickup,
    neck_pickup: neckPickup,
    middle_pickup: middlePickup,
    strings_number: stringsNumber,
  } = product;
  return (
    <>
      <ProductDetailsRow>
        Body
        <ProductDetailsRowValue>{body}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Neck
        <ProductDetailsRowValue>{neck}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Pickups
        <ProductDetailsRowValue>
          {pickups ? pickups : "No Pickup"}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Frets
        <ProductDetailsRowValue>{fretsNumber}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Pickups active
        <ProductDetailsRowValue>
          {booleanConverter(pickupsActive)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Lefthanded
        <ProductDetailsRowValue>
          {booleanConverter(lefthanded)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Bridge pickup
        <ProductDetailsRowValue>
          {booleanConverter(bridgePickup)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Neck pickup
        <ProductDetailsRowValue>
          {booleanConverter(neckPickup)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Middle pickup
        <ProductDetailsRowValue>
          {booleanConverter(middlePickup)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Strings
        <ProductDetailsRowValue>{stringsNumber}</ProductDetailsRowValue>
      </ProductDetailsRow>
    </>
  );
}

export default GuitarDetailsTable;
