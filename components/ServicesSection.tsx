import AccordionDropdown from "./AccordionDropdown";

type ServiceSection = {
  title: string;
  dropdownItems: string[];
};

type Props = {
  img: string;
  title: string;
  desc: string;
  sections: ServiceSection[];
  reverse?: boolean;
};

const ServicesSection = (props: Props) => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse gap-12 md:gap-20 items-center ${
        props.reverse ? "md:flex-row-reverse flex-col" : ""
      }`}
    >
      <div className="flex flex-col gap-10 justify-center">
        <h1 className="text-7xl font-medium font-['Roobert'] text-dark-gray">
          {props.title}
        </h1>
        <p className="font-['FavoritMono'] text-lg text-gray">{props.desc}</p>
        <div>
          {props.sections.map((section, i) => (
            <AccordionDropdown
              section={section}
              key={`${i} accordion dropdown`}
            />
          ))}
        </div>
      </div>
      <img
        src={props.img}
        alt={`${props.title}'s image`}
        className="md:w-[400px] md:max-h-[800px] w-full max-h-[300px] object-cover rounded-lg"
      />
    </div>
  );
};

export default ServicesSection;
