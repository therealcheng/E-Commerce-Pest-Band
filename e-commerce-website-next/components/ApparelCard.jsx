import React from "react";
import Image from "next/image";

const ApparelCard = ({ name, description, price, src }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={src} alt="Shoes" width={350} height={350} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-primary">NEW</div>
          <div className="badge badge-neutral">£{price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Jumper</div>
        </div>
      </div>
    </div>
  );
};

export default ApparelCard;
