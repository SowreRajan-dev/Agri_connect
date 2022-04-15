import React from "react";
import Image from "next/image";
const FarmToHome = () => {
  return (
    <div className="mt-10 flex items-center justify-center p-10">
      <div>
        <Image
          src="/Images/FarmToHomeText.png"
          alt="text-pic"
          width="710px"
          height="440"
        />
      </div>
      <div>
        <Image
          src="/Images/FarmToHomePic.png"
          alt="farmtohome-pic"
          width="550px"
          height="360px"
        />
      </div>
    </div>
  );
};

export default FarmToHome;
