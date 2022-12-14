import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertise from "./Advertise";

const AdvertiseSection = () => {

  const { data: AdvertiseData = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("https://assignment-12-server-side-atikdev-bd.vercel.app/advertise");
      const data = await res.json();
     const unsold = data.filter(d => !d.sold === true)
     
      return unsold;
    },
  });
  return (
  
    AdvertiseData && !AdvertiseData.sold && (
      <div className="mx-auto ml-3 lg:ml-6 mb-10">
        <>
          {" "}
          <h1 className="text-3xl lg:text-4xl mb-10 text-center text-primary">
            Promoted Books
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {AdvertiseData.map((ad) => (
              <Advertise key={ad._id} Advertise={ad}></Advertise>
            ))}
          </div>
        </>
      </div>
    )
  );
};

export default AdvertiseSection;
