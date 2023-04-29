import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ h, w, sw, sws }) => {
  return (
    <div>
      <Oval
        height={h}
        width={w}
        color="#ffd700"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffd700"
        strokeWidth={sw || 2}
        strokeWidthSecondary={sws || 2}
      />
    </div>
  );
};

export default Loader;
