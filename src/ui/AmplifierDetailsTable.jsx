import booleanConverter from "../helpers/booleanConverter";
import { ProductDetailsRow, ProductDetailsRowValue } from "./ProductDetailsRow";

function AmplifierDetailsTable({ product }) {
  const {
    effects_processor: effectsProcessor,
    power,
    memory_slots: memorySlots,
    channels,
    foot_switch_connection: footSwitchConnection,
    headphone_output: headphoneOutput,
    reverb,
    recording_output: recordingOutput,
  } = product;
  return (
    <>
      <ProductDetailsRow>
        Effects processor
        <ProductDetailsRowValue>
          {booleanConverter(effectsProcessor)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Power
        <ProductDetailsRowValue>{power}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Memory slots
        <ProductDetailsRowValue>{memorySlots}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Channels
        <ProductDetailsRowValue>{channels}</ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Foot Switch Connection
        <ProductDetailsRowValue>
          {booleanConverter(footSwitchConnection)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Headphone Output
        <ProductDetailsRowValue>
          {booleanConverter(headphoneOutput)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Reverb
        <ProductDetailsRowValue>
          {booleanConverter(reverb)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
      <ProductDetailsRow>
        Recording output
        <ProductDetailsRowValue>
          {booleanConverter(recordingOutput)}
        </ProductDetailsRowValue>
      </ProductDetailsRow>
    </>
  );
}

export default AmplifierDetailsTable;
