"use client";

import { useState } from "react";
import Navigation from "./Navigation";

function Burger({data}) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-1">
      <button className="ml-2" onClick={() => setIsOpen(!isOpen)}>
        <span className="w-8 h-0.5 bg-softblack block mb-1.5"></span>
        <span className="w-8 h-0.5 bg-softblack block mb-1.5"></span>
        <span className="w-8 h-0.5 bg-softblack block "></span>
      </button>

      {isOpen === true ? <Navigation data={data} isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
    </div>
  );
}

export default Burger;
