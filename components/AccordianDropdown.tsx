"use client";

import { ServiceSection } from "@/utils/types";
import { useState, useEffect } from "react";

type Props = {
  section: ServiceSection;
};

const AccordianDropdown = (props: Props) => {
  let [isOpened, setIsOpened] = useState(false);

  function toggleOpen() {
    setIsOpened(!isOpened);
  }
  return (
    <div className="border-t-[1.5px] last-of-type:border-b-[1.5px] py-2 border-dark-gray">
      <button
        onClick={toggleOpen}
        className="cursor-pointer text-3xl text-dark-gray items-center flex w-full font-medium"
      >
        <p className="flex-1 text-start">{props.section.title.toUpperCase()}</p>
        <p
          className={`text-5xl pb-2 transition-transform duration-300 ${
            isOpened ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpened ? "–" : "+"}
        </p>
      </button>
      <ul
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpened ? "max-h-96" : "max-h-0"
        }`}
      >
        {props.section.dropdownItems.map((item, i) => (
          <li
            key={`${i} dropdown item`}
            className="py-1 text-dark-gray text-lg pl-2 font-medium"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordianDropdown;
