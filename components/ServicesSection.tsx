import Image from "next/image";
import AccordianDropdown from "./AccordianDropdown";

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
      className={`flex gap-20 items-center ${
        props.reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-[60px] justify-center">
        <h1 className="text-7xl font-medium font-['Roobert'] text-dark-gray">
          {props.title}
        </h1>
        <p className="font-['FavoritMono'] text-lg text-gray">{props.desc}</p>
        <div>
          {props.sections.map((section, i) => (
            <AccordianDropdown
              section={section}
              key={`${i} accordian dropdown`}
            />
          ))}
        </div>
      </div>
      <Image
        src={props.img}
        alt={`${props.title}'s image`}
        width={400}
        height={800}
      />
    </div>
  );
};

export default ServicesSection;
