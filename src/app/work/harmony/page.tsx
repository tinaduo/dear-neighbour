import CopyBlock from "../../../../components/CopyBlock";
import ImageGrid from "../../../../components/ImageGrid";
import NextProject from "../../../../components/NextProject";
import ProjectHero from "../../../../components/ProjectHero";

export default function Harmony() {
  return(
    <main className="flex flex-col gap-32 px-4 md:px-16 lg:px-32 pt-16 pb-32">
      <ProjectHero
        year="2024"
        title={"Harmony"}
        tags={["Ux Research", "Product Design", "AI Integration"]}
        paragraph1="This project first came to life during our time at BCIT, where we were challenged to use AI to support an underrepresented community. But for us, it was never just a school assignment — it was deeply personal. Many of us have been in caregiving roles for family, whether expected or not, and we’ve felt the  weight it can carry."
        paragraph2="So we built Harmony — an app designed to make care feel a little more manageable, and a lot more connected. We poured ourselves into it, not just as students, but as people who’ve lived it."
        heroImage="/images/harmony/hero.png"
      />
      <ImageGrid
        size="wide"
        images={[
          {url: "/images/harmony/harmony1.png", alt: "img1", size:"half"},
          {url: "/images/harmony/harmony1.png", alt: "img2", size:"half"}
        ]}
      />
      <CopyBlock
        number={1}
        header="Our Discovery"
        content={
          <p>
            Caregiving often falls on families who are already stretched thin. With tasks scattered across notes, texts, and memory, important details can easily slip through the cracks. We needed to create a tool that simplified care without adding more work.
          </p>
        }
      />
      <img src={"/images/harmony/harmony3.png"}/>
      <CopyBlock
        number={2}
        header="What We Learned"
        content={
          <p>
            Juggling care, work, and life isn’t rare — it’s the reality for so many. The emotional weight is real, and it’s easy to feel like you’re constantly juggling too much with too little support. We saw a need for something that didn’t just help organize tasks, but recognized the very human experience behind them.
          </p>
        }
      />
      <ImageGrid
        size="tall"
        images={[
          {url: "/images/harmony/harmony4.png", alt: "img4", size:"half"},
          {url: "/images/harmony/harmony5.png", alt: "img5", size:"half"},
          {url: "/images/harmony/harmony6.png", alt: "img6", size:"large"},
          {url: "/images/harmony/harmony7.png", alt: "img7", size:"square"}
        ]}
      />
      <CopyBlock
        number={3}
        header="What We Created"
        content={
          <p>
            When you’re caring for someone, your mind is always full — and it’s easy to feel like you’re the only one carrying it all. We wanted to create something that didn’t just organize care, but brought people together around it. With shared tasks, mood and meal tracking, and AI that helps write and remember things for you, Harmony becomes the single place where care teams can stay connected, in sync, and supported — so no one has to carry it alone.
          </p>
        }
      />
      <ImageGrid
        images={[
          {url: "/images/harmony/harmony8.png", alt: "img8", size:"wide"},
          {url: "/images/harmony/harmony9.png", alt: "img9", size:"large"},
          {url: "/images/harmony/harmony10.png", alt: "img10"},
          {url: "/images/harmony/harmony11.png", alt: "img11"}
        ]}
      />
      <NextProject project="Harmony" url="/work/circles"/>
    </main>
  )
}