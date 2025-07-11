import React from "react";

const ProjectHero = ({ year, title, tags, paragraph1, paragraph2, heroImage }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between font-['FavoritMono']">
      <div className="flex flex-col gap-6">
        <div>
            <p className="text-gray">
                {year}
            </p>
            <h1 className="text-8xl font-medium font-['Roobert'] tracking-tighter">
                {title}
            </h1>
        </div>
        <h6 className="text-gray">
            WHAT WE DID
        </h6>
        <div className="flex flex-row gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="p-2 outline-1 outline-[#1E1E1E] outline-dashed justify-center items-center w-fit uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-4 text-lg tracking-tighter font-normal text-[#1E1E1E]">
            <p>
                Dear Reader,
            </p>
            <p>
                {paragraph1}
            </p>
            <p>
                {paragraph2}
            </p>
        </div>
        </div>
        <div className="flex flex-col items-end">
            <img
            src={heroImage}
            alt={`${title} hero`}
            className="w-full md:w-[90%] h-full object-cover rounded-lg"
            />
        </div>
    </section>
  );
};

export default ProjectHero;
