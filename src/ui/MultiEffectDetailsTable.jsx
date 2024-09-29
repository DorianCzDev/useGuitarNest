import booleanConverter from "../helpers/booleanConverter";
import { ProductDetailsRow, ProductDetailsRowValue } from "./ProductDetailsRow";

function MultiEffectDetailsTable({ product }) {
  const {
    effects,
    amp_modeling: ampModeling,
    drum_computer: drumComputer,
    aux_port: auxPort,
  } = product;
  return (
    <>
      <ProductDetailsRow>
        effects
        <ProductDetailsRowValue>
          {booleanConverter(effects)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        amp modeling
        <ProductDetailsRowValue>
          {booleanConverter(ampModeling)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        drum computer
        <ProductDetailsRowValue>
          {booleanConverter(drumComputer)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        AUX Port
        <ProductDetailsRowValue>
          {booleanConverter(auxPort)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
    </>
  );
}

export default MultiEffectDetailsTable;
