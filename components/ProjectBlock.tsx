import Link from "next/link";

export default function ProjectBlock({name, copy, image, url, wide=false}:{name:string, copy:string, image:string, url:string, wide?:boolean}) {
  
  return(
    <div className={`flex flex-col justify-center w-full ${wide?"items-start md:col-span-2 md:relative":"items-center"}`}>
      <img src={image} className="rounded-xl"/>
      <div className={`flex flex-col items-start justify-start gap-3 ${wide?"md:absolute bottom-12 md:pl-12 md:text-white":undefined}`}>
        <h3 className="text-3xl font-['Roobert'] font-medium mt-3">{name}</h3>
        <p className={`text-l md:max-w-1/2 ${wide?"md:text-white":"text-gray-700"}`}>{copy}</p>
        <Link className="italic underline text-xl mt-2 hover:text-gray-500" href={url}>VIEW PROJECT</Link>
      </div>
    </div>
  )
}