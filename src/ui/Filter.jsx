import { useLocation } from "react-router-dom";
import GuitarFilters from "./GuitarFilters";
import AmplifierFillters from "./AmplifierFillters";
import PickupFilters from "./PickupFilters";
import MultiEffectFilters from "./MultiEffectFilters";

function Filter({ productsBody, productsNeck }) {
  const location = useLocation();
  const pathname = location.pathname;
  if (pathname.includes("guitars"))
    return (
      <GuitarFilters productsBody={productsBody} productsNeck={productsNeck} />
    );
  if (pathname.includes("amplifiers")) return <AmplifierFillters />;
  if (pathname.includes("pickups")) return <PickupFilters />;
  if (pathname.includes("multieffects")) return <MultiEffectFilters />;
}

export default Filter;
