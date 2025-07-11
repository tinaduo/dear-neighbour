import { ReactNode } from "react";

export default function CopyBlock({number=1, header, content}:{number:number, header:string, content:ReactNode}) {
  return(
    <section>
      <p className="text-lg text-gray">0{number}.</p>
      <div className="grid md:grid-cols-10">
        <h3 className="font-['Roobert'] font-medium text-4xl md:col-span-3">{header}</h3>
        <span className="col-span-1 md:col-span-7 text-gray-700">{content}</span>
      </div>
    </section>
  )
}