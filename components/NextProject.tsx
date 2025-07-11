import Link from "next/link";

export default function NextProject({url="/work"}) {
  return(
    <section>
      <div className="font-['Roobert'] font-medium text-3xl mb-32">
        <p>Thanks for taking the time to get to know Mélange!</p>
        <br/>
        <p>With love,</p>
        <p>Your dear neighbour</p>
      </div>
      
      <div>
        <p className="text-gray-700">CONTINUE EXPLORING!</p>
        <Link href={url} className="font-['Roobert'] font-medium text-6xl underline">Next Project</Link>
      </div>
    </section>
  )
}