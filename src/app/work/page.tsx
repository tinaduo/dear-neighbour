import ProjectBlock from "../../../components/ProjectBlock";

export default function Work() {
  return(
    <main>
<head>
  <title>Work – Branding & Web Design Projects | Dear Neighbour</title>
  <meta name="description" content="Explore our collection of branding, web design, and community-driven creative work made for real people and real impact." />
  <meta property="og:title" content="Our Work | Dear Neighbour" />
  <meta property="og:description" content="See how we’ve helped small businesses bring their ideas to life with creative branding, websites, and storytelling design." />
  <meta property="og:image" content="/images/seo/our-work.png" />
  <meta property="og:type" content="website" />
</head>
      <h1 className="text-center justify-center text-4xl md:text-8xl font-medium font-['Roobert'] mb-10">
        Our Work
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        <ProjectBlock name={"Harmony"} url={"/work/harmony"} wide={true} image={"/images/work/harmony-bg.png"} copy={"An app designed to support caregivers by simplifying tasks, building connections, and empowering families with meaningful tools."}/>
        <ProjectBlock name={"Circles"} url={"/work/circles"} image={"/images/work/circles-mockup.png"} copy={"An app designed to simplify sharing with friends by making it more private, meaningful, and true to real life."}/>
        <ProjectBlock name={"Mélange"} url={"/work/melange"} image={"/images/work/melange-mockup.png"} copy={"A website specializing in contemporary art prints and posters by emerging global artists."}/>
      </section>
    </main>
  )
}