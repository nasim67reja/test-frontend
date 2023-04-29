import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { capitalizedWords } from "./Reuse";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="home-top-panel-out">
      <div className="home-top-panel">
        <h2>
          {capitalizedWords(router.pathname.split("/")[1] || "Dashboard")}
        </h2>
        <input type="text" placeholder="🔎︎ Search here..." />
        <select className="select-language">
          <option value="eng">Eng (US)</option>
          <option value="eng">Eng (US)</option>
        </select>
        <div className="travis-card">
          <Image
            src="/image/travis.png"
            alt="travis_image"
            height={54}
            width={55}
            className="travis_image"
          />
          <p>Travis Herron</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
