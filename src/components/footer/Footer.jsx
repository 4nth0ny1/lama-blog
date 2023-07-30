import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className="flex flex-row gap-4">
        <Image
          src="/1.png"
          width={25}
          height={25}
          alt="Lama Dev Facebook Account"
        />
        <Image src="/2.png" width={25} height={25} alt="Lama Dev" />
        <Image src="/3.png" width={25} height={25} alt="Lama Dev" />
        <Image src="/4.png" width={25} height={25} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
