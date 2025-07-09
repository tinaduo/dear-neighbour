import Link from "next/link";

export default function ProjectBlock({name, copy, image, url, wide=false}) {
  const mainStyle = !wide?
    "flex flex-col justify-center items-center w-full"
    :
    "flex flex-col justify-center items-start w-full md:col-span-2"
  return(
    <div className={mainStyle}>
      <img src={image} className="rounded-xl"/>
      <div className="flex flex-col items-start justify-start gap-3">
        <h3 className="text-3xl font-['Roobert'] font-medium mt-3">{name}</h3>
        <p className="text-l text-gray-700 md:max-w-1/2">{copy}</p>
        <Link className="italic underline text-xl mt-2 hover:text-gray-500" href={`/work/${url}`}>VIEW PROJECT</Link>
      </div>
    </div>
  )
}