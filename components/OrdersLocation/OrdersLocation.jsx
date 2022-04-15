import React from "react";
import Image from "next/image";
const OrdersLocation = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <Image
          src="/Images/ViewOrderText.png"
          alt="orders-location-img"
          width="765px"
          height="655px"
        />
      </div>
      <div className="md:ml-10">
        <Image
          src="/Images/MapImg.png"
          alt="map-image"
          width="630px"
          height="650px"
        />
      </div>
    </div>
  );
};

export default OrdersLocation;
