import React from "react";

const ProjectHero = ({ year, title, tags, paragraph1, paragraph2, heroImage}:
  {year:number, title:string, tags:Array<string>, paragraph1:string, paragraph2:string, heroImage:string}) => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-10 font-['FavoritMono'] gap-6">
      <div className="md:col-span-6 flex flex-col">
        <div>
            <p className="text-gray">
                {year}
            </p>
            <h1 className="text-8xl font-medium font-['Roobert'] tracking-tighter mb-6">
                {title}
            </h1>
        </div>
        <h6 className="text-gray mb-2">
            WHAT WE DID
        </h6>
        <div className="flex flex-row gap-2 mb-6">
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
      <div className="col-span-4 flex justify-center items-center">
        <img
        src={heroImage}
        alt={`${title} hero`}
        className="w-full md:w-[90%] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ProjectHero;
