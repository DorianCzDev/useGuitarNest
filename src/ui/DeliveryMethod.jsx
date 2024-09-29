import priceFormater from "../helpers/priceFormater";

function DeliveryMethod({ deliveryMethods, setDeliveryDetails }) {
  return (
    <section className="text-lg pt-20">
      <h1 className="text-[40px] font-bold tracking-widest p-2 mb-6 text-neutral-400">
        Delivery method
      </h1>
      <form>
        {deliveryMethods.map((delivery) => (
          <div
            key={delivery.id}
            className="grid grid-cols-[1fr_380px_80px] border-t border-primary-700 py-4 px-4 md:grid-cols-[35%_50%_15%]"
          >
            <div>
              <input
                type="radio"
                name="delivery method"
                value={delivery.supplier}
                onChange={() =>
                  setDeliveryDetails({
                    supplier: delivery.supplier,
                    cost: delivery.cost,
                  })
                }
              />
              <span className="ml-3">{delivery.supplier}</span>
            </div>
            <span className="font-light text-base">
              delivery to you in {delivery.time} business days
            </span>
            <span>$ {priceFormater(delivery.cost)}</span>
          </div>
        ))}
      </form>
    </section>
  );
}

export default DeliveryMethod;
