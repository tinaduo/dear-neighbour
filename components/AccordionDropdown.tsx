"use client";

import { ServiceSection } from "@/utils/types";
import { useState, useEffect, useRef } from "react";

type Props = {
  section: ServiceSection;
};

const AccordionDropdown = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [props.section.dropdownItems]);

  function toggleOpen() {
    setIsOpened(!isOpened);
  }

  return (
    <div className="border-t-[1.5px] last-of-type:border-b-[1.5px] py-2 border-dark-gray">
      <button
        onClick={toggleOpen}
        className="cursor-pointer text-3xl text-dark-gray items-center flex w-full font-medium group"
      >
        <p className="flex-1 text-start transition-colors duration-300 group-hover:text-opacity-80">
          {props.section.title.toUpperCase()}
        </p>
        <p
          className={`text-5xl pb-2 transition-all duration-500 ease-out transform origin-center ${
            isOpened ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
        >
          {isOpened ? "–" : "+"}
        </p>
      </button>
      <ul
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: isOpened ? `${contentHeight}px` : "0px",
          opacity: isOpened ? 1 : 0,
          transform: isOpened ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {props.section.dropdownItems.map((item, i) => (
          <li
            key={`${i} dropdown item`}
            className="text-dark-gray text-lg transition-all duration-300 ease-out font-['FavoritMono']"
            style={{
              transitionDelay: isOpened ? `${i * 50}ms` : "0ms",
            }}
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordionDropdown;